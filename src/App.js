import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";
import AdminRoute from "./pages/Authentication/AdminRoute/AdminRoute";
import SignIn from "./pages/Authentication/SignIn/SignIn";
import SignUp from "./pages/Authentication/SignUp/SignUp";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home/Home";
import JobCircular from "./pages/JobCircular/JobCircular";
import JobPost from "./pages/JobPost/JobPost";
import MakAdmin from "./pages/MakeAdmin/MakAdmin";
import Navigation from "./pages/Navigation/Navigation";
import OurServices from "./pages/OurServices/OurServices";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/SignIn">
              <SignIn />
            </Route>
            <Route path="/JobCircular">
              <JobCircular />
            </Route>
            <AdminRoute path="/JobPost">
              <JobPost/>
            </AdminRoute>
            <Route path="/OurServices">
              <OurServices />
            </Route>
            <AdminRoute path="/makeAdmin">
              <MakAdmin />
            </AdminRoute>
            <Route path="/SignUp">
              <SignUp />
            </Route>
          </Switch>
          <Footer/>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
