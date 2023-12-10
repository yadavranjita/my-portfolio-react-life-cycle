import React, {Component} from 'react';

class Footer extends Component{
    constructor(){
        super();
        console.log("Footer-Constructor");
    }
    componentDidMount=()=>{
        console.log("Footer-Component will Mount")
    }
    //The below code is not working
    componentDidUpdate=()=>{
        console.log("Footer-Component did Update");
    }
    componentWillUnmount=()=>{
        console.log("Footer-Component will unmount");
    }
    render=()=>{
        console.log("Footer-render");
        return(
            <footer>
                <h1>This is Footer.</h1>
                <p>This is Footer page.</p>
            </footer>
        );
    }
}
export default Footer;