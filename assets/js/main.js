"use strict";

let array = [1, [1.1, ['1.1.1'], 1.2], 2, [2.1, ['2.1.1', '2.1.2'], 2.2, 2.3], 3, 4];
let generateList = function generateList(array) {
    let ul = document.createElement('ul');
    array.forEach(item => {
        let li = document.createElement('li'); 
        let liChild = null;
        if (Array.isArray(item)) {
            liChild = generateList(item);
            li.style.listStyleType = "none";
        }
        else {
            liChild = document.createTextNode(item);
        }
        li.append(liChild);
        ul.append(li);
    });
    return ul;
}
document.body.append(generateList(array));
