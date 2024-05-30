const btnCreater = document.querySelector(".btnCreater")

btnCreater.addEventListener("click", function fetchCreate() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => createCards(users[Math.floor(Math.random() * users.length)]))

    function createCards(users) {
        const name = document.querySelector(".name")
        const lastName = document.querySelector(".lastN")
        const email = document.querySelector(".email")
        const company = document.querySelector(".company")


        name.innerHTML = users.name;
        lastName.innerHTML = users.username;
        email.innerHTML = users.email;
        company.innerHTML = users.company.name;
    }
})