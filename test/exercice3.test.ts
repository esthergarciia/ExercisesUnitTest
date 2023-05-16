import 'jest';
import {percentage} from "../src/exercise3";

describe('exercise3', () => {

    it('The 45 percent of 89, should be 40.05', async () => {
        const result = percentage(45,89);
        expect(result).toBe(40.05);
    });

    it('The 0 percent of 89, should be 0', async () => {
        const result = percentage(0,89);
        expect(result).toBe(0);
    });

    it('The 45 percent of 0, should be 0', async () => {
        const result = percentage(45,0);
        expect(result).toBe(0);
    });

});