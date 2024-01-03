const someString = "I love pizza!";

const toJadenCase = (something: string): string => {
    return something.split(" ").map(word => word = word[0].toUpperCase() + word.slice(1)).join(" ");
}

console.log(toJadenCase(someString));