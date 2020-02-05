import React from 'react';
import './projects.css';
import { Button } from 'react-bootstrap';

class Projects extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            item: {
                image: require('./images/overdue.png'),
                name: "Overdue",
                about: "Counting your monthly expenses",
            },
        }
    };

    nextHandle() {
        this.setState({
            image: require('./images/overdue.png'),
            name: "Time Traveler",
            about: "Counting your monthly expenses",
        })
    }

    render() {
        return (
            <div className="App">
        
                <div style={{ left: 0, backgroundColor: '#fff'}} className="split">
                    <img src={this.state.item.image} className="mockupImg"></img>
                </div>
        
                <div style={{ right: 0, backgroundColor: '#0000' }} className="split">
                    <h1 className="title">{this.state.item.name}</h1>
                    <p className="about">{this.state.item.about}</p>
                </div>

                <Button onPress={()=> {
                    this.setState({
                        image: require('./images/linkedin.png'),
                    })
    
                }} className="next">
                    Press This!
                </Button>
        
            </div>
            );
    }

}

export default Projects;
