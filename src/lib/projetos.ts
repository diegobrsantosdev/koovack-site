// Funções de apoio para a coleção de projetos (como um "service" no Spring).
import { getCollection, type CollectionEntry } from 'astro:content';

export type Projeto = CollectionEntry<'projetos'>;

/** Nome do tipo para exibir na tela. */
export const ROTULO_TIPO: Record<Projeto['data']['tipo'], string> = {
  apartamento: 'Apartamento',
  casa: 'Casa',
  loja: 'Loja',
  comercial: 'Comercial',
};

/** Todos os projetos, na ordem definida pelo campo `ordem` (menor primeiro). */
export async function projetosOrdenados(): Promise<Projeto[]> {
  const todos = await getCollection('projetos');
  return todos.sort((a, b) => a.data.ordem - b.data.ordem);
}

/** Formata a área: 95 → "95 m²" */
export function formatarArea(m2: number): string {
  return `${m2.toLocaleString('pt-BR')} m²`;
}
