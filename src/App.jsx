import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx"
import { useState } from "react"
import Results from "./components/Results.jsx";

function App() {

  const [userInput, setUserInput] = useState(
    {
      initialInvestment: 10000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration: 10
    }
  );

  function handleChange(inputIdentifier, newValue) {


    setUserInput((previousUserInput) => {
      return {
        ...previousUserInput,
        // [inputIdentifier]: newValue // event.target.value alwayas gives a string weather the type is number in input field
        [inputIdentifier]: +newValue // so we have to force this by + operator to convert the string to number
      }
    })


  }

  return (
    <>
      <Header />
      <UserInput onChangeInput={handleChange} userInput={userInput} />
      {/* here we will show the results */}
      <Results input={userInput}/>
    </>
  )
}

export default App
