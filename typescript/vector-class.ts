/**
 * Create a Vector object that supports addition, subtraction, dot products, and norms. So, for example:
 *
 * a = new Vector([1, 2, 3])
 * b = new Vector([3, 4, 5])
 * c = new Vector([5, 6, 7, 8])
 *
 * a.add(b)      # should return a new Vector([4, 6, 8])
 * a.subtract(b) # should return a new Vector([-2, -2, -2])
 * a.dot(b)      # should return 1*3 + 2*4 + 3*5 = 26
 * a.norm()      # should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
 * a.add(c)      # throws an error
 * If you try to add, subtract, or dot two vectors with different lengths, you must throw an error!
 *
 * Also provide:
 *
 * a toString method, so that using the vectors from above, a.toString() === '(1,2,3)' (in Python, this is a __str__ method, so that str(a) == '(1,2,3)')
 * an equals method, to check that two vectors that have the same components are equal
 * Note: the test cases will utilize the user-provided equals method.
 */

export class Vector {
    constructor(private components: number[]) {}

    add(vec: Vector): Vector {
        if(this.components.length === vec.components.length)
            return new Vector(this.components.map((el, idx) => el + vec.components[idx]));
        else throw new Error('Lengths are not the same!');
    };

    subtract(vec: Vector): Vector {
        if(this.components.length === vec.components.length)
            return new Vector(this.components.map((el, idx) => el - vec.components[idx]));
        else throw new Error('Lengths are not the same!');
    };

    dot(vec: Vector): number {
        if(this.components.length === vec.components.length)
            return this.components.map((el, idx) => el * vec.components[idx]).reduce((a, b) => a + b);
        else throw new Error('Lengths are not the same!');
    };

    norm(): number {
        return Math.sqrt(this.components.reduce((acc, curr) => acc + curr ** 2, 0));
    };

    toString(): string {
        return `(${this.components.join(',')})`;
    };

    equals(vec: Vector): boolean {
      return JSON.stringify(this.components) === JSON.stringify(vec.components);
    };
};
