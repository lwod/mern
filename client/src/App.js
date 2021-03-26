import React from 'react'
import 'materialize-css'
import {useRoutes} from "./routes";
import {BrowserRouter} from "react-router-dom";
import {useAuth} from "./hooks/auth.hook";

function App() {
    const {login, logout, token, userId} = useAuth()
    const routes = useRoutes(false)
    
  return (
      <BrowserRouter>
          <div className={"container"}>
              {routes}
          </div>
      </BrowserRouter>
  );
}

export default App;
