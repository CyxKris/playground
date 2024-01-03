const HIT_NAMES = {
  first: "John Smith",
  second: "Samantha Howard",
  third: "Jonathan Bailey",
  more: {
    high: "Mary Works",
    low: "Mindy Seconds"
  }
}

const { second, third } = HIT_NAMES;

const { more: { high: bestPerson, low: worstPerson } } = HIT_NAMES;

console.log("The 'second' variable holds: ", second, "\nThe 'third' variable holds: ", third);
console.log("The best person for the job is: ", bestPerson, "\nThe worst person for the job is: ", worstPerson);
