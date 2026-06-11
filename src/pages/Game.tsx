import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import perguntasData from "../assets/perguntas.json";
import type { Pergunta } from "../types/Pergunta";
import { useGame } from "../context/GameContext";
import { QuestionCard } from "../components/QuestionCard";
import { ScoreBoard } from "../components/ScoreBoard";
import { Eye, Gamepad2, X } from "lucide-react";

export default function Game() {
  const navigate = useNavigate();
  const { bluePlayer, redPlayer, setBluePlayer, setRedPlayer, totalPerguntas } = useGame();
  const [perguntasUsadas, setPerguntasUsadas] = useState<number[]>([]);
  const [perguntaAtual, setPerguntaAtual] = useState<Pergunta | null>(null);
  const [mostrarResposta, setMostrarResposta] = useState(false);
  const perguntas = perguntasData as Pergunta[];

  const restantes = useMemo(
    () => perguntas.filter((pergunta) => !perguntasUsadas.includes(pergunta.id)),
    [perguntas, perguntasUsadas]
  );

  function sortearPergunta() {
    if (bluePlayer.pontos >= totalPerguntas || redPlayer.pontos >= totalPerguntas) {
      finalizarJogo();
      return;
    }
    if (!restantes.length) {
      finalizarJogo();
      return;
    }
    const indice = Math.floor(Math.random() * restantes.length);
    const pergunta = restantes[indice];
    setPerguntaAtual(pergunta);
    setPerguntasUsadas([...perguntasUsadas, pergunta.id]);
    setMostrarResposta(false);
  }

  function revelarResposta() {
    setMostrarResposta(true);
  }

  function pontuar(jogador: "blue" | "red") {
    if (!perguntaAtual) return;
    let vitoriaImediata = false;
    if (jogador === "blue") {
      const novosPontos = bluePlayer.pontos + 1;
      setBluePlayer({ ...bluePlayer, pontos: novosPontos });
      if (novosPontos >= totalPerguntas) {
        vitoriaImediata = true;
      }
    } else {
      const novosPontos = redPlayer.pontos + 1;
      setRedPlayer({ ...redPlayer, pontos: novosPontos });
      if (novosPontos >= totalPerguntas) {
        vitoriaImediata = true;
      }
    }

    if (vitoriaImediata) {
      finalizarJogo();
    } else {
      proximaPergunta();
    }
  }

  function ninguemAcertou() {
    proximaPergunta();
  }

  function proximaPergunta() {
    setPerguntaAtual(null);
    setMostrarResposta(false);
    if (bluePlayer.pontos >= totalPerguntas || redPlayer.pontos >= totalPerguntas) {
      finalizarJogo();
    }
  }

  function finalizarJogo() {
    navigate("/winner");
  }
  const pontosMaximos = Math.max(bluePlayer.pontos, redPlayer.pontos);
  const progressoPercent = Math.min((pontosMaximos / totalPerguntas) * 100, 100);

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-slate-950 flex flex-col items-center p-4 md:p-8">
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blob-indigo rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blob-purple rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-4xl relative z-10 flex flex-col space-y-6 my-auto">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gradient-purple-cyan font-sans uppercase tracking-tight">
              LudiTech
            </h1>
            <span className="text-xs font-semibold text-slate-300 bg-slate-900 border border-white/10 px-4 py-2 rounded-full shadow-lg">
              Objetivo: <span className="font-bold text-purple-400">{totalPerguntas} pontos</span>
            </span>
          </div>
          <div className="w-full space-y-1">
            <div className="w-full h-2 bg-slate-900/80 border border-white/5 rounded-full overflow-hidden relative">
              <div
                className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 transition-all duration-500 ease-out rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                style={{ width: `${progressoPercent}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-[10px] text-slate-500 font-semibold tracking-wider uppercase px-1">
              <span>0 pts</span>
              <span>Progresso do Líder para Vitória</span>
              <span>{totalPerguntas} pts</span>
            </div>
          </div>
        </div>
        <ScoreBoard
          blueName={bluePlayer.nome}
          redName={redPlayer.nome}
          blueScore={bluePlayer.pontos}
          redScore={redPlayer.pontos}
        />
        {!perguntaAtual ? (
          <div className="glass-panel rounded-3xl p-10 md:p-14 text-center space-y-6 border border-white/10 shadow-2xl relative overflow-hidden flex flex-col items-center transition-all duration-300">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="p-5 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.15)] animate-pulse">
              <Gamepad2 size={40} className="stroke-[1.5]" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-slate-100 font-sans">Arena Pronta!</h2>
              <p className="text-slate-400 text-sm max-w-sm">
                Uma nova pergunta foi preparada para o confronto. Clique abaixo para sortear.
              </p>
            </div>
            <button
              onClick={sortearPergunta}
              className="px-10 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.04] active:scale-[0.98] shadow-lg shadow-purple-500/20 hover:shadow-cyan-500/30 flex items-center justify-center gap-2 text-md cursor-pointer"
            >
              <span>🎲 Sortear Pergunta</span>
            </button>
          </div>
        ) : (
          <div className="space-y-6 transition-all duration-300">
            <QuestionCard pergunta={perguntaAtual} mostrarResposta={mostrarResposta} />
            {!mostrarResposta ? (
              <div className="text-center">
                <button
                  onClick={revelarResposta}
                  className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.04] active:scale-[0.98] shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 mx-auto text-md cursor-pointer border border-indigo-400/20"
                >
                  <Eye size={20} />
                  <span>Revelar Resposta</span>
                </button>
              </div>
            ) : (
              <div className="space-y-6 py-6 px-6 glass-panel rounded-3xl border border-white/5 animate-fade-in">
                <div className="text-center">
                  <h3 className="text-xs font-extrabold tracking-widest text-purple-400 uppercase">
                    Quem acertou a resposta?
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button
                    onClick={() => pontuar("blue")}
                    className="flex items-center justify-center gap-2 p-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.97] shadow-lg shadow-blue-500/10 cursor-pointer border border-blue-500/20"
                  >
                    <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                    <span>🔵 {bluePlayer.nome}</span>
                  </button>
                  <button
                    onClick={() => pontuar("red")}
                    className="flex items-center justify-center gap-2 p-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.97] shadow-lg shadow-red-500/10 cursor-pointer border border-red-500/20"
                  >
                    <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                    <span>🔴 {redPlayer.nome}</span>
                  </button>

                  <button
                    onClick={ninguemAcertou}
                    className="flex items-center justify-center gap-2 p-4 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-650 hover:to-slate-750 text-slate-200 font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.97] shadow-lg shadow-slate-900/40 cursor-pointer border border-slate-650"
                  >
                    <X size={18} />
                    <span>Ninguém Acertou</span>
                  </button>
                </div>

                <div className="text-center pt-2">
                  <button
                    onClick={proximaPergunta}
                    className="text-slate-400 hover:text-white transition-colors text-sm font-medium flex items-center justify-center gap-1 mx-auto hover:underline cursor-pointer"
                  >
                    Pular pergunta
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}