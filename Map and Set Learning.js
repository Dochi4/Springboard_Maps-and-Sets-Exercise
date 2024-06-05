
 
// const myMap = new Map();

// myMap.set("7","seven")
// const empty =[];
// myMap.set(true,"seven string")


const  add = (x,y) => x+y;
const  mult = (x,y) => x*y;

const funcCalls = new Map();

funcCalls.set(add,1)
funcCalls.set(mult,9)

const foeBandData = [[3,"3Door"],["three","Thereeeeee"],[41,"Sum 41"]];

const foeBandMap= new Map(foeBandData);

const bannedBand = new Set(["3Door","Thereeeeee","Sum 41"]);

bannedBand.add("imagine dragon")
