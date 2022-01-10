//footer button

var mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//

const addBtn = document.getElementById("submit-btn");
const cancelBtn = document.getElementById("cancel-btn");
const resetBtn = document.getElementById("reset-btn");
const recordContainer = document.querySelector(".record-container");
const deleteBtn = document.getElementById("delete-btn");
const editBtn = document.getElementById("edit-btn");

/************************************************ */
const name = document.getElementById("name");
const address = document.getElementById("address");
const number = document.getElementById("contact-num");
const email = document.getElementById("contact-email");
const userpwd = document.getElementById("userpw");

// some effects using js only
//name validate
name.addEventListener("keyup", keyUpUser);
function keyUpUser() {
  if (name.value.length == 0 || name.value === "" || name.value.length < 5) {
    name.style.border = "7px solid red";
  } else {
    name.style.border = "7px solid blue";
  }
}
//pw validate
userpwd.addEventListener("keyup", pwkeyup);
function pwkeyup() {
  if (userpwd.value.length < 8 || userpwd.value.length > 32) {
    userpwd.style.border = "7px solid red";
  } else {
    userpwd.style.border = "7px solid blue";
  }
}
//email validate
email.addEventListener("keyup", emailkeyup);
function emailkeyup() {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value.match(mailformat)) email.style.border = "7px solid blue";
  else email.style.border = "7px solid red";
}
//phone validate
number.addEventListener("keyup", phonevalidate);
function phonevalidate() {
  if (isNaN(number.value) || number.value.length !== 11)
    number.style.border = "7px solid red";
  else number.style.border = "7px solid blue";
}
//address validate
address.addEventListener("keyup", addressvalidate);
function addressvalidate() {
  if (
    address.value.length == 0 ||
    address.value.length < 5 ||
    address.value == ""
  )
    address.style.border = "7px solid red";
  else address.style.border = "7px solid blue";
}

//

let ContactArray = [];
let id = 0;

// Object constructor for Contact
function Contact(id, name, address, number, email, userpwd) {
  this.id = id;
  this.name = name;
  this.address = address;
  this.number = number;
  this.email = email;
  this.userpwd = userpwd;
}
//function to get a contact with id
// function getContact(id) {
//   return ContactArray.find((contact) => contact.id === id);
// }

//function to edit contact
// function editContact(id, contact) {
//   Object.assign(getContact(id), contact);
// }
// // Finding the last id
// function lastID(ContactArray) {
//   if (ContactArray.length > 0) {
//     id = ContactArray[ContactArray.length - 1].id;
//   } else {
//     id = 0;
//   }
// }

// Adding contact record

addBtn.addEventListener("click", function () {
  if (checkInputFields([name, address, number, email])) {
    setMessage("success", "Record added successfully!");
    var space = name.value.search(" ");
    var firstletter = name.value.slice(0, 1);
    var secondword = name.value.slice(space + 1, name.value.length);
    var fullname = firstletter + "." + secondword;

    id++;
    const contact = new Contact(
      id,
      fullname,
      address.value,
      number.value,
      email.value,
      (userpwd.innerHTML = "********")
    );
    ContactArray.push(contact);
    // clearInputFields();

    // Adding to list
    addToList(contact);
  } else {
    setMessage("error", "Empty input fields or invalid input!");
  }
});

// Adding to List (on the DOM)
function addToList(item) {
  const newRecordDiv = document.createElement("div");
  newRecordDiv.classList.add("record-item");
  newRecordDiv.innerHTML = `
        <div class = "record-el">
            <span id = "labelling" style="color: red">Contact ID: </span>
            <span id = "contact-id-content">${item.id}</span>
        </div>
        <div class = "record-el">
            <span id = "labelling" style="color: red">Name: </span>
            <span id = "name-content">${item.name}</span>
        </div>
        <div class = "record-el">
            <span id = "labelling" style="color: red">Password: </span>
            <span id = "name-content">${item.userpwd}</span>
        </div>
        
        <div class = "record-el">
            <span id = "labelling" style="color: red">Address: </span>
            <span id = "address-content">${item.address}</span>
        </div>
        <div class = "record-el">
            <span id = "labelling" style="color: red">Phone Number: </span>
            <span id = "contact-num-content">${item.number}</span>
        </div>
        <div class = "record-el">
        <span id = "labelling" style="color: red">Email Adress: </span>
        <span id = "contact-num-content">${item.email}</span>
    </div>

        <button type = "button" id = "delete-btn">
            <span>
                <i class = "fas fa-trash"></i>
            </span> Delete
            

        `;
  recordContainer.appendChild(newRecordDiv);
}

// Deletion of record
recordContainer.addEventListener("click", function (event) {
  //console.log(event.target);
  if (event.target.id === "delete-btn") {
    // removing from DOM
    let recordItem = event.target.parentElement;
    recordContainer.removeChild(recordItem);
  }
});
// for (let i = 0; i < editBtn.length; i++) {
//   // msh 3arf a3mel l edit
//   recordContainer.addEventListener("click", function (event) {
//     if (event.target.id == "edit-btn") {
//     }
//   });
// }

// resetting everything (id will get set to 0)
resetBtn.addEventListener("click", function () {
  ContactArray = [];
  location.reload(); //The reload() method reloads the current document.
});

// Displaying status/alerts
function setMessage(status, message) {
  let messageBox = document.querySelector(".message");
  if (status == "error") {
    messageBox.innerHTML = `${message}`;
    messageBox.classList.add("error");
    removeMessage(status, messageBox);
  }
  if (status == "success") {
    messageBox.innerHTML = `${message}`;
    messageBox.classList.add("success");
    removeMessage(status, messageBox);
  }
}

// Clearing all input fields
cancelBtn.addEventListener("click", function () {
  clearInputFields();
});

function clearInputFields() {
  name.value = "";
  address.value = "";
  number.value = "";
  email.value = "";
  userpwd.value = "";
  name.style = "none";
  address.style = "none";
  number.style = "none";
  email.style = "none";
  userpwd.style = "none";
}

// Removing status/alerts
function removeMessage(status, messageBox) {
  setTimeout(function () {
    messageBox.classList.remove(`${status}`);
  }, 2000);
}

// Input field validation
function checkInputFields(inputArr) {
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i].value === "") {
      number.style.border = "7px solid red";
      name.style.border = "7px solid red";
      address.style.border = "7px solid red";
      email.style.border = "7px solid red";
      userpwd.style.border = "7px solid red";
      return false;
    }
  }
  if (!phoneNumCheck(inputArr[2].value)) {
    return false;
  }
  if (validatedemail(inputArr[3].value)) {
    return true;
  }
  if (inputArr[0].value.length < 5) return false;
}

// Phone number validation function
function phoneNumCheck(inputtxt) {
  if (inputtxt.length !== 11) alert("enter 11 digits");
  else return true;

  //
  // let phoneNo = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; // american form
  // if (inputtxt.match(phoneNo)) {
  //   return true;
  // } else {
  //   return false;
  // }
}
function validatedemail() {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value.match(mailformat)) {
    return true;
  }
}

// //         </button>
// <button class="editbtn" type="button" id="edit-btn">
//   <span>
//     <i class="fas fa-edit"></i>
//   </span>{" "}
//   Edit
// </button>;
