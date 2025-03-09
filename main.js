const currentNum = document.getElementById('number');

const decreaseBtn = document.getElementById('decrease');

const resetBtn = document.getElementById('reset');

const increaseBtn = document.getElementById('increase');

let newNum;
increaseBtn.addEventListener('click' , () => {
  newNum = Number(currentNum.innerHTML) +1;
  currentNum.innerHTML = newNum;
})


resetBtn.addEventListener('click' , () => {
  
  currentNum.innerHTML = 0;
})


decreaseBtn.addEventListener('click' , () => {
  newNum = Number(currentNum.innerHTML) -1;
  currentNum.innerHTML = newNum;
})

