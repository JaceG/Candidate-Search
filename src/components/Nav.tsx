import { NavLink } from "react-router-dom";

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <ul className="nav">
      <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
      <li className="nav-item"><NavLink className="nav-link" to="/SavedCandidates">Saved Candidates</NavLink></li>
    </ul>
  )
};

export default Nav;
