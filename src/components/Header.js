import React, {Component} from 'react';
class Header extends Component{
    constructor(){
        super();
        console.log("Header-Constructor");
    }
    componentDidMount=()=>{
        console.log("Header-Component did mount");
    }
    // the below code is not working
    componentDidUpdate=()=>{
        console.log("Header-Component did update.");
    }
    componentWillUnmount=()=>{
        console.log("Header-Component will unmount");
    }
    render=()=>{
        console.log("Header-Render");
        return(
            <header>
                <h1>This is header</h1>
                <p>This is header</p>
            </header>
        );
    }
}
export default Header;