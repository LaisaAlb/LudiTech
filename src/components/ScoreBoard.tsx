import { Crown } from "lucide-react";

interface Props {
  blueName: string;
  redName: string;
  blueScore: number;
  redScore: number;
}

export function ScoreBoard({ blueName, redName, blueScore, redScore }: Props) {
  const blueIsLeading = blueScore > redScore;
  const redIsLeading = redScore > blueScore;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">

      <div
        className={`glass-panel rounded-2xl p-6 relative overflow-hidden transition-all duration-500 flex items-center justify-between border ${blueIsLeading
            ? "border-amber-400 shadow-[0_0_25px_rgba(251,191,36,0.25)] scale-[1.02] bg-slate-900/60"
            : "border-blue-500/20 hover:border-blue-500/40"
          }`}
      >

        <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        {blueIsLeading && (
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400/5 rounded-full blur-2xl pointer-events-none"></div>
        )}

        <div className="space-y-1 relative z-10 flex-1 min-w-0 pr-4">
          <div className="flex items-center gap-2">
            <span className="flex-shrink-0 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
            <span className="text-xs font-semibold tracking-wider text-blue-400 uppercase">PLAYER 1</span>
            {blueIsLeading && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-amber-400/10 text-amber-300 px-2 py-0.5 rounded-full border border-amber-400/30">
                <Crown size={10} className="fill-amber-300 animate-bounce" /> LÍDER
              </span>
            )}
          </div>
          <h2 className="text-xl font-bold text-white truncate font-sans">{blueName || "Jogador Azul"}</h2>
        </div>

        <div className="relative z-10 text-right flex-shrink-0">
          <div className="text-5xl font-extrabold font-display tracking-wider text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">
            {blueScore}
          </div>
          <div className="text-[10px] font-medium uppercase tracking-widest text-slate-400">pontos</div>
        </div>
      </div>

      <div
        className={`glass-panel rounded-2xl p-6 relative overflow-hidden transition-all duration-500 flex items-center justify-between border ${redIsLeading
            ? "border-amber-400 shadow-[0_0_25px_rgba(251,191,36,0.25)] scale-[1.02] bg-slate-900/60"
            : "border-red-500/20 hover:border-red-500/40"
          }`}>
        <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
        {redIsLeading && (
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400/5 rounded-full blur-2xl pointer-events-none"></div>
        )}

        <div className="space-y-1 relative z-10 flex-1 min-w-0 pr-4">
          <div className="flex items-center gap-2">
            <span className="flex-shrink-0 w-3 h-3 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
            <span className="text-xs font-semibold tracking-wider text-red-400 uppercase">PLAYER 2</span>
            {redIsLeading && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-amber-400/10 text-amber-300 px-2 py-0.5 rounded-full border border-amber-400/30">
                <Crown size={10} className="fill-amber-300 animate-bounce" /> LÍDER
              </span>
            )}
          </div>
          <h2 className="text-xl font-bold text-white truncate font-sans">{redName || "Jogador Vermelho"}</h2>
        </div>

        <div className="relative z-10 text-right flex-shrink-0">
          <div className="text-5xl font-extrabold font-display tracking-wider text-red-400 drop-shadow-[0_0_10px_rgba(239,68,68,0.3)]">
            {redScore}
          </div>
          <div className="text-[10px] font-medium uppercase tracking-widest text-slate-400">pontos</div>
        </div>
      </div>
    </div>
  );
}