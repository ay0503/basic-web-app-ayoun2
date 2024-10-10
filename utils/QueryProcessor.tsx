export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "Rohan";
  }

  if (query.toLowerCase().includes("plus")) {
    const numbers = query.match(/[0-9]+/g);
    if (numbers && numbers.length === 2) {
      const [num1, num2] = numbers.map(Number);
      return (num1 + num2).toString();
    }
  }

  if (query.toLowerCase().includes("largest")) {
    const numbers = query.match(/[0-9]+/g);
    if (numbers) {
      return numbers.reduce((max, current) => Math.max(Number(max), Number(current)).toString());
    }
  }

  if (query.toLowerCase().includes("multiplied")) {
    const numbers = query.match(/[0-9]+/g);
    if (numbers && numbers.length === 2) {
      const [num1, num2] = numbers.map(Number);
      return (num1 * num2).toString();
    }
  }

  if (query.toLowerCase().includes("square") && query.toLowerCase().includes("cube")) {
    const numbers = query.match(/[0-9]+/g);
    if (numbers) {
      for (const num of numbers) {
        const sqrt = Math.sqrt(Number(num));
        const cubeRoot = Math.cbrt(Number(num));
        if (Number.isInteger(sqrt) && Number.isInteger(cubeRoot)) {
          return num;
        }
      }
    }
  }

  if (query.toLowerCase().includes("primes")) {
    const numbers = query.match(/[0-9]+/g);
    if (numbers) {
      for (const num of numbers) {
        if (isPrime(Number(num))) {
          return num;
        }
      }
    }
  }

  if (query.toLowerCase().includes("power") && query.toLowerCase().includes("of")) {
    const numbers = query.match(/[0-9]+/g);
    if (numbers && numbers.length === 2) {
      const [num1, num2] = numbers.map(Number);
      return Math.pow(num1, num2).toString();
    }
  }

  if (query.toLowerCase().includes("minus")) {
    const numbers = query.match(/[0-9]+/g);
    if (numbers && numbers.length === 2) {
      const [num1, num2] = numbers.map(Number);
      return (num1 - num2).toString()
  }

  return "";
}

function isPrime(num: number): boolean {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }

  return true;
}