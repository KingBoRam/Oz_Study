class Item<T> {
  #content: T | null;
  constructor() {
    this.#content = null;
  }
  setItem(value: T) {
    this.#content = value;
  }
  getItem(): T | null {
    return this.#content;
  }
}

const numberItem = new Item<number>();
numberItem.setItem(100);
numberItem.getItem();

const stringItem = new Item<string>();
stringItem.setItem("100");
stringItem.getItem();

interface User {
  id: number;
  name: string;
}

interface Store<T> {
  findById(id: number): T | undefined;
  save(item: T): void;
}

class UserRepository implements Store<User> {
  #users: User[] = [];
  findById(id: number): User | undefined {
    return this.#users.find((user) => user.id === id);
  }
  save(item: User): void {
    this.#users.push(item);
  }
}

const userRepo = new UserRepository();
userRepo.save({id: 1, name: "josh"});
userRepo.save({id: 2, name: "han"});
console.log(userRepo.findById(1));

interface Product {
  id: number;
  price: number;
  name: string;
}

class ProductRepository implements Store<Product> {
  #products: Product[] = [];
  findById(id: number): Product | undefined {
    return this.#products.find((product) => product.id === id);
  }
  save(item: Product): void {
    this.#products.push(item);
  }
}
