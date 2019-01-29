import {sum} from "../js/lib.js";

test ('should check sum', () => {
    let items = [10, 50, 250, 190];
    const result = sum(items);
    expect(result).toBe(500);
});
//
// test ('should check max', () => {
//     let items = [10, 50, 250, 190];
//     const result = total.findMax(items);
//     expect(result).toBe(250);
// });