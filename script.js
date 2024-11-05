let contacts = [];

class Contact {
    firstName;
    lastName
}

function addContact(firstName, lastName){
    
    let myContact = new Contact();
    
    contacts.push(myContact);
    console.log(contacts);
    
}