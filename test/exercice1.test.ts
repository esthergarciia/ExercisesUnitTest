import 'jest';
import {matches} from "../src/exercise1";


describe('exercise1', () => {

    it('The sentence "lore ipsum is boring", should have the word "boring" once', async () => {
        const result = matches("lore ipsum is boring", "boring");
        expect(result).toBe(1);
    });

    it('The sentence "lore ipsum is boring ipsum", should have the word "ipsum" twice', async () => {
        const result = matches("lore ipsum is boring ipsum", "ipsum");
        expect(result).toBe(2);
    });

    it('If the sentence is empty, should have return 0', async () => {
        const result = matches("", "ipsum");
        expect(result).toBe(0);
    });

    it('The sentence "lore ipsum is boring", should have return 0 if doesnt have a word', async () => {
        const result = matches("lore ipsum is boring", "");
        expect(result).toBe(0);
    });

    it('The sentence "lore ipsum is BORING", should have the word "boring" once', async () => {
        const result = matches("lore ipsum is BORING", "boring");
        expect(result).toBe(1);
    });

    it('The sentence "lore ipsum is boring", should have the word "BORING" once', async () => {
        const result = matches("lore ipsum is boring", "BORING");
        expect(result).toBe(1);
    });

});