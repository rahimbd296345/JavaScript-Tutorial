const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
document.getElementById('demo').innerHTML = fruits

fruits.splice(2, 0, 'Lemon', 'kiwi')

document.getElementById('demo').innerHTML = fruits