import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <div className="row bg-dark p-5 mt-3" style={{margin:"auto",color:"white",width:"100%"}}>
                <div className="col-sm-6 text-center">
                    <span>This frontend is a mockup of </span> <a href="tasty.co" target="_blank" rel="noopener noreferrer">Tasty.co</a>
                </div>

                <div className="col-sm-6 text-center">
                    <span>Backend APIs are consumed from </span><a href="https://www.themealdb.com/api.php" rel="noopener noreferrer" target="_blank">www.themealdb.com</a>
                </div>
            </div>
        )
    }

}

export default Footer;