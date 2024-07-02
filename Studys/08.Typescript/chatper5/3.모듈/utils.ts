export function log(message: string) {
  console.log(message);
}

export const appName = "demo";

export class User {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
