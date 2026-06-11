import { useNavigate } from "react-router-dom";
import { useGame } from "../context/GameContext";
import { WinnerCard } from "../components/WinnerCard";
import { RotateCcw, Scale } from "lucide-react";

export default function Winner() {
  const navigate = useNavigate();
  const { bluePlayer, redPlayer, setBluePlayer, setRedPlayer } = useGame();
  const empate = bluePlayer.pontos === redPlayer.pontos;
  const vencedor = bluePlayer.pontos > redPlayer.pontos ? bluePlayer : redPlayer;

  function novaPartida() {
    setBluePlayer({ ...bluePlayer, pontos: 0 });
    setRedPlayer({ ...redPlayer, pontos: 0 });
    navigate("/");
  }

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-slate-950 flex items-center justify-center p-4 md:p-8">
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blob-indigo rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blob-purple rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-2xl relative z-10 space-y-8 flex flex-col items-center">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold tracking-widest text-purple-400 uppercase">Fim da Arena</span>
          <h1 className="text-4xl md:text-5xl font-black text-gradient-purple-cyan font-sans uppercase tracking-tight">
            Resultado Final
          </h1>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
        </div>
        {empate ? (
          <div className="w-full glass-panel p-10 rounded-3xl border border-amber-500/20 text-center space-y-6 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative">
              <div className="absolute -inset-3 bg-amber-400/10 rounded-full blur-lg pointer-events-none"></div>
              <div className="p-4 bg-amber-500/10 text-amber-400 rounded-full border border-amber-400/20 inline-block shadow-[0_0_15px_rgba(251,191,36,0.15)] relative z-10 animate-bounce">
                <Scale size={40} className="stroke-[2]" />
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-extrabold tracking-widest text-amber-400 uppercase">CONFRONTO EQUILIBRADO</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gradient-gold font-sans">
                Empate Técnico!
              </h2>
            </div>

            <p className="text-slate-400 text-sm max-w-md mx-auto">
              Nossos competidores mostraram a mesma inteligência e agilidade mental na arena, terminando empatados em pontuação.
            </p>
          </div>
        ) : (
          <div className="w-full">
            <WinnerCard nome={vencedor.nome} pontos={vencedor.pontos} cor={vencedor.cor} />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-left">
          <div className="glass-panel rounded-2xl p-6 border border-blue-500/20 relative overflow-hidden group shadow-lg hover:border-blue-500/40 transition-all duration-300">
            <div className="absolute -right-8 -bottom-8 w-20 h-20 bg-blue-500/5 rounded-full blur-xl pointer-events-none"></div>
            <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1">Jogador Azul</div>
            <div className="text-2xl font-bold text-slate-100 truncate">{bluePlayer.nome}</div>
            <div className="text-slate-400 text-sm mt-3 flex items-baseline gap-1.5">
              <span className="text-4xl font-extrabold text-blue-400 font-display drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                {bluePlayer.pontos}
              </span>
              <span>{bluePlayer.pontos === 1 ? 'ponto' : 'pontos'}</span>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-6 border border-red-500/20 relative overflow-hidden group shadow-lg hover:border-red-500/40 transition-all duration-300">
            <div className="absolute -right-8 -bottom-8 w-20 h-20 bg-red-500/5 rounded-full blur-xl pointer-events-none"></div>
            <div className="text-[10px] font-bold text-red-400 uppercase tracking-widest mb-1">Jogador Vermelho</div>
            <div className="text-2xl font-bold text-slate-100 truncate">{redPlayer.nome}</div>
            <div className="text-slate-400 text-sm mt-3 flex items-baseline gap-1.5">
              <span className="text-4xl font-extrabold text-red-400 font-display drop-shadow-[0_0_10px_rgba(239,68,68,0.3)]">
                {redPlayer.pontos}
              </span>
              <span>{redPlayer.pontos === 1 ? 'ponto' : 'pontos'}</span>
            </div>
          </div>
        </div>
        <button
          onClick={novaPartida}
          className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.04] active:scale-[0.98] shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 text-md cursor-pointer border border-emerald-500/20"
        >
          <RotateCcw size={18} />
          <span>Jogar Novamente</span>
        </button>
      </div>
    </div>
  );
}