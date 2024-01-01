function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const userContainer = document.getElementById("usersContainer");
            userContainer.innerHTML = users.map(user =>
                `<p>${user.name} - ${user.email}</p>`
                ).join('');
        })
        .catch(error => console.error('Error', error));
}
