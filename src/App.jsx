import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    const inputIsValid = userInput.duration >= 1;

    const handleUserInput = (inputIdentifier, newInput) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                [inputIdentifier]: +newInput,
            };
        });
    };

    return (
        <>
            <Header />
            <UserInput userInput={userInput} onChange={handleUserInput}/>
            {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
            {inputIsValid && <Results input={userInput} />}
        </>
    );
}

export default App
