interface ContinentInterFace {
  getContinentName(): string;
}

class Continent implements ContinentInterFace {
  protected continentName: string;

  constructor(name: string) {
    this.continentName = name;
  }

  getContinentName() {
    return this.continentName;
  }
}

interface ContryInterface {
  capital: string;
  getInfo(): string;
}

class Country extends Continent implements ContryInterface {
  private name: string;
  capital: string;

  constructor(continentName: string, name: string, capital: string) {
    super(continentName);
    this.name = name;
    this.capital = capital;
  }

  getInfo() {
    this.continentName;
    return `${this.name}, ${this.capital}, ${this.getContinentName()}`;
  }
}

let country = new Country("asia", "south korea", "seoul");

console.log(country.getInfo());

// country.name;
country.capital;

abstract class AbstractCountry {
  name: string;
  capital: string;

  constructor(name: string, capital: string) {
    this.name = name;
    this.capital = capital;
  }

  setup(): void {
    console.log("setup comlete");
  }
  abstract dispalyInfo(): void;
}

class MyCountry extends AbstractCountry {
  dispalyInfo(): void {
    console.log("display info called");
  }
}

const myCountry = new MyCountry("south korea", "seoul");
