import { Link } from "react-router-dom";
import logo from "../../assets/collage-removebg-preview.png";
const Footer = () => {
  return (
    <div className="mt-3">
      <footer className="footer p-10 bg-base-200 text-base-content">
        <aside>
          <img src={logo} className="w-40 h-24" alt="" />
          <p>
            Sylhet Polytacnic Institute
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <Link to='' className="link link-hover">Teachers</Link>
          <Link to='' className="link link-hover">Departments</Link>
          <Link to='' className="link link-hover">Staffs</Link>
          <Link to='' className="link link-hover">Official Page</Link>
        </nav>
        <nav>
          <header className="footer-title">Campus</header>
          <Link to='' className="link link-hover">About us</Link>
          <Link to='' className="link link-hover">Contact</Link>
          <Link to='' className="link link-hover">Jobs</Link>
          <Link to='' className="link link-hover">Press kit</Link>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <Link to='' className="link link-hover">Terms of use</Link>
          <Link to='' className="link link-hover">Privacy policy</Link>
          <Link to='' className="link link-hover">Cookie policy</Link>
          <Link to='https://protfolio-52046.web.app/' className="link link-hover">Developer Info</Link>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
