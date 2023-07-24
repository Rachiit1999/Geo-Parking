import Vehicle from "./Vehicle.js";

class Bike extends Vehicle {
  constructor(id, name, owner) {
    super(id, name, owner);
    this.type = "bike";
  }

  getPriceOptions() {
    return [5, 50, 500];
  }
}

export default Bike;
