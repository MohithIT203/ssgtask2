import React, { useState } from "react";
import "./Compare.css";

const insurancePlans = [
  {
    company: "Company A",
    costs: ["$500", "$600", "$700"],
    monthlyInvestments: ["$42", "$50", "$58"],
    uniqueFeatures: ["No hidden fees", "High coverage", "Flexible payment options"],
  },
  {
    company: "Company B",
    costs: ["$550", "$650", "$750"],
    monthlyInvestments: ["$46", "$54", "$62"],
    uniqueFeatures: ["Discounts on multi-policy", "24/7 customer service", "Low deductible"],
  },
  {
    company: "Company C",
    costs: ["$450", "$550", "$650"],
    monthlyInvestments: ["$38", "$46", "$54"],
    uniqueFeatures: ["Online claim filing", "Fast approval", "Wellness benefits"],
  },
  {
    company: "Company D",
    costs: ["$480", "$580", "$680"],
    monthlyInvestments: ["$40", "$48", "$56"],
    uniqueFeatures: ["Free medical exams", "Life coverage", "Critical illness rider"],
  },
];

function Compare() {
  const [selectedCompanies, setSelectedCompanies] = useState([{ company: "", cost: "", monthlyInvestment: "" }]);

  const handleCompanySelection = (index, company) => {
    const updatedSelection = [...selectedCompanies];
    updatedSelection[index] = { ...updatedSelection[index], company, cost: "", monthlyInvestment: "" };
    setSelectedCompanies(updatedSelection);
  };

  const handleCostSelection = (index, cost) => {
    const updatedSelection = [...selectedCompanies];
    updatedSelection[index] = { ...updatedSelection[index], cost };
    setSelectedCompanies(updatedSelection);
  };

  const handleMonthlyInvestmentSelection = (index, monthlyInvestment) => {
    const updatedSelection = [...selectedCompanies];
    updatedSelection[index] = { ...updatedSelection[index], monthlyInvestment };
    setSelectedCompanies(updatedSelection);
  };

  const selectedPlans = selectedCompanies
    .filter(({ company }) => company)
    .map(({ company }) => insurancePlans.find((plan) => plan.company === company));

  return (
    <div className="comparison-container">
      <h1 className="header">Compare Insurance Plans</h1>

      {/* Dropdowns for selecting companies, costs, and monthly investments */}
      {Array.from({ length: 3 }, (_, i) => (
        <div key={i} className="dropdown-section">
          <select
            value={selectedCompanies[i]?.company || ""}
            onChange={(e) => handleCompanySelection(i, e.target.value)}
            className="company-dropdown"
          >
            <option value="">Select Company</option>
            {insurancePlans.map((plan) => (
              <option key={plan.company} value={plan.company}>{plan.company}</option>
            ))}
          </select>

          {selectedCompanies[i]?.company && (
            <>
              <select
                value={selectedCompanies[i].cost || ""}
                onChange={(e) => handleCostSelection(i, e.target.value)}
                className="cost-dropdown"
              >
                <option value="">Select Total Amount</option>
                {selectedPlans[i]?.costs.map((cost, index) => (
                  <option key={index} value={cost}>{cost}</option>
                ))}
              </select>

              <select
                value={selectedCompanies[i].monthlyInvestment || ""}
                onChange={(e) => handleMonthlyInvestmentSelection(i, e.target.value)}
                className="monthly-investment-dropdown"
              >
                <option value="">Select Monthly Investment</option>
                {selectedPlans[i]?.monthlyInvestments.map((investment, index) => (
                  <option key={index} value={investment}>{investment}</option>
                ))}
              </select>
            </>
          )}
        </div>
      ))}

      {/* Display comparison table if at least two companies are selected */}
      {selectedCompanies.filter(({ company }) => company).length >= 2 && (
        <div className="comparison-table">
          {selectedCompanies.map((selection, index) => {
            if (!selection.company) return null;
            const plan = selectedPlans[index];
            return (
              <div key={index} className="insurance-plan">
                <h2 className="plan-header">{selection.company}</h2>
                <div className="detail-item"><strong>Total Amount:</strong> {selection.cost}</div>
                <div className="detail-item"><strong>Monthly Investment:</strong> {selection.monthlyInvestment}</div>

                {/* Display Unique Features */}
                <div className="features-list">
                  <strong>Key Features:</strong>
                  <ul>
                    {plan.uniqueFeatures.map((feature, i) => (
                      <li key={i} className="feature-item">{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Compare;
