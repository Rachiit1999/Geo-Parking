import Pass from "./Pass.js";

class Yearly extends Pass {
  constructor(id, vehicle) {
    super(id, vehicle);
  }

  getPrice() {
    switch (this.vehicle.type) {
      case "bike":
        return 500;
      case "motorbike":
        return 1000;
      case "car":
        return 2000;
    }
  }
}

export default Yearly;
