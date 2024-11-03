import Header from "./header";
import img from "../assets/bike-img.png";
import './bike.css';
function Bike() {
    return (
        <div>
            <Header />
            <div>
                <img alt="bike-Insurance" src={img}></img>
                <h1>ENTER YOUR BIKE DETAILS</h1>
                <div className="form-container">
                    {/* <h2>Bike Details</h2> */}
                    <form>
                        <div className="form-row">
                            <div className="form-field">
                                <label>Bike Brand</label>
                                <input type="text" placeholder="Enter bike brand" />
                            </div>
                            <div className="form-field">
                                <label>Registration Year</label>
                                <input type="text" placeholder="Enter registration year" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-field">
                                <label>Model</label>
                                <input type="text" placeholder="Enter model" />
                            </div>
                            <div className="form-field">
                                <label>Manufacture Year</label>
                                <input type="text" placeholder="Enter manufacture year" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-field">
                                <label>Select Variant</label>
                                <input type="text" placeholder="Enter variant" />
                            </div>
                            <div className="form-field">
                                <label>Select RTO</label>
                                <input type="text" placeholder="Enter RTO" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-field full-width">
                                <label>Registration Number</label>
                                <input type="text" placeholder="Enter registration number" />
                            </div>
                        </div>
                        <button type="submit" className="next-button">Next</button>
                    </form>
                </div>
                {/* <div className="content">
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
                </div> */}
            </div>
        </div>
    )
}
export default Bike