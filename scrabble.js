class Scrabble {
  static POINT_SYSTEM = {
    A : 1, E : 1, I : 1, O : 1, U : 1, L : 1, N : 1, R : 1, S : 1, T : 1,
    D : 2, G : 2, B : 3, C : 3, M : 3, P : 3, F : 4, H : 4, V : 4, W : 4,
    Y : 4, K : 5, J : 8, X : 8, Q : 10, Z : 10
  };

  constructor(word) {
    this.word = word;
  }

  static score(word) {
    if (typeof word !== 'string') return 0;

    const POINTS = Scrabble.POINT_SYSTEM;

    return word.toUpperCase().split('').reduce((previous, current) => {
      if (!Object.keys(POINTS).includes(current)) return previous;
      return previous += POINTS[current];
    }, 0);
  }

  score() {
    return Scrabble.score(this.word);
  }
}

module.exports = Scrabble;