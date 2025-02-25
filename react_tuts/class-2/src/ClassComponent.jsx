import React, { Component } from 'react'

export class ClassComponent extends Component {
    constructor(props) {
        super();

        console.log("custructor called");
        
    }
    render() {
        console.log('render method called');
        
        return (
            <div>
                {this.props.title}
                <button className='border border-blue-500 rounded-md px-4 py-1 block mt-5 cursor-pointer' onClick={this.props.handleClick}>update title</button>
            </div>
        )
    }
}