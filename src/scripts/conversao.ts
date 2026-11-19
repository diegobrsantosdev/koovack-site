// Roda em todas as páginas (importado pelo BaseLayout):
// 1. guarda a origem da visita (UTMs);
// 2. registra o evento whatsapp_click em qualquer link marcado com data-whatsapp.
import { capturarOrigem, lerOrigem } from '../lib/utm';
import { track } from '../lib/track';

capturarOrigem();

document.addEventListener('click', (e) => {
  const link = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[data-whatsapp]');
  if (!link) return;
  const origem = lerOrigem();
  track('whatsapp_click', {
    pagina: window.location.pathname,
    projeto: link.dataset.projeto,
    servico: link.dataset.servico,
    campanha: link.dataset.campanha ?? origem.utm_campaign,
    utm_source: origem.utm_source,
    utm_medium: origem.utm_medium,
  });
});
