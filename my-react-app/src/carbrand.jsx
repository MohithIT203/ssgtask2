import React, { useState } from "react";
import './carbrand.css';
const carBrands = [
  "Audi", "BMW", "Chevrolet", "Dodge", "Ferrari", "Ford", "Honda", "Hyundai",
  "Jeep", "Kia", "Lamborghini", "Land Rover", "Lexus", "Mazda", "Mercedes-Benz",
  "Mitsubishi", "Nissan", "Porsche", "Subaru", "Tesla", "Toyota", "Volkswagen", "Volvo"
];

function CarBrandDropdown() {
  const [selectedBrand, setSelectedBrand] = useState("");

  return (
    <div className="dropdown-container">
      <select
        value={selectedBrand}
        onChange={(e) => setSelectedBrand(e.target.value)}
        className="dropdown"
      >
        <option value="" disabled>Select Car Brand</option>
        {carBrands.map((brand, index) => (
          <option key={index} value={brand}>{brand}</option>
        ))}
      </select>
    </div>
  );
}

export default CarBrandDropdown;
