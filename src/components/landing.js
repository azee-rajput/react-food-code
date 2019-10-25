import React, {Component} from 'react';
import List from './list';
import {Button} from 'react-bootstrap';


class Landing extends Component{
    constructor(props){
        super(props);
        this.state={
            random:[],
            showMore:[],
            isTrue:false
        }
    }

    componentDidMount(){
        ////random food
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(response => response.json())
        .then(json => this.setState({
            random : json.meals[0]
        }));
        
    }


    find(idMeal){
        console.log(idMeal);
        this.props.history.push( '/recipe/'+idMeal);
    }

    showMore(){
            document.getElementById("button").remove();
            const arr = [
                <List url="https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef" category="Beef" sliced="4"/>,
                <List url="https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken" category="Chicken" sliced="4"/>,
                <List url="https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta" category="Pasta" sliced="4"/>,
                <List url="https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian" category="Vegetarian" sliced="4"/>
            ]

            this.setState({
                showMore:arr,
                isTrue: true
            })
    }
    
    
    render(){
        return(
            <div className="row" style={{justifyContent:"center"}}>
                <div 
                className="col-sm-11 row forHover"
                onClick={()=>this.find(this.state.random.idMeal)}
                >
                    <h1 className="col-sm-6">{this.state.random.strMeal}</h1>
                    <img 
                    className="col-sm-4" 
                    src={this.state.random.strMealThumb} 
                    alt="thumbnail"/>
                </div>

                <List url="https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast" category="Breakfast" sliced="4"/>
                <List url="https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood" category="Seafood" sliced="4"/>
                <List url="https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert" category="Dessert" sliced="4"/>
                <List url="https://www.themealdb.com/api/json/v1/1/filter.php?c=Starter" category="Starter" sliced="4"/>
                <List url="https://www.themealdb.com/api/json/v1/1/filter.php?c=Side" category="Side" sliced="4"/>

                <div className="col-sm-12" style={{textAlign:"center"}}>
                    <Button style={{width:"10%"}} id="button" onClick={()=>this.showMore()}>Show More</Button>
                </div>

                {this.state.isTrue ? this.state.showMore.map((more)=>(
                        <div>{more}</div>
                    )):null}
            </div>
        )
    }
}

export default Landing;