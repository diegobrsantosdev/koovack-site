// Monta o link do WhatsApp com a mensagem pré-preenchida.
// Fase 0: só a mensagem geral. Na fase 5 entram as mensagens por contexto (case, serviço, campanha)
// e o evento whatsapp_click.
import { site } from '../config/site';

export const MENSAGEM_GERAL =
  'Olá! Vim pelo site da Koovack Arquitetura e gostaria de um orçamento.';

export function linkWhatsApp(mensagem: string = MENSAGEM_GERAL): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}
