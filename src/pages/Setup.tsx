import { useNavigate } from "react-router-dom";
import { useGame } from "../context/GameContext";
import { PlayerSetup } from "../components/PlayerSetup";
import { Gamepad2, Layers, Zap } from "lucide-react";

export default function Setup() {
  const navigate = useNavigate();
  const { bluePlayer, redPlayer, setBluePlayer, setRedPlayer, totalPerguntas, setTotalPerguntas } = useGame();

  function iniciar() {
    if (!bluePlayer.nome.trim() || !redPlayer.nome.trim()) {
      alert("⚠️ Por favor, informe o nome dos dois jogadores!");
      return;
    }
    navigate("/game");
  }

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-slate-950 flex items-center justify-center p-4 md:p-8">

      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blob-indigo rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blob-purple rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-2xl relative z-10 space-y-8 flex flex-col items-center">

        <div className="text-center space-y-4">
          <div className="inline-flex p-4 bg-purple-500/10 text-purple-400 rounded-2xl border border-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.15)] animate-float">
            <Gamepad2 size={40} className="stroke-[1.5]" />
          </div>
          <div className="space-y-1">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-gradient-purple-cyan font-sans uppercase">
              LudiTech
            </h1>
            <p className="text-slate-400 text-sm md:text-base font-medium uppercase tracking-wider">
              A Arena de Conhecimento Competitiva
            </p>
          </div>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
        </div>

        <div className="w-full space-y-8">
          <PlayerSetup
            blueName={bluePlayer.nome}
            redName={redPlayer.nome}
            setBlueName={(nome) => setBluePlayer({ ...bluePlayer, nome })}
            setRedName={(nome) => setRedPlayer({ ...redPlayer, nome })}
          />

          <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4">
            <div className="text-center">
              <h3 className="text-xs font-extrabold tracking-widest text-purple-400 uppercase">
                Condição de Vitória
              </h3>
              <p className="text-xs text-slate-400 mt-1">Selecione a pontuação necessária para vencer</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setTotalPerguntas(3)}
                className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-300 cursor-pointer ${totalPerguntas === 3
                  ? "bg-purple-600/20 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.2)] text-white scale-[1.02]"
                  : "bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700/50 hover:text-slate-200"
                  }`}
              >
                <div className={`p-2 rounded-lg ${totalPerguntas === 3 ? 'bg-purple-500/20 text-purple-400' : 'bg-slate-900 text-slate-500'}`}>
                  <Zap size={18} />
                </div>
                <div className="text-left">
                  <div className="font-bold text-sm">Modo Rápido</div>
                  <div className="text-xs text-slate-400">Vitória com 3 pontos</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setTotalPerguntas(5)}
                className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-300 cursor-pointer ${totalPerguntas === 5
                  ? "bg-purple-600/20 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.2)] text-white scale-[1.02]"
                  : "bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700/50 hover:text-slate-200"
                  }`}
              >
                <div className={`p-2 rounded-lg ${totalPerguntas === 5 ? 'bg-purple-500/20 text-purple-400' : 'bg-slate-900 text-slate-500'}`}>
                  <Layers size={18} />
                </div>
                <div className="text-left">
                  <div className="font-bold text-sm">Modo Normal</div>
                  <div className="text-xs text-slate-400">Vitória com 5 pontos</div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={iniciar}
          className="w-full sm:w-auto px-12 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.04] active:scale-[0.98] shadow-lg shadow-purple-500/20 hover:shadow-cyan-500/30 flex items-center justify-center gap-3 text-lg cursor-pointer"
        >
          <span>Iniciar Partida</span>
          <Gamepad2 size={20} />
        </button>
      </div>
    </div>
  );
}