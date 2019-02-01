import {Total, Product} from './lib.js';
import {ProductLocalStorage} from "./storage.js";
import {sum} from "./lib.js";


const formEl = document.querySelector('#product-form');
const nameEl = document.querySelector('#product-name');
const priceEl = document.querySelector('#product-price');
const productEl = document.querySelector('#product-list');
const totalPriceEl = document.querySelector('#totalPrice');

const spendList = new Total(new ProductLocalStorage());
rebuildTree(productEl, spendList);



formEl.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const name = nameEl.value;
    const price = parseInt(priceEl.value);

    if (isNaN(price)) {
        alert('Повторите заново и введите в поле соимость число');
        rebuildTree(productEl, spendList);
    }

    const product = new Product(name, price);
    spendList.add(product);
    nameEl.value = '';
    priceEl.value = '';
    rebuildTree(productEl, spendList);

    // let arr = [product.price];
    // let sum = (accumulator, price)=> accumulator + price;
    // totalPriceEl.textContent = arr.reduce(sum);
});

function rebuildTree(container, list) {
    container.innerHTML = '';

    for (const item of list.items) {
        const liEl = document.createElement('li');
        liEl.className = 'list-group-item';
        liEl.innerHTML = `
            <span data-id="text">${item.name} ${item.price} рублей(-я)</span>
            <button data-id="up" class="btn btn-danger btn-sm float-right">&uarr;</button>
            <button data-id="down" class="btn btn-danger btn-sm float-right">&darr;</button>
            <button data-id="remove" class="btn btn-danger btn-sm float-right">Удалить</button>
            <button data-id="deleteAll" class="btn btn-danger btn-sm float-right">Удалить всё</button>
        `;
        const textEl = liEl.querySelector('[data-id=text]');
        if (item.done) {
            textEl.classList.add('task-price');
        }
        textEl.addEventListener('click', (evt) => {
            item.done = !item.done;
            rebuildTree(container, list);
        });

        const upEl = liEl.querySelector('[data-id=up]');
        upEl.addEventListener('click', (evt) => {
            spendList.up(item);
            rebuildTree(container, list);
        });

        const downEl = liEl.querySelector('[data-id=down]');
        downEl.addEventListener('click', (evt) => {
            spendList.down(item);
            rebuildTree(container, list);
        });

        const removeEl = liEl.querySelector('[data-id=remove]');
        removeEl.addEventListener('click', (evt) => {
            spendList.remove(item);
            rebuildTree(container, list);
        });

        const deleteEl = liEl.querySelector('[data-id=deleteAll]');
        deleteEl.addEventListener('click', (evt) => {
            spendList.deleteAll(item);
            location.reload(true);
        });
        // let arr = [item.price];
        // let sum = (accumulator, price)=> accumulator + price;
        // totalPriceEl.textContent = arr.reduce(sum);

        // let arrSum = [item.price];
        // let totalPrice = sum(arrSum);
        // console.log(totalPrice);

        container.appendChild(liEl);

    }

    if (list.items.length !== 0) {
        const first = container.firstElementChild;
        first.querySelector('[data-id=up]').classList.add('invisible');

        const last = container.lastElementChild;
        last.querySelector('[data-id=down]').classList.add('invisible');
    }

};