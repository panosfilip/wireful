/**
 * Escapes HTML, then wraps bracketed placeholder tokens like
 * [ADD REAL OUTCOME] in a styled <mark class="ph"> so unfinished
 * content is visible on the page instead of silently blending in.
 */
export function withPlaceholders(text: string): string {
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return escaped.replace(
    /\[([^\]]+)\]/g,
    '<mark class="ph">[$1]</mark>',
  );
}
