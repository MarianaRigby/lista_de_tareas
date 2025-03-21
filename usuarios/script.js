const usersContainer = document.getElementById("users-container");
const users = [
  {
    name: "Emma",
    lastName: "Dorsey",
    role: "Senior Developer",
    photoURL:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "Courtney",
    lastName: "Henry",
    role: "Designer",
    photoURL:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "Tom",
    lastName: "Cook",
    role: "Director of Product",
    photoURL:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
];
let htmlDeUsuarios = "";
users.forEach((user, index) => {
  htmlDeUsuarios += `<img class="w-32 h-32 rounded-xl mb-5" src=${user.photoURL}/>`;
});
console.log(htmlDeUsuarios);
usersContainer.innerHTML = htmlDeUsuarios;
