import React, { useState } from "react";

function DiseaseSelectionForm() {
  const diseases = [
    "Diabetes",
    "Hypertension",
    "Heart Disease",
    "Cancer",
    "Asthma",
    "Kidney Disease",
    "Liver Disease",
    "Thyroid Disorders"
  ];

  const [selectedDiseases, setSelectedDiseases] = useState([]);

  // Toggle disease selection
  const handleDiseaseToggle = (disease) => {
    setSelectedDiseases((prevSelected) =>
      prevSelected.includes(disease)
        ? prevSelected.filter((d) => d !== disease) // Deselect if already selected
        : [...prevSelected, disease] // Select if not already selected
    );
  };

  return (
    <div className="disease-form-container">
      <h3>Select Diseases (if applicable):</h3>
      <div className="disease-list">
        {diseases.map((disease, index) => (
          <label key={index} className="disease-option">
            <input
              type="checkbox"
              value={disease}
              checked={selectedDiseases.includes(disease)}
              onChange={() => handleDiseaseToggle(disease)}
            />
            {disease}
          </label>
        ))}
      </div>
      <div className="summary">
        <h4>Selected Diseases:</h4>
        {selectedDiseases.length > 0 ? (
          <ul>
            {selectedDiseases.map((disease, index) => (
              <li key={index}>{disease}</li>
            ))}
          </ul>
        ) : (
          <p>No diseases selected.</p>
        )}
      </div>
    </div>
  );
}

export default DiseaseSelectionForm;
