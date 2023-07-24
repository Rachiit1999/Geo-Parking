import Pass from "./Pass.js";

class Monthly extends Pass {
  constructor(id, vehicle) {
    super(id, vehicle);
  }

  getPrice() {
    switch (this.vehicle.type) {
      case "bike":
        return 50;
      case "motorbike":
        return 100;
      case "car":
        return 200;
    }
  }
}

export default Monthly;
