class Contact extends Person {
  phone;
  
  constructor(firstName, lastName, phone) {
    super(firstName, lastName);
    this.phone = phone;
    this.testFunk();
    this.funkTest();
  }

  testFunk() {
    let testVar = 2;
    console.log(testVar);
  }

  funkTest(){
    
  }
}
