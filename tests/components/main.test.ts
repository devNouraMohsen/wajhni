import { it, expect, describe } from 'vitest';

describe('group', () => {
    it.todo('should', async () => {
        const response = await fetch('http://localhost:3000/games');
        const data = await response.json();
        console.log(data);  
        expect(Array.isArray(data)).toBe(true); 
        expect(data).toHaveLength(2);  
    });
});
