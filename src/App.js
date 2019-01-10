import React, { Component } from "react";
import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja";
class App extends Component {
    state = {
        ninjas: [
            { name: "Ryu", age: 30, belt: "Black", id: 1 },
            { name: "Yoshi", age: 28, belt: "Brown", id: 2 },
            { name: "Crystal", age: 22, belt: "Green", id: 3 }
        ]
    }
    addNinja = (ninja) => {
        ninja.id = Math.random();
        let ninjas = [...this.state.ninjas, ninja];
        this.setState({
            ninjas: ninjas
        })
        console.log("llega add ninja", this.state.ninjas);
    }
    deleteNinja = (id) => {
        let ninjas = this.state.ninjas.filter(ninja => {
            return ninja.id !== id
        });
        this.setState({
            ninjas: ninjas
        });
    }
    render() {
        return (
            <div className="App">
                <h1>My first React app!</h1>
                <p>Welcome :)</p>
                <Ninjas ninjas={ this.state.ninjas } deleteNinja={ this.deleteNinja } />
                <AddNinja addNinja={ this.addNinja } />
            </div>
        );
    }
}

export default App;
