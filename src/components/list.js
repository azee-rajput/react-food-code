import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';



class List extends Component{
    constructor(props){
        super(props);
        this.state={
            url : props.url,
            catergory : props.category,
            data : [],
            sliced: parseInt(props.sliced),
            clicked : false,
            idMeals : ""
        }
    }

    componentDidMount(){
        fetch(this.state.url)
        .then(response => response.json())
        .then(data => this.setState({
            data: data.meals
        }));
    }

    find(idMeal){
        //console.log(idMeal);
       // this.props.history.push( '/recipe/'+idMeal);
        this.setState({
            clicked : true,
            idMeals : idMeal
        })
    }


    render(){
        if(this.state.clicked){
            return(
                <Redirect to={'/refresh/'+this.state.idMeals}/>
            )
        }

        if(this.state.data === null || this.state.data==null){
            return (
                <div className="mt-5 shadow p-3 mb-5 bg-white rounded text-center" style={{margin:"auto"}}>
                    {this.props.category} not found 
                </div>
            )
        }
        else{
            return (
                <div className="col-sm-11 row mt-5 shadow p-3 mb-5 bg-white rounded"
                style={{margin:"auto", justifyContent:"center", border:"1px solid #d3d3d3", textAlign:"center"}}>
                    <h2 className="col-sm-12" style={{fontWeight:"Bolder"}}>{this.state.catergory}</h2>
                    {this.state.data.slice(0,parseInt(this.state.sliced)).map((datum)=>(
                        <div className="col-sm-3 listHover mt-5" onClick={()=>this.find(datum.idMeal)}>
                            <img src={datum.strMealThumb} alt={datum.strMeal} style={{width:"100%", height:"auto", margin:"0"}}/>
                            <h4><b>{datum.strMeal}</b></h4>
                        </div>
                    ))}
                </div>
            );
        }
    
        
    }
}

export default List;