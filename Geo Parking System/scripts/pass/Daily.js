import Pass from "./Pass.js";

class Daily extends Pass {
  constructor(id, vehicle) {
    super(id, vehicle);
  }

  getPrice() {
    switch (this.vehicle.type) {
      case "bike":
        return 5;
      case "motorbike":
        return 10;
      case "car":
        return 20;
    }
  }
}

export default Daily;
