import React, {Component} from "react"

/*
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName:'',
            lastName:"",
            age:0,
            gender:"",
            destination:"thailand",
            sugar: false,
            vegetarian: false,
            nonVegeterian: false,
            
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        const {value, name, checked, type} = event.target
        type === "checkbox" ? this.setState({[name]:checked}):this.setState({[name]:value})
    }
    diet(){
        let text = ""
        if(this.state.sugar){
            text+="sugar"
        }if(this.state.vegetarian){
            text+=", Vegetarian"
        }if(this.state.nonVegeterian){
            text+=", Non-Vegetarian"
        }
        return text;
    }
    
    render() {
        return (
            <main>
                <form>
                    <input 
                        name="firstName" 
                        placeholder="First Name" 
                        onChange={this.handleChange} 
                        value={this.state.firstName} 
                    /><br />
                    <input 
                        name="lastName" 
                        placeholder="Last Name" 
                        value={this.state.lastName}
                        onChange={this.handleChange} 
                    /><br />
                    <input 
                        name="age" 
                        placeholder="Age" 
                        value={this.state.age}
                        onChange={this.handleChange}
                    /><br />
                    
                    {/* Create radio buttons for gender here */}
                    <label>
                        <input 
                            type="radio" 
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                        /> Male
                    </label>
                    <br />
                    <label>
                        <input 
                            type="radio" 
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                        /> Female
                    </label>
                        <br />
                    
                    {/* Create select box for location here */}
                    <label>Destination</label>
                    <select 
                        value={this.state.destination}
                        onChange={this.handleChange}
                        name="destination"
                    >
                        <option value="thailand">thailand</option>
                        <option value="new york">new york</option>
                        <option value="goa">goa</option>
                    </select>
                    <br />
                    
                    {/* Create check boxes for dietary restrictions here */}
                    <label>Dietary restriction :</label><br />
                    <label>
                        <input 
                            type="checkbox"
                            name="sugar"
                            checked={this.state.sugar}
                            onChange={this.handleChange}
                        />Sugar
                    </label><br />
                    <label>
                        <input 
                            type="checkbox"
                            name="vegetarian"
                            checked={this.state.vegetarian}
                            onChange={this.handleChange}
                        />Vegetarian
                    </label><br />
                    <label>
                        <input 
                            type="checkbox"
                            name="nonVegeterian"
                            checked={this.state.nonVegeterian}
                            onChange={this.handleChange}
                        />non-Vegetatrian
                    </label><br />
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName +" "+ this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>
                    Your dietary restrictions: 
                    {/* Dietary restrictions here, comma separated */}
                    {this.diet()}
                </p>
            </main>
        )
    }
}

export default App
