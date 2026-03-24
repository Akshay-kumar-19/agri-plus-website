let cards = Array.from(document.querySelectorAll(".card"));

const positions = ["c1","c2","c3","c4","c5"];

function applyClasses() {
  cards.forEach((card, index) => {
    card.classList.remove(...positions);
    card.classList.add(positions[index]);
  });
}


function next() {
  cards.push(cards.shift()); 
  applyClasses();
}


function prev() {
  cards.unshift(cards.pop()); 
  applyClasses();
}


setInterval(() => {
  next();
}, 1800);