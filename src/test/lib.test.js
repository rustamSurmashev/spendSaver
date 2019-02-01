import {sum} from "../js/lib.js";

test('Show sum', ()=>{
    const arrayTest = [1,2,3];
    const resultTest = sum(arrayTest);
    expect(resultTest).toBe(6);
});
