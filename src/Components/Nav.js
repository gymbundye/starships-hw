import {Link} from "react-router-dom"

function Nav() {
  return (
      <nav>
          <div className="Navdiv">
          <ul>
              {/* <div className="Navdiv2">h</div> */}
              <Link to="Starship">
                  <h3>Starships</h3>
              </Link>
              <Link to="AboutUs">
              <h3>About Us</h3>
              </Link>
              <Link to ="ContactUs">
                  <h3>Contact Us</h3>
              </Link>
          </ul>
          </div>
      </nav>
  );
}

export default Nav;