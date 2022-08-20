// function that picks a random element
function RandomElement(list) {
    list_length = list.length;
    console.log(list_length)
    return list[Math.floor(Math.random() * list_length)]
};

list = [1, 2, 3, 4, 5, 6, 7 ,8];
console.log(RandomElement(list))

module.exports =  {
    RandomElement
};