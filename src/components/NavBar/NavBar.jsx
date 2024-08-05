import './NavBar.css';
import { FaSearch } from "react-icons/fa";


export default function NavBar() {
    return(
      <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container">
        <a className="navbar-brand font-bold" href="#">My Blog</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
          <form className="d-flex ms-3">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-dark" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    );
 }