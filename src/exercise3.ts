/*
* What is the X percent of X number?
*
* Examples:
* percentage(20,100) //Returns: 20
* percentage(43,897) //Returns: 385.71
*
*/

export function percentage(xPercent: number, xNumber: number): number
{
    return (xPercent * xNumber) / 100;
}