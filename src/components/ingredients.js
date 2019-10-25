import React, {Component} from 'react';

import {Redirect} from 'react-router-dom';


class Ingredients extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:[],
            clicked:false,
            finding:""
        }
    }

    componentDidMount(){
        fetch(" https://www.themealdb.com/api/json/v1/1/list.php?i=list")
        .then(response=>response.json())
        .then(data=>this.setState({data:data.meals}))
    }

    find(ing){
        this.setState({
            clicked:true,
            finding:ing
        })
    }


    render(){
        if(this.state.clicked){
            return(<Redirect to={"/ingredient/"+this.state.finding}/>)
        }

        return(
            <div className="row" style={{margin:"auto", justifyContent:"center", columnGap:"2%"}}>
                {this.state.data.map((datum)=>(
                    <div className="col-sm-5 mt-5 p-3 shadow bg-white rounded listHover"
                    onClick={()=>this.find(datum.strIngredient)}>
                        <h3>{datum.strIngredient}</h3>
                        <p>{datum.strDescription}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default Ingredients;