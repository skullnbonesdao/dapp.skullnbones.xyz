export function getRelativeTime(timestamp: number) {
  const now = Date.now();
  const difference = timestamp - now;

  const seconds = Math.round(difference / 1000);
  const minutes = Math.round(seconds / 60);
  const hours = Math.round(minutes / 60);
  const days = Math.round(hours / 24);
  const weeks = Math.round(days / 7);
  const months = Math.round(days / 30);
  const years = Math.round(days / 365);

  if (Math.abs(seconds) < 60) {
    return `${seconds > 0 ? '+' : ''}${seconds}s`;
  } else if (Math.abs(minutes) < 60) {
    return `${minutes > 0 ? '+' : ''}${minutes}m`;
  } else if (Math.abs(hours) < 24) {
    return `${hours > 0 ? '+' : ''}${hours}h`;
  } else if (Math.abs(days) < 7) {
    return `${days > 0 ? '+' : ''}${days}day`;
  } else if (Math.abs(weeks) < 4) {
    return `${weeks > 0 ? '+' : ''}${weeks}week`;
  } else if (Math.abs(months) < 12) {
    return `${months > 0 ? '+' : ''}${months}month`;
  } else {
    return `${years > 0 ? '+' : ''}${years}year`;
  }
}
