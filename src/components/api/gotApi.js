export default class gotApi {
  constructor() {
    this._baseApi = "https://anapioficeandfire.com/api";
  }
  getResource = async (url) => {
    const response = await fetch(`${this._baseApi}${url}`);
    if (!response.ok) {
      throw new Error(`Could not fetch ${url}``, received ${response.status}`);
    }
    return await response.json();
  };

  isSet = (data) => {
    if (data) {
      return data;
    } else {
      return "No Data :(";
    }
  };
  extractId = (item) => {
    const idRegExp = /\/([0-9]*)$/;
    return item.url.match(idRegExp)[1];
  };

  getAllCharacters = async () => {
    const res = await this.getResource(`/characters?page=5&pageSize=10`);
    return res.map(this.transformCharacter);
  };
  getCharacter = async (id) => {
    const character = await this.getResource(`/characters/${id}`);
    return this.transformCharacter(character);
  };
  transformCharacter = (char) => {
    return {
      id: this.extractId(char),
      name: this.isSet(char.name),
      gender: this.isSet(char.gender),
      born: this.isSet(char.born),
      died: this.isSet(char.died),
      culture: this.isSet(char.culture),
    };
  };

  getAllHouses = async () => {
    const res = await this.getResource(`/houses/`);
    return res.map(this.transformHouses);
  };
  getHouse = async (id) => {
    const house = await this.getResource(`/houses/${id}/`);
    return this.transformHouses(house);
  };
  transformHouses = (house) => {
    return {
      id: this.extractId(house),
      name: this.isSet(house.name),
      region: this.isSet(house.region),
      coatOfArms: this.isSet(house.coatOfArms),
      words: this.isSet(house.words),
    };
  };

  getAllBooks = async () => {
    const res = await this.getResource(`/books/`);
    return res.map(this.transformBooks);
  };
  getBook = async (id) => {
    const book = await this.getResource(`/books/${id}/`);
    return this.transformBooks(book);
  };

  transformBooks = (book) => {
    return {
      id: this.extractId(book),
      name: this.isSet(book.name),
      publisher: this.isSet(book.publisher),
      country: this.isSet(book.country),
      mediaType: this.isSet(book.mediaType),
    };
  };
}
