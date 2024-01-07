class Coder {
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello, I'm ${this.age}`;
  }
}

const Pavel = new Coder("Pavel", "Rock", 36);
console.log(Pavel.getAge());

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLeng() {
    return `I write ${this.lang}`;
  }
}

const Sara = new WebDev("Mac", "Sara", "Lofi", 25);
console.log(Sara.getLeng());

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    (this.name = name), (this.instrument = instrument);
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play("strums"));

class Peeps {
  static count: number = 0;
  static getCount(): number {
    return Peeps.count
  }

  public id: number

  constructor(public name: string) {
    this.name = name
    this.id = ++Peeps.count
  }
}

const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Amy = new Peeps('Amy')

console.log(Amy.id)
console.log(Steve.id)
console.log(John.id)
console.log(Peeps.count)

class Bands {
  private dataState: string[]

  constructor() {
    this.dataState = []
  }

  public get data(): string [] {
    return this.dataState
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every(el => typeof el === 'string')){
      this.dataState = value
      return
    }
    else throw new Error('Param is not an array of string')
  }
}

const MyBands = new Bands()
MyBands.data = ['Neil Young', 'Led Zeppelin', 'Deep Purple']
console.log(MyBands.data)

MyBands.data = [...MyBands.data, 'The Beatles']

console.log(MyBands.data)