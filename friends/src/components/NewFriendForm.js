import React from 'react';
import axios from 'axios';

class NewFriendForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            age: "",
            email: "",
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHelper = e => {
        e.preventDefault();

        const newFriend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email,
        }

        this.props.submitHandler(newFriend);

        this.setState({
            name: "",
            age: "",
            email: "",
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHelper}>
                    <div>
                        <span>Name:</span>
                        <input type="text" name="name" value={this.state.name} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <span>Age:</span>
                        <input type="number" name="age" value={this.state.age} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <span>Email:</span>
                        <input type="email" name="email" value={this.state.email} onChange={this.changeHandler} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default NewFriendForm;