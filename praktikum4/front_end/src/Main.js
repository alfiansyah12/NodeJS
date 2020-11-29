import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";

import Barang from "./page/Barang";

class Main extends Component{
    render = () => {
        return(
            <Switch>
                <Route path="/Barang">
                <Barang />
                </Route>
            </Switch>
        );
    }
}

export default Main;
