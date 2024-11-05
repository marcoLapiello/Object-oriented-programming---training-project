let contacts = [];

class Contact {
    firstName;
    lastName
}

function addContact(firstName, lastName){
    let myContact = new Contact();
    myContact['firstName'] = document.getElementById("firstNameInput").value
    myContact['lastName'] = document.getElementById("lastNameInput").value
    contacts.push(myContact);
    console.log(contacts);
    
}