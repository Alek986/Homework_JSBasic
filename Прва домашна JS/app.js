alert ("Mojata prva domasna vo JS-Basic")

//Circle

let pi = 3.14;
let diameter = 15 * 2;
 let area = pi * diameter;
 console.log ("The solution is:");
 console.log (area);
 console.log (typeof (area));


 //So promt vnesuvanje
let a = prompt("Enter side a");
let b = prompt("Enter side b");

let parsedA = parseInt(a);
let parsedB = parseInt(b) * 2;

let solution = parsedA * parsedB;
console.log("The solution is: " + solution);
console.log(typeof(solution))

// //Edna strana fiksna druga moze da se menja
// console.log("Drug tip");
// let c = 3.14;
// let d = promt("enter side d");
// let parsedD = parseInt(d) * 2
// let score = c * parsedD
// console.log("Drug primer za smetanje: " + score)
// console.log(typeof(score))



//  // Ne mi e jasno kako da ja presmetam so promt ovaa ravenka za radiusot
//  let piNumber = 3.14
//  let radiusCircle = prompt(radiusCircle * 2)
//  let parsedRadiusCircle = parsedInt(radiusCircle * 2)

// let area1 = piNumber * parsedRadiusCircle

//  //IPhones
console.log("Iphones")
 let numberIphones = 30 
 let iPhone = 119.95

let all = numberIphones * (iPhone/100 * 0.5) 
console.log (all)