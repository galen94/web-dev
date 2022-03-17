//import logo from './logo.svg';
import HelloWorld from "./components/HelloWorld.js";
import Labs from "./components/labs/index.js";
import Tuiter from "./components/Tuiter/index.js";
import React from "react";

import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./components/Tuiter/home-screen/HomeScreen.js";
import ExploreScreen from "./components/Tuiter/explore-screen/ExploreScreen.js";
import ProfileScreen from "./components/Tuiter/profile-screen/ProfileScreen";
import EditProfile from "./components/Tuiter/profile-screen/edit-profile";

function App() {
  return (
      <BrowserRouter>
      <div className="container">
          <Routes>
          <Route path="/">
              <Route path="labs"
                     exact={true}
                     element={<Labs/>}/>
              <Route path="hello"
                     exact={true}
                     element={<HelloWorld/>}/>
              <Route path="tuiter"
                     element={<Tuiter/>}>
                  <Route index
                         exact={true}
                         element={<HomeScreen/>}/>
                  <Route path="explore"
                         exact={true}
                         element={<ExploreScreen/>}/>
                  {/*<Route path="notifications"*/}
                  {/*       element={<NotificationScreen/>}/>*/}
                  <Route path="profile"
                         exact={true}
                         element={<ProfileScreen/>}/>
                  <Route path="editprofile"
                         exact={true}
                         element={<EditProfile/>}/>
              </Route>
          </Route>
          </Routes>
      </div>
      </BrowserRouter>
  );
}
export default App;


{/*<Route path="/hello"*/}
              {/*       exact={true}*/}
              {/*       element={<HelloWorld/>}/>*/}
              {/*<Route path="/labs"*/}
              {/*       exact={true}*/}
              {/*       element={<Labs/>}/>*/}
              {/*<Route path="/tuiter"*/}
              {/*       exact={true}*/}
              {/*       element={<Tuiter/>}/>*/}
          {/*<Route path="/tuiter/home" element={<HomeScreen/>}/>*/}
          {/*<Route path="/tuiter/explore" element={<ExploreScreen/>}/>*/}

          {/*<Route path="/labs" exact={true}>*/}
          {/*    <Labs/>*/}
          {/*</Route>*/}


          {/*<Route path="/tuiter/home" exact={true}>*/}
          {/*    <HomeScreen/>*/}
          {/*</Route>*/}

          {/*<Route path="/tuiter/explore" exact={true}>*/}
          {/*    <ExploreScreen/>*/}
          {/*</Route>*/}
          {/*<Route path="/hello"  exact={true}>*/}
          {/*    <HelloWorld/>*/}
          {/*</Route>*/}
          {/*<Route path= {["/", "/labs"]} exact={true}>*/}
          {/*    <Labs/>*/}
          {/*</Route>*/}



          {/*<Route path="/tuiter"  exact={true}>*/}
          {/*  <Tuiter/>*/}
          {/*</Route>*/}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
