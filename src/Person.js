import React, {Component} from 'react';

export default class Person extends Component{
    
    constructor(props){
        super(props);
        this.state={
            hasChanged: false
        }
    }
    
    // increment = (ev) => {
    //     ev.preventDefault();
    //     this.setState({hasChanged:true});
        
    //     this.props.increment(this.props.name);
    // }
    
    render(){
        return (
            <div className="person">
                <h2>{this.props.name}</h2>
                <h3>{this.props.count}</h3>
                <button onClick={this.props.increment}>Add</button>
                {this.state.hasChanged && (
                    <span>Updated</span>
                )}
            </div>
        );
    }
}