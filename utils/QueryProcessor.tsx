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

  return "";
}
