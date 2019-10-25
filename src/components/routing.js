import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import Landing from './landing';
import Search from './search';
import Category from './categories';
import Recipe from './recipe';
import Refresh from './refresh';
import CategoryItem from './category';
import Area from './area';
import Areas from './areas';
import Ingredients from './ingredients';
import Ingredient from './ingredient';
import About from './about';


class Routing extends Component{
    render(){
        return(
            
            <Switch>
                <Route exact path={'/'} component={Landing}/>
                <Route path={ '/search/:searched'} component={Search}/>
                <Route path={ '/categories'} component={Category}/>
                <Route path={ '/recipe/:idmeal'} component={Recipe}/>
                <Route path={ '/refresh/:idmeal'} component={Refresh}/>
                <Route path={ '/category/:category'} component={CategoryItem}/>
                <Route path={ '/area/:area'} component={Area}/>
                <Route path={ '/areas'} component={Areas}/>
                <Route path={ '/ingredients'} component={Ingredients}/>
                <Route path={ '/ingredient/:ingredient'} component={Ingredient}/>
                <Route path={ '/about'} component={About}/>
            </Switch>
        )
    }
}

export default Routing;