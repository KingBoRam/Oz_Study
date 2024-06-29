"use strict";
class Continent {
    constructor(name) {
        this.continentName = name;
    }
    getContinentName() {
        return this.continentName;
    }
}
class Country extends Continent {
    constructor(continentName, name, capital) {
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
class AbstractCountry {
    constructor(name, capital) {
        this.name = name;
        this.capital = capital;
    }
    setup() {
        console.log("setup comlete");
    }
}
class MyCountry extends AbstractCountry {
    dispalyInfo() {
        console.log("display info called");
    }
}
const myCountry = new MyCountry("south korea", "seoul");
