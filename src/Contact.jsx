import ContactForm from './ContactForm.jsx'

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <div className="contact-content">
        <div className="contact-text">
          <h3>Ludwig Rosenberg</h3>
          <p>72793 Pfullingen <br />
          Ludwig.Rosenberg@web.de <br />
          +4915736305617</p>
          <p>or write your Message here</p>
        </div>

        <div className="contact-form-wrapper">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;