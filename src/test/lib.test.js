import {sum} from "../js/lib.js";
import {max} from "../js/lib.js";

test('Show sum', ()=>{
    const arrayTotalTest = [1,2,3];
    const resultTotalTest = sum(arrayTotalTest);
    expect(resultTotalTest).toBe(6);
});

test('Show max', () =>{
    const arrayMaxTest = [1,2,3];
    const resultMaxTest = max(arrayMaxTest);
    expect(resultMaxTest).toBe(3);
});
