import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import Home from "./pages/home";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
