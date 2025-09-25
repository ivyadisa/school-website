import React, { useState } from "react";
import axios from "axios";
import "./contact.css"; // optional for styling

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await axios.post("http://127.0.0.1:8000/api/contact/", formData, {
        headers: { "Content-Type": "application/json" },
      });

      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // clear form
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("❌ Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-intro">
        We'd love to hear from you! Whether you have questions about admissions,
        academics, or general inquiries, feel free to reach out.
      </p>

      <div className="contact-wrapper">
        {/* Contact Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p><strong>Address:</strong> Bright Future Academy, Nairobi, Kenya</p>
          <p><strong>Phone:</strong> +254 712 345 678</p>
          <p><strong>Email:</strong> info@schoolname.ac.ke</p>
          <p><strong>Office Hours:</strong> Mon - Fri, 8:00 AM - 5:00 PM</p>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Status Message */}
          {status && <p className="status-message">{status}</p>}
        </div>
      </div>
    </div>
  );
}

export default Contact;
