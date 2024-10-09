export function add(input) {
    let numbers = input;

    // Handle custom delimiters
    const delimiterMatch = input.match(/^\/\/(.*)\n/);
    if (delimiterMatch) {
        const delimiter = delimiterMatch[1];
        numbers = input.slice(delimiterMatch[0].length).split(new RegExp(`[${delimiter}\n]`));
    } else {
        numbers = input.split(/[\n,]+/).map(num => num.trim().replace(/["']/g, ''));

    }

    // Check for negative numbers
    const negativeNumbers = numbers.filter(num => Number(num) < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`);
    }

    // Calculate sum
    return numbers.reduce((accumulator, currentValue) => {
        const number = Number(currentValue);
        if (isNaN(number)) {
            throw new Error(`Invalid input: "${currentValue}" is not a number.`);
        }
        return accumulator + number;
    }, 0);
}
