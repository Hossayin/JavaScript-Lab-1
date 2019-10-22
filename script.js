{
  // let burgerCount = 2;
  // let pepsiCount = 3;
  // let name = "David";

  // let subTotal = burgerCount * 5 + pepsiCount * 1;
  // let tatol = subTotal * 1.06;

  // let Total = burgerCount * 5 + pepsiCount * 1;
  // console.log(`Subtotal: ${Total}`);
  // Total *= 1.06;

  // console.log(`SubTotal: ${subTotal}`);
  // console.log(`Total: ${Total.toFixed(2)}`);
  // console.log(`Thanks for ordering, ${name}.`);

  // let presidents = ["George Washington", "John Adams", "Thomas Jefferson"];
  // console.log(presidents);
  // console.log(`First president was ${presidents[0]}`);

  let tickets = 10;
  let isMember = false;
  let total = 20 * tickets;

  if (tickets >= 12) {
    total -= total * 0.2; //20% discount
  }
  if (isMember === true) {
    total -= total * 0.05; //5% discount
  } else {
    console.log("would you like to join?");
  }

  console.log(total);
}
{
  //count from 1 to 5
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
  //count from 0 to 4
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  for (let i = 10; i > 0; i--) {
    console.log(i);
  }
  for (let i = 2; i <= 10; i += 2) {
    console.log(i);
  }
}
// how many licks does it take?
{
  let tootsieRemaining = 100;
  const lickpower = 3;
  let lickcount = 0;
  while (tootsieRemaining > 0) {
    tootsieRemaining -= lickpower;
    console.log(tootsieRemaining);
    console.log("toots", tootsieRemaining);
    lickcount++;
    if (lickcount === 3) {
      console.log("CRUNCH!!");
      break;
    }
  }
  console.log(`It took ${lickcount} licks`);
}
{
  let letters = ["a", "b", "c", "d", "e"];
  //loop through an array using for
  for (let i = 0; i < letters.length; i++) {
    let letter = letters[i];
    console.log(letters[i]);
  }
  //loop through an array using for...of
  for (const letter of letters) {
    console.log(letter);
  }
}
