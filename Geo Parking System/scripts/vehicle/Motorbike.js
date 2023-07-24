import Vehicle from "./Vehicle.js";

class Motorbike extends Vehicle {
  constructor(id, name, owner) {
    super(id, name, owner);
    this.type = "motorbike";
  }

  getPriceOptions() {
    return [10, 100, 1000];
  }
}

export default Motorbike;
