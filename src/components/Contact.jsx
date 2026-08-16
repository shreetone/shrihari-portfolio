import { useState } from "react";

// Google Apps Script Web App URL
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxQdRS3vpP7hcqc5WnJcET-zN8bW7M4wxqSAtHqY5r8yoE5uQxuMgdDFBEtthwJ5hiGiQ/exec";

// WhatsApp number
// India country code = 91
// No +, spaces or -
const WHATSAPP_NUMBER = "917218393080";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  // =========================
  // GOOGLE SHEET + EMAIL
  // =========================

  async function submit(e) {
    e.preventDefault();

    setLoading(true);
    setSent(false);
    setError(false);

    const form = e.target;

    const formData = new URLSearchParams();

    formData.append("name", form.name.value);
    formData.append("email", form.email.value);
    formData.append("service", form.service.value);
    formData.append("message", form.message.value);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      setSent(true);

      form.reset();
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  // =========================
  // WHATSAPP ENQUIRY
  // =========================

  function sendWhatsApp() {
    const form = document.querySelector(".contact-form");

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const service = form.service.value;
    const message = form.message.value.trim();

    if (!name || !email || !service || !message) {
      alert("Please fill all enquiry details first.");
      return;
    }

    const whatsappMessage = `Hello Shrihari,

I have an enquiry regarding your portfolio.

Name: ${name}

Email: ${email}

Service: ${service}

Project Details:
${message}

Thank you.`;

    const whatsappURL =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` +
      encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container">

        {/* SECTION NUMBER */}

        <div className="section-number">
          05 / START A PROJECT
        </div>

        <div className="row g-5">

          {/* =========================
              LEFT SIDE
          ========================= */}

          <div className="col-lg-6">

            <h2 className="section-title">
              Tell me about
              <br />
              <span>your project.</span>
            </h2>

            <p className="section-text">
              Have a website idea, college project or
              business application? Send me the details
              and let's discuss how we can build it.
            </p>

            <div className="contact-details">

              {/* EMAIL */}

              <a href="mailto:shriharitone3@gmail.com">
                <i className="bi bi-envelope"></i>
                shriharitone3@gmail.com
              </a>

              {/* PHONE */}

              <a href="tel:+917218393080">
                <i className="bi bi-telephone"></i>
                +91 7218393080
              </a>

              {/* LOCATION */}

              <span>
                <i className="bi bi-geo-alt"></i>
                Pune, Maharashtra, India
              </span>

            </div>

          </div>

          {/* =========================
              RIGHT SIDE
          ========================= */}

          <div className="col-lg-6">

            <form
              className="contact-form"
              onSubmit={submit}
            >

              {/* NAME */}

              <div className="form-group">
                <label>Full Name *</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>

              {/* EMAIL */}

              <div className="form-group">
                <label>Email *</label>

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              {/* SERVICE */}

              <div className="form-group">
                <label>Service Required</label>

                <select
                  name="service"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select service
                  </option>

                  <option value="Website Development">
                    Website Development
                  </option>

                  <option value="MERN Application">
                    MERN Application
                  </option>

                  <option value="React Development">
                    React Development
                  </option>

                  <option value="Cloud / AWS">
                    Cloud / AWS
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

              {/* MESSAGE */}

              <div className="form-group">
                <label>
                  Tell me about your project *
                </label>

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Describe your project..."
                  required
                />
              </div>

              {/* =========================
                  BUTTONS
              ========================= */}

              <div className="enquiry-buttons">

                {/* SEND PROJECT ENQUIRY */}

                <button
                  type="submit"
                  className="primary-btn submit-btn"
                  disabled={loading}
                >
                  {loading
                    ? "Sending..."
                    : "Send Project Enquiry"}

                  {!loading && (
                    <i className="bi bi-arrow-right"></i>
                  )}
                </button>

                {/* WHATSAPP */}

                <button
                  type="button"
                  className="whatsapp-btn"
                  onClick={sendWhatsApp}
                >
                  <i className="bi bi-whatsapp"></i>
                  WhatsApp Enquiry
                </button>

              </div>

              {/* SUCCESS */}

              {sent && (
                <p className="success-message">
                  Your enquiry has been sent successfully!
                </p>
              )}

              {/* ERROR */}

              {error && (
                <p className="error-message">
                  Something went wrong.
                  Please try again.
                </p>
              )}

            </form>

          </div>
        </div>
      </div>
    </section>
  );
}