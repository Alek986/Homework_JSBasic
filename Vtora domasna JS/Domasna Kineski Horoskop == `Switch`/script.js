let yearOfBirth = parseInt(prompt("Enter your Year of Birth"))
let zodiacSign = (yearOfBirth - 4) % 12
switch(zodiacSign){
    case 0:
        console.log ("Your zodiac sign is: Rat");
        break
    case 1:
        console.log ("Your zodiac sign is: Ox");
        break
    case 2:
    console.log("Your zodiac sign is: Tiger");
        break;
    case 3:
        console.log("Your zodiac sign is: Rabbit");
        break
    case 4:
        console.log("Your zodiac sign is: Dragon");
        break;
    case 5:
        console.log("Your zodiac sign is: Snake");
        break
    case 6:
        console.log("Your zodiac sign is: Horse");
        break
    case 7:
        console.log("Your zodiac sign is: Goat");
        break
    case 8:
        console.log("Your zodiac sign is: Monkey");
        break
    case 9:
        console.log("Your zodiac sign is: Rooster");
        break
    case 10:
        console.log("Your zodiac sign is: Dog");
        break
    case 11:
        console.log("Your zodiac sign is: Pig");
        break
    default:
        console.log ("Enter valid Year of Birth")
    }
