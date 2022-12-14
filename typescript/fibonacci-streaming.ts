/**
 * You're going to provide a needy programmer a utility method that generates an infinite sized, sequential IntStream (in TypeScript Iterator<number>, in Python generator) which contains all the numbers in a fibonacci sequence.
 *
 * A fibonacci sequence starts with two 1s. Every element afterwards is the sum of the two previous elements. See:
 *
 * 1, 1, 2, 3, 5, 8, 13, ..., 89, 144, 233, 377, ...
 */

export function* fibonacciSequence(): Iterator<number> {
    let a = 1, b = 1;

    while(true) {
        yield a;
        [a, b] = [b, b + a];
    }
}
