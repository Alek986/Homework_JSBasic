function findType(value){
    return typeof value
}

let objectValue = ({});
let booleanValue = (true);
let numberValue = (37);
let stringValue = ("Alek");
let undefinedValue = (undefined);

console.log(findType(objectValue));
console.log(findType(booleanValue));
console.log(findType(numberValue));
console.log(findType(stringValue));
console.log(findType(undefinedValue))
