import Vehicle from "./Vehicle.js";

class Car extends Vehicle {
  constructor(id, name, owner) {
    super(id, name, owner);
    this.type = "car";
  }

  getPriceOptions() {
    return [20, 200, 2000];
  }
}

export default Car;
