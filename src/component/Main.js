import React, { Component } from 'react';
import Complete from './Complete';
import Incomplete from './Incomplete';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state =
        {
            Incomp: [],
            Comp: [],
            Message: "",
            eIndex: -1
        }

    }
    populate() {
        this.setState({ Incomp: this.state.Incomp })

        this.setState({ Comp: this.state.Comp })
    }
    handleClick = event => {

        event.preventDefault();
        let index = parseInt(event.target.getAttribute('index'));
        let status = event.target.getAttribute('name');

        if (this.state.eIndex === -1) {
            if (this.state.Message !== "")
                this.state.Incomp.push(this.state.Message);
        }
        else {
            if (status === "incompleted")
                this.state.Incomp[index] = this.state.Message;

            if (status === "completed")
                this.state.Comp[index] = this.state.Message;


        }
        this.setState({ Message: "" })
        this.setState({ eIndex: -1 })
        // console.log(this.state.Incomp)
        this.populate()
    };
    handleChange = event => {
        this.setState({ Message: event.target.value });

    };
    actioner = event => {
        let status = event.target.getAttribute('name');
        let index = parseInt(event.target.getAttribute('index'));
        if (status === "incompleted") {
            let data = this.state.Incomp[index];
            this.state.Comp.push(data);
            this.state.Incomp.splice(index, 1);
            event.target.checked = false;

        }
        if (status === "completed") {
            let data = this.state.Comp[index];
            this.state.Incomp.push(data);
            this.state.Comp.splice(index, 1);
        }
        this.populate();
    }
    EditClick = (event) => {
        let status = event.target.getAttribute('name');
        let index = parseInt(event.target.getAttribute('index'));
        (status === "incompleted") ? this.setState({ Message: this.state.Incomp[index] }) : this.setState({ Message: this.state.Comp[index] })
        this.setState({ eIndex: index })
        this.setState({ eStatus: status })
    }
    delete = (event) => {
        let status = event.target.getAttribute('name');
        let index = parseInt(event.target.getAttribute('index'));
        (status === "incompleted") ? this.state.Incomp.splice(index, 1) : this.state.Comp.splice(index, 1)
        this.populate();

    }

    render() {
        return (
            <>
                <div className="container">
                    <h2>TODO LIST</h2>
                    <h3>Add Item</h3>
                    <p>
                        <input id="new-task" type="text" value={this.state.Message} onChange={this.handleChange} />
                        <button id="actioner" name={this.state.eStatus} index={this.state.eIndex} onClick={this.handleClick}>ADD</button>
                    </p>

                    <h3>Todo</h3>
                    <ul id="Incomplete">

                        <Incomplete arr={this.state.Incomp} actioner={this.actioner} edit={this.EditClick} delete={this.delete} />
                    </ul>

                    <h3>Completed</h3>
                    <ul id="Completed">
                        <Complete arr={this.state.Comp} actioner={this.actioner} edit={this.EditClick} delete={this.delete} />
                    </ul>
                </div>
            </>
        );
    }
}

export default Main;