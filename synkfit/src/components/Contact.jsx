function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-left">
        <p className="section-tag">Contact</p>
        <h2>Restez connecté au lancement de SynkFit</h2>
        <p className="section-text">
          Recevez les nouveautés, le freebie de présentation et les premières
          informations sur la sortie de la chaussure.
        </p>
      </div>

      <div className="contact-form-card">
        <form className="contact-form">
          <input type="text" placeholder="Votre nom" />
          <input type="email" placeholder="Votre email" />
          <button type="submit" className="btn-primary">
            Recevoir les infos
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;