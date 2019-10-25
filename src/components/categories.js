import React, {Component} from 'react';

import {Redirect} from 'react-router-dom';



class Category extends Component{

    constructor(props){
        super(props);
        this.state={
            data:[],
            finding:"",
            clicked:false
        }
    }

    componentDidMount(){
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(response => response.json())
        .then(json => this.setState({
            data : json.categories
        }));
    }

    find(category){
        this.setState({
            finding:category,
            clicked:true
        })

    }


    render(){
        if(this.state.clicked){
            return(<Redirect to={"/category/"+this.state.finding}/>)
        }
        return(
            <div className="row" style={{margin:"auto", justifyContent:"center", columnGap:"2%"}}>
                {this.state.data.map((datum)=>(
                    <div className=" listHover card col-sm-5 mt-5 shadow p-3 mb-5 bg-white rounded" 
                    style={{heigh:"auto", width:"100%"}}
                    onClick={()=>this.find(datum.strCategory)}>
                        <img className="card-img-top" src={datum.strCategoryThumb} alt="thumbnail" style={{width:'100%', height:"auto", borderBottom:"1px solid #D3D3D3"}}/>
                        <div className="card-body">
                            <h4 className="card-title">{datum.strCategory}</h4>
                            <p className="card-text">{datum.strCategoryDescription}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Category;