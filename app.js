const fruits = new Map([
  ['apples', 300],
  ['bananas', 300],
  ['oranges', 200]
])

fruits.set('apples', 200)

document.getElementById('demo').innerHTML = fruits.get('apples')