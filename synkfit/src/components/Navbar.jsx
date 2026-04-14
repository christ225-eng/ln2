function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">
        <a href="#hero">SynkFit</a>
      </h1>

      <ul className="nav-links">
        <li><a href="#concept">Concept</a></li>
        <li><a href="#features">Technologie</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;