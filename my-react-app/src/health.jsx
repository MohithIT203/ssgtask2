import React, { useState } from "react";
import './health'
function AgeForm() {
  const [numPeople, setNumPeople] = useState(0); // Number of people
  const [ages, setAges] = useState([]); // List to store ages

  // Update the number of people and reset ages accordingly
  const handleNumPeopleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setNumPeople(value);
    setAges(new Array(value).fill("")); // Reset ages array
  };

  // Update age of specific person
  const handleAgeChange = (index, age) => {
    const updatedAges = [...ages];
    updatedAges[index] = age;
    setAges(updatedAges);
  };

  return (
    <div className="form-container">
      <label>
        Number of People:
        <input
          type="number"
          min="1"
          value={numPeople}
          onChange={handleNumPeopleChange}
          className="num-people-input"
        />
      </label>

      <div className="ages-container">
        {Array.from({ length: numPeople }, (_, index) => (
          <div key={index} className="age-input-group">
            <label>Person {index + 1} Age:</label>
            <input
              type="number"
              min="0"
              value={ages[index] || ""}
              onChange={(e) => handleAgeChange(index, e.target.value)}
              className="age-input"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AgeForm;
