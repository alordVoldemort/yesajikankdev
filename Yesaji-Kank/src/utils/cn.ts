/**
 * Lightweight classname merger.
 * Upgrade to clsx + tailwind-merge for conflict resolution if needed.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
