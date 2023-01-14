const categories = document.getElementById("categories");
console.log("Number of categories:", categories.children.length);


const items = document.querySelectorAll('.item');
items.forEach(element => {
    const title = element.firstElementChild.textContent;
    const itemsLength = element.lastElementChild.children.length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${itemsLength}`);
});