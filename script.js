const number = document.querySelector(".number");
const btn = document.querySelector(".generate")

const generateNummber = () => {
    // Generate Number between 1 - 10.
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    number.innerHTML = randomNumber
}

btn.addEventListener('click', generateNummber)




//run the generate Number function to load with random number
// otherwise it will keep it to zero upon refreshing

generateNummber()
// const random = Math.floor(Math.random() * 10 + 1);

// console.log(random)