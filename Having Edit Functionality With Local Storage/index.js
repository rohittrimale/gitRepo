// Write your code below:
function handleFormSubmit(event) {
  event.preventDefault();

  const name = event.target.username.value;
  const email = event.target.email.value;
  const phone = event.target.phone.value;

  const userDetails = {
    username: name,
    email: email,
    phone: phone,
  };

  localStorage.setItem(userDetails.email, JSON.stringify(userDetails));
  showUserONScreeen(userDetails);
}
function showUserONScreeen(userDetails) {
  const parentList = document.getElementById("listItem");
  const listItem = document.createElement("li");

  listItem.textContent = `${userDetails.username},${userDetails.email},${userDetails.phone}`;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  // deleteBtn.className = "delete-btn";

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";

  deleteBtn.addEventListener("click", function () {
    localStorage.removeItem(userDetails.email);
    listItem.remove();
  });

  editBtn.addEventListener("click", function () {
    let usernameInput = document.getElementById("username");
    usernameInput.value = userDetails.username;
    let emailInput = document.getElementById("email");
    usernameInput.value = userDetails.username;
    let phoneInput = document.getElementById("phone");
    usernameInput.value = userDetails.username;
    emailInput.value = userDetails.email;
    phoneInput.value = userDetails.phone;

    console.log(usernameInput);

    console.log(userDetails.username, userDetails.email);
    localStorage.removeItem(userDetails.email);
    listItem.remove();
  });
  listItem.appendChild(deleteBtn);
  listItem.appendChild(editBtn);
  parentList.appendChild(listItem);

  // list.innerHTML += '<button class="delete-btn"  >Delete</button>';
  // unorderList.appendChild(list);
}
