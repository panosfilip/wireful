# Independent IA, UX/UI & Discoverability Audit — Codex

**Date:** 2026-07-11  
**Scope:** all site templates, components, project data, local production build, and the deployed GitHub Pages site  
**Method:** independent source review; production build and Astro checks; browser inspection at 1440px desktop and 390px mobile; DOM and keyboard interaction testing; contact-flow submission test; Work filtering; published and draft case-study inspection; deployed 404 and crawler-directive checks; comparison with `AUDIT.md`.

**Guiding question:** can a visitor understand what Panagiotis offers, find credible work, and make contact without guessing or encountering unfinished or misleading states?

---

## Executive verdict

The website has a strong visual and strategic foundation. The homepage communicates the positioning quickly, the visual system feels intentional, the responsive layouts are generally robust, the Work taxonomy is thoughtful, and the strongest case studies present credible senior-level work.

It is not yet ready to be treated as a fully polished public portfolio because two trust failures dominate the experience:

1. The primary project-request form does not send anything.
2. Unfinished editorial content is published throughout the portfolio without a release gate.

These are more serious than most of the navigation and presentation issues in the existing `AUDIT.md`. Fixing them would materially change the site from “impressive work in progress” to a strong professional portfolio.

---

## What already works well

- The homepage hero answers who Panagiotis is, what he does, and provides clear Work and project-enquiry routes.
- The visual design is distinctive, consistent, and appropriate for a senior designer rather than a generic portfolio template.
- Desktop and mobile layouts showed no horizontal overflow in the tested core pages.
- Header navigation is consistent and correctly marks nested case-study pages as Work.
- The Work filters support multiple dimensions, URL restoration, a live result count, reset controls, and empty states.
- Case cards provide meaningful summaries rather than relying only on imagery.
- The direct `/contact` page is visually strong and makes the email address unmistakable.
- Case pages use one clear `h1`, useful metadata, related work, canonical URLs, and CreativeWork structured data.
- Skip navigation, reduced-animation CSS, Escape handling, and several focus-return patterns show good accessibility intent.
- `npm run build` and `npm run check` complete successfully with no Astro errors or warnings.

These strengths should be preserved while simplifying the weaker systems.

---

## Severity 1 — Critical

### 1. The “Start a project” flow cannot submit a request

Every prominent project CTA carries `data-overlay-trigger`, which prevents its `/contact` fallback and opens the project overlay.

The overlay states:

- “I read every request and usually reply within two working days.”
- “Send request.”
- The visitor’s email app “will open next” for attachments.

However, the submit handler prevents submission, calls no endpoint, opens no mail client, and displays:

> Your request is complete. This form is not connected to a sending service yet, so nothing has been submitted.

This was confirmed by completing every required field and the arithmetic check in the browser.

**Why it matters:** this is the site’s primary conversion flow. A motivated prospect can invest time completing five sections and only then learn that their request was discarded. That directly damages trust.

**Fix:**

1. Immediately remove `data-overlay-trigger` from project CTAs so their existing `href="contact"` fallback works.
2. Connect a real endpoint before restoring the overlay.
3. Remove the attachment promise unless files can actually be transferred.
4. Simplify the eventual form: make budget and timeline optional and expose plain email near the top.
5. Test success, server failure, spam protection, and confirmation states before relaunching it.

### 2. There is no publication gate for unfinished portfolio content

The public archive currently contains:

- 30 case studies.
- 13 entries marked internally as drafts and publicly labelled “Concept.”
- 12 generic placeholder covers.
- `[ADD ENGAGEMENT]` on all 30 detail pages.
- `[ADD REAL OUTCOME…]` on seven public pages.
- `[ADD SCREENSHOTS…]` on two public pages.

All case studies receive routes and enter the sitemap. Drafts are also eligible for Related Work and other proof surfaces. The homepage leads with draft my1521, and the Approach proof carousel begins with two unfinished projects.

**Why it matters:** visitors assessing a designer’s attention to detail see internal editorial notes, generic covers, and incomplete proof. Direct search visitors can land on these pages without first seeing the stronger homepage.

**Fix:**

1. Separate three independent fields:
   - editorial state: draft / complete;
   - visibility: private / unlisted / archive / featured;
   - work type: live / delivered / in progress / self-initiated concept.
2. Only completed public studies should enter routes, archive grids, homepage proof, Approach proof, Related Work, and sitemap.
3. Add `noindex` to intentionally public-but-unfinished pages if any must remain accessible.
4. Fail production builds when visible content contains `[ADD` or lacks required public metadata.
5. Replace my1521 as the homepage lead until real media is available.

---

## Severity 2 — High

### 3. Contact is not plainly discoverable in primary navigation

The header uses Approach / Work / About. There is no link labelled Contact, even though `/contact` exists and supports hiring and general enquiries.

The existing audit overstates this as “no way to reach contact” on mobile: the Start a project CTA remains visible. The real problem is that “Start a project” implies a high-commitment commercial enquiry and currently opens the broken form.

**Fix:** add Contact to desktop and mobile navigation. Keep Start a project as the separate CTA after it has a functioning destination.

### 4. The service offer lacks a useful destination

The homepage lists nine capabilities clearly, but they are inert. Five richer `offerAreas` descriptions already exist in the data and are not rendered.

Visitors can infer the broad offer from the homepage, Work, About, and Contact pages, so this is not a complete IA failure. What is missing is enough detail to answer scope and fit questions confidently.

**Fix:** render the existing service descriptions on the homepage or add a Services page/anchor. Link capabilities to the relevant service explanation and, where mappings genuinely match, filtered work.

Suggested primary structure:

**Work / Services / Approach / About / Contact**, with Start a project kept visually separate.

### 5. The Work archive is too long and duplicates its strongest projects

Observed page heights were approximately:

- 12,100px at desktop.
- 18,860px at mobile.

The three Featured cases are repeated immediately in All Work. Incomplete work then creates a long generic tail. The filter is static, so refinement controls disappear during browsing.

**Fix:**

1. Hide incomplete work first.
2. Exclude the featured three from the All Work grid.
3. On mobile, prefer a compact sticky “Filter · N projects” control opening a drawer or popover rather than pinning the full current filter block.
4. If concept work remains public, add a meaningful status facet such as Live / Delivered / Concept.

### 6. Capability tags use an inconsistent, inaccessible interaction model

Tags initially expose abbreviations such as WE, UI, DS, and PS. Labels depend on hover or a first touch.

Behavior varies:

- Inside cards, a desktop click activates the enclosing case-study link.
- On detail pages, a desktop click does nothing.
- Touch requires one tap to reveal and a second to filter.
- Keyboard users cannot operate them because they are non-focusable `<li>` elements with control-like ARIA.

The heading “Capability tokens” also exposes internal design-system language to visitors.

**Fix:** use real keyboard-focusable links, show full labels where space allows, and rename the heading to “Capabilities” or “Project type.”

### 7. Editorial `draft` is incorrectly presented as “Concept”

The card component publicly labels any draft without a live URL as Concept. Editorial incompleteness is not equivalent to self-initiated concept work. This can misrepresent commissioned or public-sector work.

**Fix:** use the separate editorial, visibility, and work-type model described in finding #2.

### 8. Returning from a case study can lose archive context

The global layout sets `history.scrollRestoration = "manual"` on every page. On a very long archive, this can prevent Back from restoring the previous project and scroll position.

The sticky Work link means case pages are not true dead ends, so the existing audit overstates that point. The higher-value improvement is preserving context.

**Fix:** restore native history behavior, retain filter query state, and then add a visible “Back to all work” or breadcrumb near the title.

---

## Severity 3 — Medium

### 9. The case-study lightbox is not actually keyboard-modal

The lightbox declares `aria-modal="true"`, but opening it:

- does not move focus into the dialog;
- does not trap focus;
- does not make background content inert.

Browser testing confirmed that focus remains on the covered image trigger and the next focusable controls remain behind the overlay.

**Fix:** focus the Close button or dialog on open, trap Tab/Shift+Tab, make the background inert, and restore focus to the trigger on close.

### 10. The mobile menu’s keyboard order works against the visual order

The primary nav appears before the CTA and toggle in DOM order. When the toggle opens the visually positioned menu, its links remain earlier in the tab sequence. Forward keyboard navigation from the toggle therefore continues into page content instead of entering the opened menu.

**Fix:** move focus to the first menu link on open and return it to the toggle on close, or restructure DOM order to match the interaction order.

### 11. Work filters use incomplete listbox semantics

The filters declare `role="listbox"` and `role="option"`, but only click and Escape behavior is implemented. Arrow Down did not move focus or select an option in browser testing.

**Fix:** either implement the complete listbox keyboard pattern or use a simpler disclosure containing native radio/checkbox controls.

### 12. Reduced-motion and pause behavior is incomplete

Only page hero scripts explicitly pause their hero video for `prefers-reduced-motion`. The homepage CTA, case cards, project overlay, and case galleries do not share that handling. Persistent visible motion has no user pause control.

**Fix:**

- add a shared reduced-motion handler covering all videos;
- provide a pause control for persistent visible motion;
- pause card/gallery media deterministically when offscreen;
- do not load overlay media until the overlay opens if it is not needed beforehand.

### 13. The Portfolio PDF is an undisclosed 23MB download

Opening PDFs in the same tab is not inherently a UX defect. The concrete issue is that the prominently linked portfolio file is about 23MB with no size warning.

**Fix:** compress it substantially and label it, for example, “Portfolio PDF · 23MB.” If a new tab is forced, disclose that behavior as well.

### 14. Short descriptions are over-collapsed

Approach contains 35 closed `<details>` elements and About contains 16. Their titles remain scannable, so the existing audit’s claim that “everything interesting” is hidden is overstated. However, requiring a click for every one-sentence explanation materially reduces discovery.

**Fix:** show short descriptions by default. Reserve accordions for genuinely longer content or expand representative items by default.

### 15. The deployed 404 is an unbranded dead end

The live site returns GitHub Pages’ default 404 with no WIREFUL navigation.

**Fix:** add `src/pages/404.astro` with Home, Work, and Contact routes. This is useful but lower severity than the existing audit suggests.

### 16. Footer heading and landmark semantics need refinement

The standalone sticky Back to top link sits outside the page landmarks. Contact also has an `h1` followed by footer `h3` headings without an intervening `h2`.

**Fix:** make footer column labels styled non-heading text where they are labels rather than document sections, and place the sticky control in an appropriate labelled region or footer context.

---

## Severity 4 — Low / discoverability improvements

### 17. Page descriptions are not differentiated

Home, Work, About, Approach, and Contact inherit the same generic meta description. This weakens search-result differentiation despite the metadata being technically present.

**Fix:** provide page-specific descriptions and shorten the home title where helpful.

### 18. The generated robots file is deployed at an ineffective path

The Astro project is hosted at `/wireful`, so the build publishes `/wireful/robots.txt`. Standard crawlers request robots rules only from the origin root `/robots.txt`; the live root currently returns a GitHub 404.

**Fix:** use a custom domain or root GitHub Pages site if root-level robots control is required. Independently submit `/wireful/sitemap.xml` through search-engine webmaster tools. This does not block crawling today; it means the generated project-subdirectory file is not providing the intended discovery signal.

### 19. Placeholder alt text describes imagery that is not displayed

The same generic coming-soon SVG receives project-specific alternatives such as “Public transport app interface redesign.” Screen-reader users are told substantive imagery exists while sighted users see a placeholder.

**Fix:** use truthful placeholder text such as “Project imagery coming soon,” or make a redundant placeholder decorative when the adjacent project title and summary already provide context.

### 20. Service and role vocabulary drifts across the site

The marquee, capability directory, project-form choices, Work taxonomy, skill groups, and unused offer areas maintain related but separate vocabularies. The professional role also changes between site configuration and About copy.

These systems should not be blindly unified—services and project metadata are different taxonomies—but their labels and mappings should be governed intentionally.

**Fix:** define one canonical services vocabulary, a separate project-tag taxonomy, and explicit mappings between them where appropriate.

### 21. Other small points

- Same-tab PDF behavior is a design choice, not automatically an error.
- Reordering Work before Approach is conventional but low priority without user evidence; Work is already visible and prominent.
- The HCI proof tile is slightly inconsistent with the numeric tiles but not a meaningful usability issue.
- The `<base>` fragment workaround is fragile and should be documented or replaced with explicit base-aware URLs over time.
- The footer’s “Elsewhere” group mixes LinkedIn with downloads; “Profiles” and “Downloads” would be clearer, and “Profile PDF” could be renamed CV/Résumé if that is what it contains.

---

## Comparison with the existing `AUDIT.md`

### Strong agreement

- Public drafts and placeholders are the largest content-trust problem.
- The homepage should not lead with my1521 before real media exists.
- Services need deeper explanation and a discoverable destination.
- The Work archive is overly long and duplicates featured cases.
- Capability abbreviations and “Capability tokens” are poor visitor language.
- A branded 404 is worthwhile.
- Accordions are overused for one-line descriptions.
- Landmark and heading-order gaps are real.
- Persistent autoplaying motion needs controls.
- Case studies would benefit from stronger archive orientation.

### Disagreement or qualification

| Existing finding | Codex assessment |
|---|---|
| “The overlay is genuinely good” | Strong disagreement. It is polished but cannot complete its core task. |
| Missing Contact means no mobile contact path | The Contact label is missing, but the header CTA remains visible. Its broken destination is the larger issue. |
| `/contact` is the weak path | Disagree. It is currently the only reliable contact path and is visually clear. |
| Embed the same overlay form on Contact | Do not do this until the form is connected and simplified. |
| Desktop capability clicks do nothing | True on detail pages; inside cards they activate the enclosing case link. The inconsistency is the problem. |
| Make the whole filter bar sticky | Prefer a compact sticky filter control on mobile. |
| Reorder Work first | Reasonable but subjective and low priority without behavioral evidence. |
| Case pages are navigation dead ends | Overstated because the sticky Work nav remains available. Lost Back/scroll context is more important. |
| Everything interesting is hidden | Hyperbolic, though 51 closed short descriptions do reduce discovery. |
| Reduced motion is handled for videos | Incorrect outside the four page heroes. |
| Force PDFs into new tabs | Subjective. The undisclosed 23MB file is the objective issue. |
| Robots and sitemap are correct | Both exist syntactically, but robots is at the wrong host path and sitemap includes unfinished work. |
| Drafts “will” be indexed | They are crawlable and may be indexed; actual index status requires Search Console evidence. |

---

## Recommended implementation order

| Priority | Change | Expected impact |
|---|---|---|
| 1 | Disable or connect the project overlay | Prevents lost enquiries and restores trust |
| 2 | Add a strict publication/visibility gate | Removes all raw editorial placeholders and weak search landings |
| 3 | Replace draft proof on Home and Approach | Makes the strongest work define the first impression |
| 4 | Add Contact and service depth to the IA | Improves conversion and fit assessment |
| 5 | Deduplicate and shorten Work; model statuses correctly | Makes portfolio browsing faster and more credible |
| 6 | Fix Back/scroll restoration and capability links | Improves multi-project exploration |
| 7 | Fix lightbox, mobile-menu, and filter keyboard behavior | Makes core interactions reliably accessible |
| 8 | Complete motion controls and reduced-motion handling | Improves accessibility, battery, and focus |
| 9 | Compress and label the Portfolio PDF | Removes a surprising large download |
| 10 | Add 404 and differentiated SEO metadata | Improves recovery and search presentation |

---

## Overall assessment

The website is strong in concept, visual execution, positioning, and responsive presentation. It already looks more considered and distinctive than most personal design portfolios. Its main weakness is not the design system—it is release discipline. Internal content states and an unfinished conversion mechanism are visible in production.

Once the form and publication gate are fixed, the site should be considered a strong professional portfolio. The remaining work is largely refinement: making navigation language more explicit, reducing archive friction, and completing keyboard/motion accessibility.

