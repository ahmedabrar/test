import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import "./app.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Trending from "./components/TrendingJobs/Trending";
import RecentlyJoined from "./components/RecentlyJoinedJobSeekers/RecentlyJoined";
import Footer from "./components/Footer/Footer";
import JobsByCountry from "./components/JobsByCountry/JobsByCountry";
import SuccessStories from "./components/SuccessStories/SuccessStories";
import EmployerRegistration from "./components/Employer/Registration/EmployerRegistration";
import EmployerLogin from "./components/Employer/Login/EmployerLogin";
import UserRegistration from "./components/Users/Registration/UserRegistration";
import UserLogin from "./components/Users/Login/UserLogin";
const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Banner />
          <Trending />
          <RecentlyJoined />
          <JobsByCountry />
          <SuccessStories />
        </Route>
      </Switch>

      {/* User Login */}
      <Switch>
        <Route exact path="/user/login">
          <UserLogin />
        </Route>
      </Switch>

      {/* User Registration */}
      <Switch>
        <Route exact path="/user/registration">
          <UserRegistration />
        </Route>
      </Switch>

      {/* Employer Registration */}
      <Switch>
        <Route exact path="/employer/registration">
          <EmployerRegistration />
        </Route>
      </Switch>
      {/* Employer Login */}
      <Switch>
        <Route exact path="/employer/login">
          <EmployerLogin />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
};

export default App;
