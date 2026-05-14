const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function fmt(d: Date): string {
  return `${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

export function formatDateRange(start: Date, end?: Date, current?: boolean): string {
  if (current) return `${fmt(start)} to present`;
  if (end) return `${fmt(start)} to ${fmt(end)}`;
  return fmt(start);
}
