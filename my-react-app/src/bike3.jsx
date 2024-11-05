import Header from './header.jsx';
import "./bike3.css";
function bikepage3() {
    return (
        <>
            <Header />
            <p className='Backbtn'>Back</p>
            <div className="background">
                
                <div className="detailsbox">
                    <h1>Details</h1>
                    <h4>AGE:</h4>
                    <button type="button">Edit Details</button>
                </div>
                
                <div className="compare">
                    <button>Compare Insurance</button>
                </div>
                <div className="sort">
                    <div className="cover-container">
                        <h2>Cover</h2>
                        <div className="cover-list">
                            <div className="cover-item">
                                <input type="checkbox"  />
                                <label >  20 lakh</label>
                            </div>
                            <div className="cover-item">
                                <input type="checkbox" />
                                <label> 20 to 25 lakh</label>
                            </div>
                            <div className="cover-item">
                                <input type="checkbox" />
                                <label> 30 to 40 lakh</label>
                            </div>
                            <div className="cover-item">
                                <input type="checkbox" />
                                <label>  1 crore</label>
                            </div>
                        </div>

                        <h2>Cover Age</h2>
                        <div className="cover-list">
                            <li className="cover-item">
                                <input type="checkbox" />
                                <label> 60 yrs</label>
                            </li>
                            <li className="cover-item">
                                <input type="checkbox" />
                                <label> 60 to 70 yrs</label>
                            </li>
                            <li className="cover-item">
                                <input type="checkbox" />
                                <label> 70 to 80 yrs</label>
                            </li>
                            <li className="cover-item">
                                <input type="checkbox"  />
                                <label> 80 yrs</label>
                            </li>
                        </div>

                        <h2>Plan</h2>
                        <div className="cover-list">
                            <div className="cover-item">
                                <input type="checkbox"/>
                                <label> Monthly</label>
                            </div>
                            <div className="cover-item">
                                <input type="checkbox"/>
                                <label> Yearly (Most Preferred)</label>
                            </div>
                        </div>

                        <h2>Sort</h2>
                        <div className="cover-list">
                            <div className="cover-item">
                                <input type="checkbox"/>
                                <label> Low to High (Claim Settlement)</label>
                            </div>
                            <div className="cover-item">
                                <input type="checkbox"/>
                                <label> High to Low (Claim Settlement)</label>
                            </div>
                            <div className="cover-item">
                                <input type="checkbox"/>
                                <label> Low to High (Price)</label>
                            </div>
                            <div className="cover-item">
                                <input type="checkbox"  />
                                <label> High to Low (Price)</label>
                            </div>
                        </div>

                        <h2>Company</h2>
                        <div className="cover-list">
                            <div className="cover-item">
                                <input type="checkbox"/>
                                <label> TATA Aig</label>
                            </div>
                            <div className="cover-item">
                                <input type="checkbox"/>
                                <label> ICICI Lombard</label>
                            </div>
                            <div className="cover-item">
                                <input type="checkbox"/>
                                <label> HDFC</label>
                            </div>
                            <div className="cover-item">
                                <input type="checkbox" />
                                <label> Bandhan Life</label>
                            </div>
                            <div className="cover-item">
                                <input type="checkbox" />
                                <label> Max Life</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="headcomp">
                    <p id="comp1">Company</p>
                    <p id="comp2">Plan Highlight</p>
                    <p id="comp3">Pay</p>
                </div>
                <div className="contents">
                    
                </div>
            </div>
        </>
    )
}
export default bikepage3;