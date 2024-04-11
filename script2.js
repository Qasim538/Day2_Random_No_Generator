const number = document.querySelector(".number")
const button = document.querySelector('.buttons')


const createNumber = () => {
    const numbers = Math.floor(Math.random() * 10 + 1);
    number.innerHTML = numbers
}

button.addEventListener('click', createNumber)