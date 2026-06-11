import { Trophy, Award, Sparkles } from "lucide-react";

interface Props {
  nome: string;
  pontos: number;
  cor: string;
}

export function WinnerCard({ nome, pontos, cor }: Props) {
  const isBlue = cor === "blue";

  return (
    <div
      className={`relative overflow-hidden rounded-3xl p-10 md:p-14 text-center border-2 glass-panel transition-all duration-500 shadow-2xl ${isBlue
        ? "border-blue-500/30 hover:border-blue-500/50 hover:shadow-[0_0_50px_rgba(59,130,246,0.2)]"
        : "border-red-500/30 hover:border-red-500/50 hover:shadow-[0_0_50px_rgba(239,68,68,0.2)]"
        }`}
    >
      <div className={`absolute -top-20 -left-20 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none ${isBlue ? 'bg-blue-500' : 'bg-red-500'}`}></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="absolute top-6 left-10 text-amber-300 animate-pulse">
        <Sparkles size={24} />
      </div>
      <div className="absolute bottom-10 right-10 text-amber-300 animate-bounce">
        <Award size={28} />
      </div>

      <div className="relative z-10 flex flex-col items-center space-y-6">
        <div className="relative">
          <div className="absolute -inset-4 bg-amber-400/20 rounded-full blur-xl pointer-events-none"></div>
          <div className="p-5 bg-gradient-to-b from-amber-300 to-amber-500 text-slate-950 rounded-full shadow-[0_0_30px_rgba(251,191,36,0.5)] relative z-10 animate-bounce">
            <Trophy size={48} className="stroke-[2.5]" />
          </div>
        </div>

        <div className="space-y-2">
          <span className="text-xs font-extrabold tracking-widest text-amber-400 uppercase">CAMPEÃO DO LUDITECH</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight drop-shadow-lg font-sans">
            <span className={isBlue ? "text-blue-400" : "text-red-400"}>
              {nome}
            </span>
          </h2>
        </div>

        <div className="py-2 px-8 bg-slate-950/50 border border-white/10 rounded-2xl inline-block shadow-inner backdrop-blur-md">
          <p className="text-2xl md:text-3xl font-extrabold text-amber-300 font-display tracking-wider">
            🎉 {pontos} {pontos === 1 ? 'ponto' : 'pontos'} 🎉
          </p>
        </div>

        <p className="text-slate-400 text-sm max-w-sm">
          Vitória espetacular! Uma performance de mestre que garante o lugar mais alto no pódio.
        </p>
      </div>
    </div>
  );
}