import React, {Component} from 'react';

class Projects extends Component{
    constructor(){
        super();
        console.log("Projects-Component");
    }
    componentDidMount=()=>{
        console.log("Project-Component did mount");
    }
    componentDidUpdate=()=>{
        console.log("Project-Component did Update.");
    }
    componentWillUnmount=()=>{
        console.log("Project-Component will unmount");
    }
    render=()=>{
        console.log("Projects-render");
        return(
            <div>
                <h1>This is Project.</h1>
                <p>This is Project Page.</p>
            </div>
        );
    }
}
export default Projects;