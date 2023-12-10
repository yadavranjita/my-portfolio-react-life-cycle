import React,{Component} from 'react';

class About extends Component{
    constructor(){
        super();
        console.log("About-Constructor");
    }
    componentDidMount=()=>{
        console.log("About-Component did mount");
    }
    componentDidUpdate=(prevProps, prevState)=>{
        console.log("About-Component did Update");
    }
    componentWillUnmount=()=>{
        console.log("About-Component will unmount");
    }
    render=()=>{
        console.log("About-Render");
        return(
            <div>
                <h1>This is About</h1>
                <p>About us page</p>
            </div>
        );
    }
}
export default About;
