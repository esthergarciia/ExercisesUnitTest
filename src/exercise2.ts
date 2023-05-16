/*
* Given a text string, flip it over and reverse the order of its characters.
*
* Example:
* reverse('hello') // Returns: 'aloh'
*/

export function reverseString(text:string): string
{
    return text.split("").reverse().join("");
}
