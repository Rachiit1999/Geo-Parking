class Pass {
  constructor(id, vehicle) {
    this.id = id;
    this.price = 0;
    this.allocation_timestamp = new Date();
    this.vehicle = vehicle;
  }
}

export default Pass;
