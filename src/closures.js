function makeAdder(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    };
  };
}

const add2 = makeAdder(2);
const add3 = makeAdder(3);
const add4 = makeAdder(4);

console.log(add2(3)(4));
console.log(add3(2)(4));

function coinCounterClosures(inputMoney) {
  const money = inputMoney * 100;
  return function() {
    const quarters = Math.floor(money / 25);
    const array1 = [quarters];
    return function() {
      const dimes = Math.floor((money % 25) / 10 );
      const array2 = array1.concat([dimes]);
      return function() {
        const nickels = Math.floor(((money % 25) % 10) / 5);
        const array3 = array2.concat([nickels]);
        return function() {
          const pennies = Math.floor(((money % 25) % 10) % 5);
          const finalArray = array3.concat([pennies]);
          return finalArray;
          // return `Quarters: ${quarters}, Dimes: ${dimes}, Nickels: ${nickels}, Pennies: ${pennies}`;
        }
      }
    }
  }
}

const quarters = coinCounterClosures(1.45)()()()();
console.log(quarters);

console.log(1.45 % 0.25); // 0.20 0.199999999999
console.log(0.20 / 0.10);