import { Component } from "react";
import imageThree from './shopthree.png';

export class GroceryList extends Component {
    state = {
        userInput: '',
        groceryList: []
}
onChangeEvent (e) {
    this.setState({userInput: e})

}

addItem (input) {
    if (input === ''){
        alert ("Please enter an item")
    } else {
    let listArray = this.state.groceryList;
    listArray.push(input);
    this.setState({groceryList: listArray, userInput: ''})
}
}

crossedWord (event) {
    const li = event.target;
    li.classList.toggle('crossed');
}

deleteItem () {
    let listArray = this.state.groceryList;
    listArray = [];
    this.setState({groceryList: listArray})
}

render () {
    return (
        <div>
        <div className="container">
            <input type="text"
            placeholder="What do you want to buy today?"
            onChange={(e) => {this.onChangeEvent(e.target.value)}}
            value={this.state.userInput} />
        </div>
        <div className="container">
            <button onClick={() => this.addItem(this.state.userInput)} className="add">Add</button>
        </div>
        <ul>
            {this.state.groceryList.map((item, index) => (
                <li onClick={this.crossedWord} key={index}>
                <img src={imageThree} width="40px" alt="shopthree" />
                    {item}</li>
            ))}
        </ul>
        <div className="container">
            <button onClick={() => this.deleteItem()} className="delete">Delete</button>
        </div>
        </div>
    )
}
}