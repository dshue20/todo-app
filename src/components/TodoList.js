import React from "react";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            update: ""
        };
        this.addItem = this.addItem.bind(this);
    }

    update(){
        return e => this.setState({update: e.currentTarget.value});
    }

    addItem(e){
        e.preventDefault();
        if (this.state.update.length > 0){
            let item = {
                text: this.state.update,
                key: Date.now()
            };
            this.setState({items: this.state.items.concat(item)})
        };
        this.setState({update: ""});
    }

    render(){
        console.log(this.state.items);
        return (
            <div className="todoListMain">
              <div className="header">
                <form onSubmit={this.addItem}>
                  <input placeholder="enter task" onChange={this.update()}></input>
                  <button type="submit">add</button>
                </form>
              </div>
              <div className="todos">
                  <ul>
                    {this.state.items.map(item => <li key={item.key}>{item.text}</li>)}
                  </ul>
              </div>
            </div>
        );
    }
}

export default TodoList;