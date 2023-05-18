// ProtectedRoute.js

import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
  console.log(props.loggedIn);

  return (
    <Route>
      {() => (props.loggedIn ? <Component {...props} /> : <Redirect to="/" />)}
    </Route>
  );
};

export default ProtectedRoute;

// import React from "react";
// import { Route, Redirect } from "react-router-dom";

// const ProtectedRoute = ({
//   componentSaved: SavedMovies,
//   componentMovies: AllMovies,
//   componentProfile: Profile,
//   loggedIn,
//   onSwitcher,
//   isSwitchedOn,
//   onSave,
//   onEdit,
//   onExit,
//   edit,
//   isLocked,
//   ...rest
// }) => {
//   const { pathname } = rest.location;

//   let Component;

//   // Determine the component based on the current pathname
//   switch (pathname) {
//     case "/saved-movies":
//       Component = SavedMovies;
//       break;
//     case "/movies":
//       Component = AllMovies;
//       break;
//     case "/profile":
//       Component = Profile;
//       break;
//     default:
//       console.error("Invalid path:", pathname);
//       return null; // Return null to handle invalid paths gracefully
//   }

//   if (!Component) {
//     console.error("Component not found for path:", pathname);
//     return null; // Return null if component is not found
//   }

//   return (
//     <Route {...rest}>
//       {() => (loggedIn ? <Component {...rest} /> : <Redirect to="/" />)}
//     </Route>
//   );
// };

// export default ProtectedRoute;
