function Features() {
  return (
    <section className="features" id="features">
      <div className="section-header">
        <p className="section-tag">Fonctionnalités</p>
        <h2>Une technologie pensée pour les sportifs exigeants</h2>
        <p className="section-text">
          SynkFit transforme chaque sprint en données utiles pour mieux
          comprendre votre effort et améliorer vos performances.
        </p>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <h3>Fréquence cardiaque en direct</h3>
          <p>
            Suivez instantanément les variations de votre rythme cardiaque
            pendant l’effort.
          </p>
        </div>

        <div className="feature-card">
          <h3>Analyse du sprint</h3>
          <p>
            Mesurez l’intensité, la vitesse et l’impact de chaque phase de
            votre course.
          </p>
        </div>

        <div className="feature-card">
          <h3>Confort haute performance</h3>
          <p>
            Une chaussure conçue pour rester légère, stable et adaptée à
            l’effort explosif.
          </p>
        </div>

        <div className="feature-card">
          <h3>Data claire et utile</h3>
          <p>
            Des informations compréhensibles pour progresser sans se perdre
            dans des données compliquées.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;