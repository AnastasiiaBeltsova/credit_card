
function input() {
    let input_number = document.querySelector(".form__number").value;
    document.querySelector(".js--number").innerHTML = input_number;
}

let name = document.querySelector(".form__name");
name.addEventListener('keyup', function (elem) {
    let holder = document.querySelector(".card__holder");
    holder.textContent = elem.target.value;
})

// function inputMonth() {
//     let input_month = document.querySelector(".form__month").value;
//     document.querySelector(".js--month").innerHTML = input_month;

// }

let month = document.querySelectorAll(".form__monthes");
month.addEventListener('keyup', function (elem) {
    let date = document.querySelector(".js--month");
    date.textContent = elem.target.value;
})
