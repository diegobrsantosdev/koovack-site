// Monta o link do WhatsApp com a mensagem pré-preenchida por contexto.
// Na fase 5 entram as mensagens de serviço/campanha e o evento whatsapp_click.
import { site } from '../config/site';

export const MENSAGEM_GERAL =
  'Olá! Vim pelo site da Koovack Arquitetura e gostaria de um orçamento.';

/** Mensagem usada na página de um projeto (case). */
export function mensagemCase(tituloProjeto: string): string {
  return `Olá! Vi o projeto ${tituloProjeto} no site e gostaria de um orçamento para algo parecido.`;
}

/** Mensagem usada nos botões de cada forma de trabalhar. */
export function mensagemServico(nomeServico: string): string {
  return `Olá! Tenho interesse em ${nomeServico}. Pode me passar valores e prazos?`;
}

/**
 * Contexto de um botão de WhatsApp, enviado no evento whatsapp_click
 * (vira os atributos data-projeto, data-servico e data-campanha do link).
 */
export interface RastreioWhatsApp {
  projeto?: string;
  servico?: string;
  campanha?: string;
}

/** Atributos que marcam um link como WhatsApp para o rastreio de cliques. */
export function atributosRastreio(r: RastreioWhatsApp = {}) {
  return {
    'data-whatsapp': '',
    'data-projeto': r.projeto,
    'data-servico': r.servico,
    'data-campanha': r.campanha,
  };
}

export function linkWhatsApp(mensagem: string = MENSAGEM_GERAL): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}
