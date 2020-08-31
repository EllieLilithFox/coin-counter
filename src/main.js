function coinCounter(money) {
  if(money >= 0.25) {
    return "Quarters: " + Math.floor(money / 0.25) + coinCounter(((money * 100) % 25) / 100); // 0.43 43 / 25 18
  }
  else if(money >= 0.10 && money < 0.25)
  {
    return " Dimes: " + Math.floor(money/0.10) + coinCounter(((money * 100) % 10) / 100);
  }
  else if(money >= 0.05 && money < 0.10)
  {
    return " Nickels: " + Math.floor(money/0.05) + coinCounter(((money * 100) % 5) / 100);
  }
  else if(money >= 0.01 && money < 0.05)
  {
    return " Pennies: " + Math.floor(money/0.01) + coinCounter(((money * 100) % 1 ) / 100);
  } 
  else {
    return "";
  }
}

console.log(coinCounter(1.45));


function addPrefix(prefix){
  return function(name){
    return `${prefix} ${name}`;
  }
}

funcion animalNoises(sound) {
  return function(animal) {
    return `A ${animal} ${sound}`;
  }
}

const lionSound = animalNoises("roar");

lionSound("lion");

function nameEnchancer(prefix) {
  return function(suffix) {
    return function (name) {
      return `${prefix} ${name} ${suffix}` 
    }
  }
}

function addaMult(x) {
  return function(y) {
    return function(z) {
      return (x + z) * y;
    };
  };
}

const addTwoMultiplyByThree = addaMult(2)(3);

// export function quarters(money) {
//   if(money < 0.25)
//   {
//     return 0;
//   }
//   else
//   {
//     return quarters(money - 0.25) + 1;
//   }
// }

// export function nickels(money) {
//   if(money < 0.05) {
//     return 0;
//   } else {
//     return dimes(money - 0.05) + 1;
//   }
// }

// export function dimes(money) {
//   if(money < 0.10) {
//     return 0;
//   } else {
//     return dimes(money - 0.10) + 1;
//   }
// }

// export function pennies(money) {
//   if(money < 0.01) {
//     return 1;
//   } else {
//     return pennies(money - 0.01) + 1;
//   }
// }


// console.log(pennies(.04));
// const test1 = .03 - .01 - .01;
// const test2 = .26 - .25;
// console.log(.27 - .25);
// console.log(parseFloat(test1.toFixed(2)));
// console.log(parseFloat(test2.toFixed(2)));
//4.99 - 19 quarters, 2 dimes and 4 pennies

// function coinCounter(money){
//   const returnArray = [0.25, 0.1, 0.05, 0.01];
//   if(money == 0 || isNaN(money)) {
//     return [0, 0, 0, 0];
//   } else {
//     const coinAmounts = returnArray.map(function(element) {
//       console.log(money);
//       const incrementCounter = (money) => {
//         if (money < element) {
//           return 0;
//         } else {
//           console.log(money);
//           return incrementCounter(money - element) + 1;
//         }
//       }
//       return incrementCounter(money);
//   });
//   return coinAmounts;
// 	}
// }

