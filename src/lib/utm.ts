// Guarda de onde veio a visita (UTMs dos links de anúncio/bio) durante a sessão do navegador.
// Exemplo de link: https://koovackarquitetura.com.br/?utm_source=instagram&utm_medium=bio
// O formulário e os eventos de clique leem esses dados para saber a origem de cada contato.
// sessionStorage = memória que dura só enquanto a aba estiver aberta (some ao fechar).

const CHAVE = 'koovack_origem';
const CAMPOS_UTM = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'] as const;

export type Origem = Partial<Record<(typeof CAMPOS_UTM)[number], string>> & {
  pagina_entrada?: string; // primeira página vista nesta visita
};

export function lerOrigem(): Origem {
  try {
    return JSON.parse(sessionStorage.getItem(CHAVE) ?? '{}') as Origem;
  } catch {
    return {}; // navegação privada ou armazenamento bloqueado: segue sem origem
  }
}

/** Chamada em toda página. Grava a origem na primeira página da visita. */
export function capturarOrigem(): void {
  try {
    const atual = lerOrigem();
    const params = new URLSearchParams(window.location.search);
    const utms: Origem = {};
    for (const campo of CAMPOS_UTM) {
      const valor = params.get(campo);
      if (valor) utms[campo] = valor.slice(0, 100);
    }
    const temUtmNova = Object.keys(utms).length > 0;
    const temUtmGuardada = CAMPOS_UTM.some((c) => atual[c]);

    // Primeira página da visita: guarda a página de entrada (e as UTMs, se houver).
    // Se a visita começou sem UTM e depois chegou um link com UTM, guarda as UTMs também.
    if (!atual.pagina_entrada || (temUtmNova && !temUtmGuardada)) {
      const origem: Origem = {
        pagina_entrada: atual.pagina_entrada ?? window.location.pathname,
        ...utms,
      };
      sessionStorage.setItem(CHAVE, JSON.stringify(origem));
    }
  } catch {
    // armazenamento indisponível: não faz nada
  }
}
