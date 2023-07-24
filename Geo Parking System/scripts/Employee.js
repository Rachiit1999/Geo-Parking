class Employee {
  constructor(id, name, contact) {
    this.id = id;
    this.name = name;
    this.contact = contact;
  }

  printMyContact() {
    alert(this.contact);
  }
}

export default Employee;
