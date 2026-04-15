import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("https://hook.eu1.make.com/47tk163vxujp7da1hndu6o33fgbbg1ol", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        date: new Date().toISOString(),
      }),
    });

    alert("Inscription envoyée !");
    setFormData({ name: "", email: "" });
  };

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
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn-primary">
            Recevoir les infos
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;