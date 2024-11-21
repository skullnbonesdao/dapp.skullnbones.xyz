export function format_address(address: string | undefined, n = 6) {
  if (address) {
    try {
      const first_part = address?.substring(0, n);
      const last_part = address?.substring(address.length - n);
      return `${first_part}[...]${last_part}`;
    } catch (err) {
      return 'error';
    }
  }
  return 'error';
}
