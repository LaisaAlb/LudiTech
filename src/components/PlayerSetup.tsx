import { User } from "lucide-react";

interface Props {
  blueName: string;
  redName: string;
  setBlueName: (value: string) => void;
  setRedName: (value: string) => void;
}

export function PlayerSetup({ blueName, redName, setBlueName, setRedName }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      <div className="glass-panel p-6 rounded-2xl border border-blue-500/20 relative overflow-hidden group transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-500/20 transition-all duration-500"></div>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl group-hover:bg-blue-500/20 transition-all duration-300">
            <User size={24} />
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-400">Jogador Azul</h3>
            <p className="text-xs text-slate-400">Insira o nome do Player 1</p>
          </div>
        </div>
        <div className="relative">
          <input
            type="text"
            className="w-full px-4 py-3 bg-slate-950/40 border border-slate-700/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all placeholder:text-slate-500 text-white font-medium"
            placeholder="Nome do Jogador Azul"
            value={blueName}
            onChange={(e) => setBlueName(e.target.value)}
          />
        </div>
      </div>

      <div className="glass-panel p-6 rounded-2xl border border-red-500/20 relative overflow-hidden group transition-all duration-300 hover:border-red-500/40 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]">
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-red-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-red-500/20 transition-all duration-500"></div>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-red-500/10 text-red-400 rounded-xl group-hover:bg-red-500/20 transition-all duration-300">
            <User size={24} />
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-red-400">Jogador Vermelho</h3>
            <p className="text-xs text-slate-400">Insira o nome do Player 2</p>
          </div>
        </div>
        <div className="relative">
          <input
            type="text"
            className="w-full px-4 py-3 bg-slate-950/40 border border-slate-700/50 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none transition-all placeholder:text-slate-500 text-white font-medium"
            placeholder="Nome do Jogador Vermelho"
            value={redName}
            onChange={(e) => setRedName(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}