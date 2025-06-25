import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  }); // This state could be used to handle form submission or input changes in the future - lifted state

  // This function could be used to handle changes in the input fields
  // and update the userInput state accordingly.
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,

        [inputIdentifier]: +newValue, // Convert the input value to a number
        // The + operator converts the string input to a number - Javascript takes event.target.value as a string,
        // so we add a +(+newValue) to convert it to a number
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      <Results input={userInput} />
    </>
  );
}

export default App;
