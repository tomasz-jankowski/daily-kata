/**
 * Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
 *
 * Examples
 * pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
 * pigIt('Hello world !');     // elloHay orldway !
 */

export const pigIt = (a : string) : string =>  {
    const list = a.split(' ');
    return list.map(l => {
        if(/[a-zA-Z]/g.test(l))
            return l.slice(1) + l.slice(0, 1) + 'ay';
        else return l;
    }).join(' ');
}


// ----------------------------------------------------------------------------------------- //
// other solutions:                                                                          //
// export const pigIt = (a : string) => a.replace(/(\w)(\w+)*/g, "$2$1ay")                   //
// export const pigIt = (a : string) => a.replace(/[a-z]+/ig, x => x.slice(1) + x[0] + "ay") //
// ----------------------------------------------------------------------------------------- //
