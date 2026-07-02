import type {AplusConfig} from '../types/wordpress.d';

export function isWordPress(): boolean {
  return typeof window !== 'undefined' && Boolean(window.aplusConfig?.isWordPress);
}

export function getWordPressConfig(): AplusConfig | null {
  return window.aplusConfig ?? null;
}

export async function submitToWordPress(
  endpoint: 'contact' | 'newsletter',
  data: Record<string, string>,
): Promise<{success: boolean; message: string}> {
  const config = getWordPressConfig();
  if (!config) {
    throw new Error('WordPress no está disponible.');
  }

  const response = await fetch(`${config.apiUrl}/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-WP-Nonce': config.nonce,
    },
    body: JSON.stringify(data),
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload?.message || 'No se pudo completar el envío.');
  }

  return payload;
}
