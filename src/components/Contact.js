import React, {Component} from 'react';

class Contact extends Component{
    constructor(){
        super();
        console.log("Contact-Constructor");
    }
    componentDidMount=()=>{
        console.log("Contact-Component did mount");
    }
    // the below code is not working
    componentDidUpdate=()=>{
        console.log("Contact-Component did Update")
    }
    componentWillUnmount=()=>{
        console.log("Contact-Component will Unmount");
    }
    render=()=>{
        console.log("Contact-render");
        return(
            <div>
                <h1>This is Contact.</h1>
                <p>This is contact page.</p>
            </div>
        );
    }
}
export default Contact;