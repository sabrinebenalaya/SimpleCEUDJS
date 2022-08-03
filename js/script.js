const users = [];
const validateButton = document.getElementById("valider");

validateButton.addEventListener("click", addUser);
showAllUsers();
updateOrDeleteUser();

//Fonctionnalités
function updateOrDeleteUser() {
    const deleteButtons = document.querySelectorAll('.Supprimer');
    const editButtons = document.querySelectorAll('.Modifier');

    deleteButtons.forEach((button) =>
        button.addEventListener('click', () => deleteUser(button.id))
    );
    editButtons.forEach((button) => {
        button.addEventListener('click', () => editeUser(button.id));
    });
}

//add a user
function addUser(e) {
    e.preventDefault();
    const enteredUsersData = {
        id: users.length !== 0 ? users[users.length - 1].id + 1 : 1,
        nom: document.getElementById("nom").value,
        prenom: document.getElementById("prenom").value,
        age: document.getElementById("age").value
    };
    if (
        enteredUsersData.nom !== "" &&
        enteredUsersData.prenom !== "" &&
        enteredUsersData.age !== ""
    ) {
        users.push(enteredUsersData);
        alert("user created");
        showAllUsers();
    }
}

//fitch all the user
function showAllUsers() {
    document.getElementById("allUsers").innerHTML = ""; // Pour rénitialiser le contenu de la div afin de lui attribuer de nouvelles valeurs
    users.forEach((user) => {
        const newInputs = {
            Nom: document.createElement("input"),
            Prenom: document.createElement("input"),
            Age: document.createElement("input")
        };
        const newDiv = document.createElement("div");
        const newButtons = {
            Supprimer: document.createElement("input"),
            Modifier: document.createElement("input")
        };

        for (const [key, value] of Object.entries(newInputs)) {
            value.setAttribute("type", "text");
            //Utile pour identifier l'input afin de pouvoir modifier son contenu par la suite
            value.setAttribute("id", `${key}OfUser${user.id}`);

            key === "Nom" && value.setAttribute("value", `${user.nom}`);
            key === "Prenom" && value.setAttribute("value", `${user.prenom}`);
            key === "Age" && value.setAttribute("value", `${user.age}`);

            newDiv.appendChild(value);
            document.getElementById("allUsers").appendChild(newDiv);
        }
        for (const [key, value] of Object.entries(newButtons)) {
            value.setAttribute("type", "button");
            value.setAttribute("class", key);
            value.setAttribute("id", user.id);
            value.setAttribute("value", key);
            newDiv.appendChild(value);
            document.getElementById('allUsers').appendChild(newDiv);
        }
        for (const [key, value] of Object.entries(newButtons)) {
            value.setAttribute("type", "button");
            value.setAttribute("class", key);
            value.setAttribute("id", user.id);
            value.setAttribute("value", key);
            newDiv.appendChild(value);
        }
    });
    updateOrDeleteUser();
}

// delete user
function deleteUser(id) {
    users.forEach((user) => {
        const userPositionInArray = users.indexOf(user);
        user.id === parseInt(id) && users.splice(userPositionInArray, 1);
        alert("user deleted");
    });
    showAllUsers();
}

//update user
function editeUser(id) {
    const newInputs = {
        nom: document.getElementById(`NomOfUser${id}`).value,
        prenom: document.getElementById(`PrenomOfUser${id}`).value,
        age: document.getElementById(`AgeOfUser${id}`).value,
    }
 
    users.forEach((user) => {
        if (user.id === parseInt(id))  {
            user.nom = newInputs.nom;
            user.prenom = newInputs.prenom;
            user.age = newInputs.age;  
            alert("user updated");
        }
    });
    showAllUsers();
}