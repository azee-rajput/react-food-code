import React, {Component} from 'react';
import List from './list';


class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            searched: this.props.match.params.searched
        }
    }

    render(){
        console.log(window.location.pathname)
        return(
            <div className="row">
                <List url={"https://www.themealdb.com/api/json/v1/1/search.php?s="+this.state.searched} category={this.state.searched} sliced={this.state.data.length-1}/>
            </div>
        )
        
    }
}

export default Search;