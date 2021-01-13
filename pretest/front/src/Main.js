import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";

import Siswa from "./page/Siswa";

class Main extends Component{
    render = () => {
        return(
            <Switch>
                <Route path="/Siswa">
                <Siswa />
                </Route>
            </Switch>
        );
    }
}

export default Main;
