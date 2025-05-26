export function formatNumber(value: number, separator: string = ','): string {
  if (!Number.isFinite(value)) return '';

  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}
