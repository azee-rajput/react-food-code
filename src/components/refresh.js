import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';


class Refresh extends Component{

    render(){
        if(isNaN(this.props.match.params.idmeal)){
            return(
                <Redirect to={'/search/'+this.props.match.params.idmeal}/>
            )
        }
        else{
            return(
                <Redirect to={'/recipe/'+this.props.match.params.idmeal}/>
            )
        }
    }
}

export default Refresh;