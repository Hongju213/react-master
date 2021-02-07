import React from "react";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import EditUserComponent from "../Routes/EidtUserComponent";
import AddUserComponent from "../Routes/AddUserComponent";
import Test from "../Routes/Test";
import Home from "../Routes/Home";
import TV from "../Routes/TV";
import Search from "../Routes/Search";

const AppRouter = () => {
  return(
    <div>
      <BrowserRouter>
      <div style={style}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Test} />
          <Route path="/add-user" component={AddUserComponent} />
          <Route path="/edit-user" component={EditUserComponent} />
        </Switch>
      </div>
      </BrowserRouter>
    </div>
  )
}

const style = {
  color: 'red',
  margin: '10px'
}

export default AppRouter;