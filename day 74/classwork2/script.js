function addUser() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;

    if (firstName && lastName && email) {
        const table = document.getElementById("userTable");
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${email}</td>
            <td><button onclick="deleteRow(this)">Delete</button></td>
        `;


        table.appendChild(row);

        document.getElementById("userForm").reset();
    } else {
        alert("Please fill in all fields");
    }
}

function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
