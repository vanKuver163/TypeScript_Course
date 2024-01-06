let stringArr = ['one', 'hey', 'Pavel']

let guitars = ['Strat', 'Les Paul', 5150]

let mixedData = ['EVH', 1984, true]

stringArr[0] = 'John'
stringArr.push('hey')

guitars[0] = 1984
guitars.unshift('Jim')

guitars = stringArr

let test = []
let bands: string[] = []
bands.push("Led")

let myTuple: [string, number, boolean] = ["Pavel", 36, true]

let mixed = ["John", 1, false]

myTuple[1] = 42

let myObj: object
myObj = []
console.log(typeof myObj)
myObj = bands
myObj = {}

const exampleObj = {
    prop1: 'Pavel',
    prop2: true,
}

exampleObj.prop1 = "John"

interface Guitarist {
    name?: string,
    active: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: "Eddie",
    active: false,
    albums: ["OU812", 1984]
}
let jp: Guitarist = {
    name: "Jimmy",
    active: true,
    albums: ["I", "II", "IV"]
}

const greetGuitarist = (guitarist: Guitarist) =>  {
    if (guitarist.name){
        return `Hello ${guitarist.name?.toUpperCase()}!`
    } 
    return 'Hello!'   
}

console.log(greetGuitarist(jp))

enum Grade {
    U = 1,
    D,
    C,
    B,
    A
}

console.log(Grade.U);
