import React, {Component} from 'react';

import {Redirect} from 'react-router-dom';

class Areas extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:[],
            clicked:false,
            finding:""
        }
    }

    componentDidMount(){
        fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
        .then(response=>response.json())
        .then(data=>this.setState({data:data.meals}))
    }

    find(area){
        this.setState({
            clicked:true,
            finding:area
        })
    }

    render(){
        if(this.state.clicked){
            return(<Redirect to={"/area/"+this.state.finding}/>)
        }
        return(
            <div classNmae="row" >
                {this.state.data.map((datum)=>(
                    <div className="col-sm-3 text-center mt-5 shadow p-3 bg-white rounded listHover"
                    style={{margin:"auto", width:"100%", height:"auto"}} 
                    onClick={()=>this.find(datum.strArea)}>
                        {datum.strArea}
                    </div>
                ))}
            </div>
        )
    }
}

export default Areas;