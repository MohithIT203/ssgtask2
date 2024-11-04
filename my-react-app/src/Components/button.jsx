import './App.css';
function Button() {
    const [isInsuranceDropdownOpen, setInsuranceDropdownOpen] = useState(false);
    const [isAccountDropdownOpen, setAccountDropdownOpen] = useState(false);

    // Toggle insurance dropdown visibility
    const toggleInsuranceDropdown = () => {
        setInsuranceDropdownOpen(!isInsuranceDropdownOpen);
        setAccountDropdownOpen(false); // Close account dropdown when insurance is opened
    };

    // Toggle account dropdown visibility
    const toggleAccountDropdown = () => {
        setAccountDropdownOpen(!isAccountDropdownOpen);
        setInsuranceDropdownOpen(false); // Close insurance dropdown when account is opened
    };

    // Close dropdowns if clicking outside
    const handleOutsideClick = (event) => {
        const insuranceContainer = document.getElementById('insuranceDropdownContainer');
        const accountContainer = document.getElementById('accountDropdownContainer');

        if (insuranceContainer && !insuranceContainer.contains(event.target)) {
            setInsuranceDropdownOpen(false);
        }
        if (accountContainer && !accountContainer.contains(event.target)) {
            setAccountDropdownOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('click', handleOutsideClick);
        
        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <div>
            {/* Insurance Dropdown */}
            <div id="insuranceDropdownContainer" className="dropdownContainer">
                <button onClick={toggleInsuranceDropdown} className="dropdownButton">Insurance</button>
                {isInsuranceDropdownOpen && (
                    <div className="dropdownMenu">
                        <a href="#" className="dropdownOption">Car</a>
                        <a href="#" className="dropdownOption">Bike</a>
                        <a href="#" className="dropdownOption">Life</a>
                        <a href="#" className="dropdownOption">Health</a>
                    </div>
                )}
            </div>

            {/* Account Dropdown */}
            <div id="accountDropdownContainer" className="dropdownContainer">
                <div onClick={toggleAccountDropdown} className="dropdownButton">Account</div>
                {isAccountDropdownOpen && (
                    <div className="dropdownMenu">
                        <a href="#" className="dropdownOption">Dashboard</a>
                        <a href="#" className="dropdownOption">Login</a>
                        <a href="#" className="dropdownOption">Sign In</a>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Button;