import React, { Component } from 'react';
class Complete extends Component {
    state = {}
    render() {
        return (
            <>
                {
                    this.props.arr.map((data, i) => <li> <input type="checkbox" index={i} name="completed" onClick={this.props.actioner} checked /><label>{data}</label><input type="text" id="name" className="name" value={data} /><button className="edit" index={i} name="completed" onClick={this.props.edit}>Edit</button><button onClick={this.props.delete} index={i} name="completed" className="delete">Delete</button> </li>)
                }
            </>
        );
    }
}

export default Complete;
<>
</>