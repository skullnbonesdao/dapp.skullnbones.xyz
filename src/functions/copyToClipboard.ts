import { Notify } from 'quasar';

export async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    Notify.create({
      message: `Clipboard: ${text}`,
      position: 'bottom-right',
      type: 'info',
    });
  } catch ($e) {
    alert('Cannot copy');
  }
}
