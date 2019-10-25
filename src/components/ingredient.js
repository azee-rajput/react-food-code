import React,{Component} from 'react';

import List from './list';

class Ingredient extends Component{ 
    render(){
        return(
            <div>
                <h1 className="text-center">{this.props.match.params.ingredient}</h1>
                 <List url={"https://www.themealdb.com/api/json/v1/1/filter.php?i="+this.props.match.params.ingredient.split(" ").join("_")} category={this.props.match.params.area} sliced="600"/>
            </div>
        )
    }
}

export default Ingredient;