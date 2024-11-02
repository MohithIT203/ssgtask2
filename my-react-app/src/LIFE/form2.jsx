import React from 'react';
import './form2.css';

function InsuranceForm() {
  return (
    <div className="insurance-plan">
      <div className="cover">
        <h2>Cover</h2>
        <div className="cover-option1">
          <input type="checkbox" id="cover20" />
          <label htmlFor="cover20">&lt;20 lakh</label>
        </div>
        <div className="cover-option2">
          <input type="checkbox" id="cover20-25" />
          <label htmlFor="cover20-25">20 to 25 lakh</label>
        </div>
        <div className="cover-option3">
          <input type="checkbox" id="cover30-40" />
          <label htmlFor="cover30-40">30 to 40 lakh</label>
        </div>
        <div className="cover-option4">
          <input type="checkbox" id="cover1crore" />
          <label htmlFor="cover1crore">&gt;1 Crore</label>
        </div>
      </div>

      <div className="benefits">
        <h2 id='heading2'>Benefits</h2>
        <div className="benefit-option1">
          <input type="checkbox" id="cancerCover" />
          <label htmlFor="cancerCover">Cancer Cover</label>
        </div>
        <div className="benefit-option2">
          <input type="checkbox" id="claimSettle" />
          <label htmlFor="claimSettle">24hrs Claim Settle</label>
        </div>
        <div id="benifit-option3">
          <input type="checkbox" id="totalDayRestriction" />
          <label htmlFor="totalDayRestriction">Total Day Restriction</label>
        </div>
        <div id="benefit-option4">
          <input type="checkbox" id="accidentCover" />
          <label htmlFor="accidentCover">Accident Cover</label>
        </div>
      </div>

      <div className="cover-age">
        <h2 id='heading3'>Cover Age</h2>
        <div className="age-option1">
          <input type="checkbox" id="age60" />
          <label htmlFor="age60">60 years</label>
        </div>
        <div className="age-option2">
          <input type="checkbox" id="age60-70" />
          <label htmlFor="age60-70">60 to 70 years</label>
        </div>
        <div className="age-option3">
          <input type="checkbox" id="age70-80" />
          <label htmlFor="age70-80">70 to 80 years</label>
        </div>
        <div className="age-option4">
          <input type="checkbox" id="age80" />
          <label htmlFor="age80">&gt;80 years</label>
        </div>
      </div>

      <button className="get-quote">Get Quote</button>
    </div>
  );
}

export default InsuranceForm;