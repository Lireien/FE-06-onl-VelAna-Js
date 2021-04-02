const getAllUsersBtnElement = document.querySelector(".get_users");
const getUserBtnElement = document.querySelector(".get_user");
const updateUserBtnElement = document.querySelector(".update_user");
const deleteUserBtnElement = document.querySelector(".delete_user");
const createUserBtnElement = document.querySelector(".create_user");
const formElement = document.querySelector(".form");
const usersFormElement = document.forms.users;
const tableElement = document.querySelector(".users-data");
const selectionELement = document.querySelector(".select");

const userIdInputELement = document.querySelector(".user_id");
const userPhoneInputElement = document.querySelector(".phone_value");
const userNameInputElement = document.querySelector(".name_value");
const userEmailInputElement = document.querySelector(".email_value");
const userAvatarInputElement = document.querySelector(".avatar_value");

getAllUsersBtnElement.addEventListener("click", () => {
  const p = readUsers();
  proceedRequest(p);
});
getUserBtnElement.addEventListener("click", () => {
  const userId = userIdInputELement.value;
  const p = readUser(userId);
  proceedRequest(p).then((userData) => {
    userPhoneInputElement.value = userData.phone;
    userNameInputElement.value = userData.name;
    userEmailInputElement.value = userData.email;
    userAvatarInputElement.value = userData.avatar;
  });
});
updateUserBtnElement.addEventListener("click", () => {
  const userId = userIdInputELement.value;
  const userData = getUserFromForm();
  const p = updateUser(userId, userData);
  proceedRequest(p).then(() => {
    resetUserForm();
  });
});
deleteUserBtnElement.addEventListener("click", () => {
  const userId = userIdInputELement.value;
  const p = deleteUser(userId);
  proceedRequest(p);
});
createUserBtnElement.addEventListener("click", () => {
  const userData = getUserFromForm();
  const p = createUser(userData);
  proceedRequest(p).then(() => {
    resetUserForm();
  });
});

function getUserFromForm() {
  const userData = {};
  const formData = new FormData(usersFormElement);
  for (let [key, val] of formData.entries()) {
    userData[key] = val;
  }
  return userData;
}
function resetUserForm() {
  formElement.reset();
}
function proceedRequest(promise) {
  return promise
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.error("Something went wrong");
      }
    })
    .then((data) => {
      console.log(data);
      return data;
    });
}
function moveUsersToTable() {
  fetch(`https://605dc52a9386d200171bb353.mockapi.io/api/v1/users`)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .then((data) => {
      data.forEach((user) => {
        fillTable(data);
      });
    });
}
function fillTable(users) {
  users.forEach((user) => {
    const template = `<tr><td>${user.usersid}</td><td>${user.name}</td><td>${user.phone}</td><td>${user.email}</td><td>${user.avatar}</td></tr>`;
    const templateElement = createElement(template);
    tableElement.append(templateElement);
  });
}

function createElement(template) {
  const element = createElement("table");
  element.innerHTML = template;
  return element.firstElementChild;
}

moveUsersToTable();

//CRUD
function createUser(newUserData) {
  return fetch(`https://605dc52a9386d200171bb353.mockapi.io/api/v1/users`, {
    method: "POST",
    body: JSON.stringify(newUserData),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
function readUsers() {
  return fetch(`https://605dc52a9386d200171bb353.mockapi.io/api/v1/users`);
}

function readUser(userId) {
  return fetch(
    `https://605dc52a9386d200171bb353.mockapi.io/api/v1/users/${userId}`
  );
}

function updateUser(userId, newUserData) {
  return fetch(
    `https://605dc52a9386d200171bb353.mockapi.io/api/v1/users/${userId}`,
    {
      method: "PUT",
      body: JSON.stringify(newUserData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

function deleteUser(userId) {
  return fetch(
    `https://605dc52a9386d200171bb353.mockapi.io/api/v1/users/${userId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Typ": "application/json",
      },
    }
  );
}
