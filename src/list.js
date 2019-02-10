class Element {
  constructor(letter) {
    this.letter = letter;
  }

  plural(symbol) {
    const { letter } = this;
    const newElement = letter.endsWith(symbol) ? letter : `${letter}${symbol}`;
    return new Element(newElement);
  }

  toUpperCase() {
    const newElement = this.letter.toUpperCase();
    return new Element(newElement);
  }

  puts() {
    return this.letter;
  }
}

class List {
  constructor(list) {
    this.list = list;
  }

  filter(fn) {
    const newList = this.list.filter(fn);
    return new List(newList);
  }

  sort() {
    const newList = this.list.slice().sort();
    return new List(newList);
  }

  middle() {
    const { list } = this;
    const middleIndex = Math.round(list.length / 2);
    return new Element(list[middleIndex]);
  }
}

export default List;
