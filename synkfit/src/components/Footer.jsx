function Footer() {
  return (
   <footer className="footer" id="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>SynkFit</h2>
          <p>
            La chaussure de sport intelligente pensée pour transformer chaque
            sprint en données utiles.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h3>Navigation</h3>
            <ul>
              <li>Accueil</li>
              <li>Technologie</li>
              <li>Produit</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3>Ressources</h3>
            <ul>
              <li>Freebie</li>
              <li>FAQ</li>
              <li>Newsletter</li>
              <li>Support</li>
            </ul>
          </div>

          <div>
            <h3>Légal</h3>
            <ul>
              <li>Mentions légales</li>
              <li>Confidentialité</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 SynkFit — Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;