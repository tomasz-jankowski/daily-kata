/**
 * Extend the String object (JS) or create a function (Python, C#) that converts the value of the String to and from Base64 using the ASCII (UTF-8 for C#) character set.
 *
 * Example (input -> output):
 * 'this is a string!!' -> 'dGhpcyBpcyBhIHN0cmluZyEh'
 * You can learn more about Base64 encoding and decoding here.
 *
 * Note: This kata uses the non-padding version ("=" is not added to the end).
 */

const binaryList = Array.from({ length: 64 }, (_, i) => i.toString(2).padStart(6, '0'));
const base64List = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

export function toBase64(str: string): string {
    const binary = str.split('').map(c => c.charCodeAt(0).toString(2).padStart(8, '0')).join('');
    const chunks = binary.match(/.{1,6}/g);
    return chunks!.map(c => base64List[binaryList.indexOf(c)]).join('');
}

export function fromBase64(str: string): string {
    const binary = str.split('').map(c => binaryList[base64List.indexOf(c)]).join('');
    const chunks = binary.match(/.{1,8}/g);
    return chunks!.map(c => String.fromCharCode(parseInt(c, 2))).join('');
}
