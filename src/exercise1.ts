/*
* Given a word, look for it in a sentence and return it how many times it appears in it.
The phrase and the word. They must be parameters of a function.
*
* Examples:
* matches("hello I'm a word in a sentence, WORD.", "word"). // Returns 2
* matches("I am the phrase", "esther") // Returns: 0
*
*/

export function matches(sentence: string, wordToSearch: string): number {

    const words = sentence.toLowerCase().split(" ");

    return words
        .filter((word: string): boolean => word === wordToSearch.toLowerCase())
        .length;
}
