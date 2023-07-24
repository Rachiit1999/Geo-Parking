import Bike from "./vehicle/Bike.js";
import Employee from "./Employee.js";
import Motorbike from "./vehicle/Motorbike.js";
import Car from "./vehicle/Car.js";
import Daily from "./pass/Daily.js";
import Monthly from "./pass/Monthly.js";
import Yearly from "./pass/Yearly.js";

const employees = [];
const vehicles = [];
const passes = [];

const addEmployee = () => {
  employees.push(
    new Employee(
      employees.length + 1,
      document.getElementById("empName").value,
      document.getElementById("empContact").value
    )
  );
  console.log(employees);
  document.querySelector(".employee-form").style.height = "65px";
};

const addVehicle = () => {
  let v = null;
  let id = vehicles.length + 1;
  let name = document.getElementById("vehicleName").value;
  let owner = employees[employees.length - 1];

  switch (document.getElementById("vehicleType").value) {
    case "bike":
      v = new Bike(id, name, owner);
      break;
    case "motorbike":
      v = new Motorbike(id, name, owner);
      break;
    case "car":
      v = new Car(id, name, owner);
      break;
  }

  vehicles.push(v);
  console.log(vehicles);

  updatePriceChoices(v);
};

const printPass = (vehicle, choice) => {
  let pass = null;
  switch (choice) {
    case "daily":
      pass = new Daily(passes.length + 1, vehicle);
      break;
    case "monthly":
      pass = new Monthly(passes.length + 1, vehicle);
      break;
    case "yearly":
      pass = new Yearly(passes.length + 1, vehicle);
  }
  document.querySelector(
    ".vehicle-pass"
  ).innerHTML = `<h2>${pass.getPrice()}</h2>`;

  passes.push(pass);

  console.log(passes);
};

const updatePriceChoices = (v) => {
  let registerationPrice = document.querySelector(".registeration-price");
  const choices = ["Daily", "Monthly", "Yearly"];
  for (let i = 0; i < v.getPriceOptions().length; i++) {
    let button = document.createElement("INPUT");
    button.setAttribute("type", "button");
    button.value = choices[i] + "-" + v.getPriceOptions()[i];
    button.addEventListener("click", () => {
      printPass(v, choices[i].toLowerCase());
    });
    registerationPrice.appendChild(button);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  let empSaveBtn = document.getElementById("empSaveBtn");
  empSaveBtn.addEventListener("click", addEmployee);

  let vehicleSaveBtn = document.getElementById("vehicleSaveBtn");
  vehicleSaveBtn.addEventListener("click", addVehicle);
});
