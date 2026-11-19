// Registra eventos de conversão na "dataLayer", a fila de eventos que o Google Tag Manager lê.
// Até a fase 7 (GTM instalado), os eventos só ficam nessa fila e não vão para lugar nenhum.
// Para ver no navegador: F12 → Console → digite dataLayer e Enter.

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export type EventoConversao = 'whatsapp_click' | 'generate_lead' | 'view_project' | 'scroll_depth';

export function track(evento: EventoConversao, dados: Record<string, unknown> = {}): void {
  window.dataLayer = window.dataLayer || [];
  // Tira campos vazios para o evento ficar limpo
  const limpos = Object.fromEntries(Object.entries(dados).filter(([, v]) => v !== undefined && v !== ''));
  window.dataLayer.push({ event: evento, ...limpos });
}
