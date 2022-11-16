import create from "zustand";

const CONFIG = {
  pointsPerHit: 20,
  totalTime: 10000,
  roundTime: 1000,
  moles: 9,
};

const useGameStore = create((set, get) => ({
  gameStarted: false,
  activeMoleIndex: -1,
  round: 0,
  points: 0,
  time: 0,
  timeLeft: Math.floor(CONFIG.totalTime / CONFIG.roundTime),
  timeoutId: null,
  pointsPerHit: CONFIG.pointsPerHit,
  score: 0,
  hit: () => {
    const gameStarted = get().gameStarted;
    if (gameStarted) {
      set((state) => ({ points: state.points + CONFIG.pointsPerHit }));
    }
  },
  resetScore: () => {
    set(() => ({ score: 0 }));
  },
  startGame: () => {
    set(() => ({
      points: 0,
      round: 0,
      time: 0,
      gameStarted: true,
      timeLeft: Math.floor(CONFIG.totalTime / CONFIG.roundTime),
    }));
    get().updateTimeLeft();
    get().nextRound();
  },
  nextRound: () => {
    const timeoutId = get().timeoutId;
    let nextTimeoutId = null;
    if (timeoutId) clearTimeout(timeoutId);
    if (get().timeLeft > 1) {
      nextTimeoutId = setTimeout(get().nextRound, CONFIG.roundTime);
    }
    const nextMoleIndex = Math.floor(
      Math.random() * (CONFIG.moles)
    );
    set((state) => ({
      activeMoleIndex: nextMoleIndex,
      round: state.round + 1,
      time: CONFIG.roundTime,
      timeoutId: nextTimeoutId,
    }));
  },
  updateTimeLeft: () => {
    setTimeout(() => {
      if (get().timeLeft > 0) {
        get().updateTimeLeft();
        set((state) => ({ timeLeft: state.timeLeft - 1 }));
      } else {
        set(() => ({ gameStarted: false }));
      }
    }, CONFIG.roundTime);
  },
}));

export { useGameStore };
