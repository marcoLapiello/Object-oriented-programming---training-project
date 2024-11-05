let contacts = [];

function addContact() {
  let name = document.getElementById("firstNameInput").value;
  let surname = document.getElementById("lastNameInput").value;
  let phone = document.getElementById("phoneInput").value;
  let myContact = new Contact(name, surname, phone);
  contacts.push(myContact);
  console.log(contacts);
  renderContacts();
}

function renderContacts (){
    let contact = "";
    let contentRef = document.getElementById("contactsContainer");
    contentRef.innerHTML = "";
    for (let index = 0; index < contacts.length; index++) {
        contact = contacts[index];
        contentRef.innerHTML += getContactTemplate(contact, index);
    }
}

function getContactTemplate(contact, index) {
    return /*html*/`
        <div id="contactNr${index}">
            <p>${contact.firstName}</p>
            <p>${contact.lastName}</p>
            <p>${contact.phone}</p>
        </div>
    `
}