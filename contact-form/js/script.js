let elForm = document.querySelector(".contact-form");
let elFirstName = document.querySelector(".contact-first-name");
let elLastName = document.querySelector(".contact-last-name");
let elPhoneNumber = document.querySelector(".contact-phone-number");
let elRelationship = document.querySelector(".contact-relationship");
let elContactInfoBox = document.querySelector(".contact-saver");

let contactsArr = [];

elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  let peopleInfo = {
    first_name: elFirstName.value,
    last_name: elLastName.value,
    phone_number: elPhoneNumber.value,
    relationship: elRelationship.value,
  }

  contactsArr.push(peopleInfo);

  let elContactInfo = document.createElement("li");
  let elContactItem1 = document.createElement("p");
  let elContactItem2 = document.createElement("p");
  let elContactItem3 = document.createElement("a");
  let elContactItem4 = document.createElement("p");

  contactsArr.forEach(function (contact) {
    elContactInfo.innerHTML = "";

    elContactItem1.textContent = contact.first_name;
    elContactItem2.textContent = contact.last_name;
    elContactItem3.textContent = contact.phone_number;
    elContactItem4.textContent = contact.relationship;

    elContactInfo.className = "d-flex justify-content-around ms-auto mb-1 p-1 rounded-1 text-bg-secondary";

    elContactItem3.className = "text-white";
    elContactItem3.setAttribute("href", `tel:+ ${contact.phone_number}`);

    elContactInfoBox.appendChild(elContactInfo);
    elContactInfo.append(elContactItem1, elContactItem2, elContactItem3, elContactItem4);
  })
})


elForm.addEventListener("reset", function() {
  elForm.value = "";
})

