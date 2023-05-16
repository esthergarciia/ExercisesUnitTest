import 'jest';
import {reverseString} from "../src/exercise2";

describe('exercise2', () => {

    it('The text "Hello, its me", in reverse should be "em sti ,olleH" ', async () => {
        const result = reverseString("Hello, its me");
        expect(result).toBe("em sti ,olleH");
    });

    it('If the text is empty", in reverse should be empty', async () => {
        const result = reverseString("");
        expect(result).toBe("");
    });

});