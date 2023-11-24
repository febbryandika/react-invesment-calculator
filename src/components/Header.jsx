import logo from "../assets/investment-calculator-logo.png";

function Header() {
    return (
        <section id="header">
            <img src={logo} alt="Invesment Calculator" />
            <h1>Investment Calculator</h1>
        </section>
    );
}

export default Header;