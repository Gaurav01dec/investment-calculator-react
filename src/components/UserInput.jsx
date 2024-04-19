import React from 'react'
import { useState } from 'react'

export default function UserInput() {

    const [userInput, setUserInput] = useState(
        {
            initialInvestment: 10000,
            annualInvestment: 1200,
            expectedReturn: 6,
            duration: 10
        }
    )

    function handleChange(inputIdentifier,newValue){


        setUserInput((previousUserInput)=>{
            return{
                ...previousUserInput,
            [inputIdentifier]:newValue
            }
        })

        
    }


    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label >Initial Investment</label>
                    <input type="number" required onChange={(event)=>{handleChange("initialInvestment",event.target.value)}}/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required onChange={(event)=>{handleChange("annualInvestment",event.target.value)}}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label >Expected Return %age</label>
                    <input type="number" required onChange={(event)=>{handleChange("expectedReturn",event.target.value)}}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required onChange={(event)=>{handleChange("duration",event.target.value)}}/>
                </p>
            </div>
        </section>
    )
}
