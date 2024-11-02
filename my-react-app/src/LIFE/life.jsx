import React, { useState } from 'react';
import './life.css'
import image1 from '../assets/life5.png';


function MyForm() {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [employment, setEmployment] = useState('');
  const [annualIncome, setAnnualIncome] = useState('');
  const [smoker, setSmoker] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(age, gender, employment, annualIncome, smoker);
  };

  return (
    <>
    <div>
      <p><b>LIFE INSURANCE</b></p>
      <form onSubmit={handleSubmit} className='mainform'>
        <div>
          <label htmlFor="age">Age:</label><br></br><br></br>
          <input type="text" id="age" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>

        <div>
          <label htmlFor="gender">Gender:</label><br></br><br></br>
          <input type="text" id="gender" value={gender} onChange={(e) => setGender(e.target.value)} />
        </div>

        <div>
          <label htmlFor="employment">Employment:</label><br></br><br></br>
          <select id="employment" value={employment} onChange={(e) => setEmployment(e.target.value)}>
            <option value="">Select Employment</option>
            <option value="Employed">Employed</option>
            <option value="Self-Employed">Self-Employed</option>
            <option value="Unemployed">Unemployed</option>
          </select>
        </div>

        <div>
          <label htmlFor="annualIncome">Annual Income:</label><br></br><br></br>
          <select id="annualIncome" value={annualIncome} onChange={(e) => setAnnualIncome(e.target.value)}>
            <option value="">Select Income</option>
            <option value="1-2L">1-2L</option>
            <option value="2-5L">2-5L</option>
            <option value="5-10L">5-10L</option>
            <option value="10L+">10L+</option>
          </select>
        </div>

        <div>
          <label htmlFor="smoker">Do You Smoke or Chew Tobacco:</label><br></br><br></br>
          <select id="smoker" value={smoker} onChange={(e) => setSmoker(e.target.value)}>
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Occasionally">Occasionally</option>
          </select>
        </div>

        <button className="next" type="submit">Next</button>
      </form>
      <img src={image1} className="image"></img>
    </div>

    <form className='content'>
        <h1>WHY LIFE INSURANCE</h1>
        <p className='content1'><b>PROTECTION AGAINST LOSS: </b>Car insurance safeguards against financial loss from accidents, theft, or damage to your vehicle.</p>
        <p className='content2'><b>LIABIALITY COVERAGE: </b> Covers legal costs and damages if you're responsible for an accident that injures others or damages their property.</p>
        <p className='content3'><b>COMPREHENSIVE AND COLLISION: </b>Comprehensive covers non-collision incidents (theft, vandalism), while collision covers damage from accidents.</p>
        <p className='content4'><b>UNINSURED MOTORIST COVERAGE: </b>Protects you if you're involved in an accident with a driver who doesn’t have insurance.</p>
        <p className='content5'><b>PERSONAL INJURY PROTECTION: </b> Offers medical expenses and lost wages for you and your passengers, regardless of fault.</p>
    </form>

    <form className='quote'>
        <b className='quote1'>compare and choose your insurance
now</b>
        <button className='quote_button'><b>GET QUOTE</b></button>
    </form>
    </>
  );
}

export default MyForm;