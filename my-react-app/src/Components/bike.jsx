import Header from "./header";
import img from "../assets/bike-img.png";
import './bike.css';
function Bike() {
    return (
        <div>
            <Header />
            <div>
                <img alt="bike-Insurance" src={img}></img>
                <h1>ENTER YOUR CAR DETAILS</h1>
                <div className="form-container">
                    <h2>Bike Details</h2>
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
            </div>
        </div>
    )
}
export default Bike