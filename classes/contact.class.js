class Contact extends Person {
  phone;
  
  constructor(firstName, lastName, phone) {
    super(firstName, lastName);
    this.phone = phone;
  }
}
