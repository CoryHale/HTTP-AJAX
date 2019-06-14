import React from 'react';

class Friend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            email: "",
            id: "",
            edit: false,
        }
    }

    componentDidMount() {
        this.setState({ 
            id: this.props.friend.id,
            name: this.props.friend.name,
            age: this.props.friend.age,
            email: this.props.friend.email,
        })
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    deleteHelper = e => {
        e.preventDefault();

        this.props.deleteHandler(this.state.id);
    }

    editHelper = e => {
        e.preventDefault();

        this.setState(prevState => ({
            edit: !prevState.edit,
        }))
    }

    render() {

        let friendComponent = 
            <div>
                <div>
                    <h2>{this.props.friend.name}</h2>
                    <h4>{this.props.friend.age}</h4>
                    <p>{this.props.friend.email}</p>
                </div>
                <form>
                    <button type="submit" onClick={this.editHelper}><i className="fal fa-edit"></i></button>
                    <button type="submit" onClick={this.deleteHelper}><i className="fal fa-trash-alt"></i></button>
                </form>
            </div>
            

        let editComponent = 
            <div>
                <form onSubmit={e => {
                    let friendEdit = {
                        name: this.state.name,
                        age: this.state.age,
                        email: this.state.email,
                    }
                    this.props.editHandler(e, this.state.id, friendEdit)

                    this.setState(prevState => ({ edit: !prevState.edit }))
                }}>
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


        return (
            <div>
                {this.state.edit ? editComponent : friendComponent}
            </div>
        )
    }
    
}

export default Friend;