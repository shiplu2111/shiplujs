
"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
const API_BASE = process.env.NEXT_PUBLIC_API_URL;
export default function ContactFormArea() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE}/contact-me`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success(result.message || "Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        toast.error(result.message || "Failed to send message!");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <form
        id="contactForm"
        className="contactForm"
        name="contactForm"
        onSubmit={handleSubmit}
      >
        <div className="row">
          {/* Name */}
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Richard D. Hammond"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="name" className="for-icon">
                <i className="far fa-user" />
              </label>
            </div>
          </div>

          {/* Email */}
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="support@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="email" className="for-icon">
                <i className="far fa-envelope" />
              </label>
            </div>
          </div>

          {/* Phone */}
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="form-control"
                placeholder="+880 (123) 456 88"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <label htmlFor="phone" className="for-icon">
                <i className="far fa-phone" />
              </label>
            </div>
          </div>

          {/* Subject */}
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-control"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <label htmlFor="subject" className="for-icon">
                <i className="far fa-text" />
              </label>
            </div>
          </div>

          {/* Message */}
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                className="form-control"
                rows={4}
                placeholder="Write message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-md-12">
            <div className="form-group mb-0">
              <button type="submit" className="theme-btn" disabled={loading}>
                {loading ? "Sending..." : "Send Me Message"}{" "}
                <i className="far fa-angle-right" />
              </button>
            </div>

            {/* Success & Error Messages */}
            {successMsg && <p className="text-success mt-2">{successMsg}</p>}
            {errorMsg && <p className="text-danger mt-2">{errorMsg}</p>}
          </div>
        </div>
      </form>
    </div>
  );
}

