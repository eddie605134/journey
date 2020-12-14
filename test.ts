const person = {
  eddieName: "eddie" 
}

let personName = person.eddieName
function abc () {
  return 'abc'
}

const a = abc();
const b = abc();
const c = abc();

let m : string | number = 1;
m = '1'

function getpepeName (n: string | number) {
  if(typeof n === "string") {
    n = parseInt(n)
  }
  return n + n
}

getpepeName('123')

for (let i = 0;i < 5;i++) {
  setTimeout(()=> {
    console.log(i)
  })
}