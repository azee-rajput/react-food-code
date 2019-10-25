import React, {Component} from 'react';

import List from './list';


class Area extends Component{
    render(){
        return(
            <div>
                <List url={"https://www.themealdb.com/api/json/v1/1/filter.php?a="+this.props.match.params.area} category={this.props.match.params.area} sliced="100"/>
            </div>
        )
    }
}

export default Area;