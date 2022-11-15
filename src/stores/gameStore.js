import create from "zustand";

const CONFIG = {
  pointsPerHit: 20,
  totalTime: 10000,
  roundTime: 1000,
  moles: 9,
};

const useGameStore = create((set, get) => ({
  // 4 - Set the initial state
  gameStarted: false,
  activeMoleIndex: -1,
  round: 0,
  points: 0,
  time: 0,
  timeLeft: Math.floor(CONFIG.totalTime / CONFIG.roundTime),
  timeoutId: null,
  pointsPerHit: CONFIG.pointsPerHit,
  score: 0,

  // 5 - function to modify the points when a mole is hit
  hit: () => {
    const gameStarted = get().gameStarted;
    if (gameStarted) {
      set((state) => ({ points: state.points + CONFIG.pointsPerHit }));
      get().nextRound();
    }
  },

  // 7 - Reset the score
  resetScore: () => {
    set(() => ({ score: 0 }));
  },

  // 8 - Reset the game info and start the countdown and the randomize mole
  startGame: () => {
    set(() => ({
      points: 0,
      round: 0,
      time: 0,
      gameStarted: true,
      timeLeft: Math.floor(CONFIG.totalTime / CONFIG.roundTime), // Total time
    }));
    get().updateTimeLeft();
    get().nextRound();
  },

  // 6 - Show a new mole in a random position every second
  nextRound: () => {
    const timeoutId = get().timeoutId;
    let nextTimeoutId = null;
    if (timeoutId) clearTimeout(timeoutId);
    if (get().timeLeft > 2) {
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

  // 9 - Update the countdown
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
