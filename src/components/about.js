import React, {Component} from 'react';


class About extends Component{
    render(){
        return(
            <div className="card mt-5 shadow p-3 mb-5 bg-white rounded" style={{heigh:"auto", width:"100%"}}>
                <div className="card-body">
                    <h1 className="card-title">About</h1>
                    <p className="card-text">
                        This website, is a mockup of <a href="tasty.co" trget="_blank" rel="noopener noreferrer">tasty.co</a>
                         and backend APIs are consumed from 
                         <a href="https://www.themealdb.com/api.php" target="_blank" rel="noopener noreferrer">www.themealdb.com/api.php</a>.
                        The frontend is developed by using <b>React js</b>.<br/>Hope you'll Like it.<br/>
                        Developer: <i>A.Zahir</i>
                    </p>
                </div>
            </div>
        )
    }
}

export default About;