import { NavLink } from "react-router-dom";

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/SavedCandidates">Saved Candidates</NavLink></li>
    </ul>
  )
};

export default Nav;
