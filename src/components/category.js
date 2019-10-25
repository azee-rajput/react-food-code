import React, {Component} from 'react';

import List from './list';


class CategoryItem extends Component{
    render(){
        return(
            <div>
                <List url={"https://www.themealdb.com/api/json/v1/1/filter.php?c="+this.props.match.params.category} category={this.props.match.params.category} sliced="100"/>
            </div>
        )
    }
}

export default CategoryItem;