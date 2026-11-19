// Monta o link do WhatsApp com a mensagem pré-preenchida por contexto.
// Na fase 5 entram as mensagens de serviço/campanha e o evento whatsapp_click.
import { site } from '../config/site';

export const MENSAGEM_GERAL =
  'Olá! Vim pelo site da Koovack Arquitetura e gostaria de um orçamento.';

/** Mensagem usada na página de um projeto (case). */
export function mensagemCase(tituloProjeto: string): string {
  return `Olá! Vi o projeto ${tituloProjeto} no site e gostaria de um orçamento para algo parecido.`;
}

export function linkWhatsApp(mensagem: string = MENSAGEM_GERAL): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}
