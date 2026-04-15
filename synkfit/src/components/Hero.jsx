function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-text">
        <p className="tag">Performance • Data • Innovation</p>

        <h2>
          Maîtrisez vos performances
          <span> en temps réel</span>
        </h2>

        <p className="description">
          SynkFit est une chaussure de sport intelligente capable de suivre
          votre fréquence cardiaque pendant vos sprints pour vous aider à
          progresser avec précision, sécurité et contrôle.
        </p>

        <div className="hero-buttons">
          <a href="#features" className="btn-primary">Découvrir</a>
          <a href="#contact" className="btn-secondary">Précommander</a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-image-card">
          <img
            src="https://images.unsplash.com/photo-1639619287843-da4b297d7672?q=80&w=1907&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Chaussure de sport SynkFit"
          />

          <div className="hero-stats">
            <div>
              <span>Fréquence</span>
              <strong>148 BPM</strong>
            </div>
            <div>
              <span>Vitesse</span>
              <strong>29 km/h</strong>
            </div>
            <div>
              <span>Sprint</span>
              <strong>Live</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;