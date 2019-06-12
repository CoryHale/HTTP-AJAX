import React from 'react';

class Friend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            edit: false,
        }
    }

    componentDidMount() {
        this.setState({ id: this.props.friend.id })
    }

    deleteHelper = e => {
        e.preventDefault();

        this.props.deleteHandler(this.state.id);
    }

    render() {
        return (
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
        )
    }
    
}

export default Friend;