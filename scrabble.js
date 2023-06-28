class Scrabble {
  static POINT_SYSTEM = {
    one: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    two: ['D', 'G'],
    three: ['B', 'C', 'M', 'P'],
    four: ['F', 'H', 'V', 'W', 'Y'],
    five: ['K'],
    eight: ['J', 'X'],
    ten: ['Q', 'Z']
  };

  constructor(word) {
    this.word = word;
  }

  static score(word) {
    if (typeof word !== 'string') return 0;

    const POINTS = Scrabble.POINT_SYSTEM;

    return word.toUpperCase().split('').reduce((previous, current) => {
      if (POINTS.one.includes(current)) {
        return previous += 1;
      } else if (POINTS.two.includes(current)) {
        return previous += 2;
      } else if (POINTS.three.includes(current)) {
        return previous += 3;
      } else if (POINTS.four.includes(current)) {
        return previous += 4;
      } else if (POINTS.five.includes(current)) {
        return previous += 5;
      } else if (POINTS.eight.includes(current)) {
        return previous += 8;
      } else if (POINTS.ten.includes(current)) {
        return previous += 10;
      } else {
        return previous;
      }
    }, 0);
  }

  score() {
    return Scrabble.score(this.word);
  }
}

module.exports = Scrabble;