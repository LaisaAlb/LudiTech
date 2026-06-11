import { HelpCircle, Sparkles } from "lucide-react";
import type { Pergunta } from "../types/Pergunta";

interface Props {
  pergunta: Pergunta;
  mostrarResposta: boolean;
}

export function QuestionCard({ pergunta, mostrarResposta }: Props) {
  return (
    <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden transition-all duration-300">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-col items-center text-center space-y-6 relative z-10">
        <div className="p-4 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
          <HelpCircle size={32} />
        </div>

        <span className="text-xs font-bold tracking-widest text-purple-400 uppercase">PERGUNTA DA RODADA</span>

        <h2 className="text-2xl md:text-3xl font-bold leading-relaxed text-slate-100 font-sans max-w-2xl">
          {pergunta.pergunta}
        </h2>

        <div
          className={`w-full max-w-md transition-all duration-500 ease-out overflow-hidden ${mostrarResposta
              ? "max-h-[200px] opacity-100 mt-6"
              : "max-h-0 opacity-0 mt-0"
            }`}
        >
          <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.1)] relative">
            <div className="absolute top-2 right-2 text-emerald-400/40">
              <Sparkles size={18} className="animate-pulse" />
            </div>
            <div className="text-xs text-emerald-400 font-semibold tracking-wider uppercase mb-1">
              Resposta Correta
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">
              {pergunta.resposta}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}