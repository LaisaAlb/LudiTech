import type { Pergunta } from '../types/Pergunta';

export function obterPerguntaAleatoria(
  perguntas: Pergunta[],
  idsUsados: number[]
): Pergunta | null {

  const disponiveis = perguntas.filter(
    pergunta => !idsUsados.includes(pergunta.id)
  );

  if (!disponiveis.length) {
    return null;
  }

  const indice = Math.floor(
    Math.random() * disponiveis.length
  );

  return disponiveis[indice];
}