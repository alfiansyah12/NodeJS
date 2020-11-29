import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";

import Pegawai from "./page/Pegawai";

class Main extends Component{
    render = () => {
        return(
            <Switch>
                <Route path="/Pegawai">
                <Pegawai />
                </Route>
            </Switch>
        );
    }
}

export default Main;
