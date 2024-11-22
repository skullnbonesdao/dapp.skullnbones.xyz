export function formatNumber(number: number, decimals = 2, padStart = 3) {
  const array = number.toFixed(decimals).split('.');
  array[0] = array[0].padStart(padStart, '0');
  const string = array.join('.');
  return string;
}