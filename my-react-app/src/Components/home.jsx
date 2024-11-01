import Header from './header.jsx';
import image1 from "../assets/insurance-image1.jpg";
import image2 from '../assets/insuranceimage-2.png';
import siteImg1 from '../assets/Site-img1.png';
import siteImg2 from '../assets/site-img2.webp';
import siteImg3 from '../assets/site-img3.png';
import siteImg4 from '../assets/site-img4.jpg';
import siteImg5 from '../assets/site-img5.png';
import siteImg6 from '../assets/site-img6.png';

function Home() {
    return (
        
        <div >
            <Header/>
            <div className="homediv">
                <p id="header1">FAST <br></br>EASY AND<br></br>TRANSPARENT<br></br><br></br></p>
                <p id="header2">THIS IS HOW WE COMPARE POLICIES</p>
                <img src={image1} className="sam"></img>
            </div>
            <div className="bluebox">
                <h1>WHY CHOOSE US?</h1>
                <p id="para1">
                    We offer a wide range of insurance products,<br></br>
                    from auto to health to home insurance, allowing you to compare multiple
                    providers in one place.
                </p>
                <img className="img2" src={image2}></img>
            </div>
            <div className="sites">
                <h1>SITES WE COMPARE</h1>
                <img id="siteimg1" src={siteImg1} alt="Tata Aig" />
                <img id="siteimg2" src={siteImg2} alt="Reliance life Insurance" />
                <img id="siteimg3" src={siteImg3} alt="SBI Life" />
                <img id="siteimg4" src={siteImg4} alt="Bajaj" />
                <img id="siteimg5" src={siteImg5} alt="Max Life" />
                <img id="siteimg6" src={siteImg6} alt="Axis Insurance" />
            </div>
        </div>


    );
}
export default Home