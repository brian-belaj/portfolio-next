"use client";

import React, { useState } from "react";
import { sendContact } from "@/lib/api";
import { useLanguage } from "@/context/LanguageContext";

const messages = {
  en: {
    heading:
      "Drop me a line to start your next project. I’d love to hear from you.",
    labels: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
    },
    placeholders: {
      name: "Enter your name",
      email: "Enter your email",
      subject: "What is your project about?",
      message: "Enter your message",
    },
    tip: {
      text: "All the fields are required. By sending the form you agree to the",
      terms: "Terms & Conditions",
      privacy: "Privacy Policy",
    },
    button: {
      idle: "Send Message",
      loading: "Sending...",
    },
    status: {
      success: "Your message has been sent successfully.",
      errorFields: "Please check the highlighted fields.",
      errorGeneric:
        "Something went wrong while sending your message. Please try again.",
    },
  },
  it: {
    heading:
      "Scrivimi per raccontarmi il tuo prossimo progetto. Sarò felice di sentirti.",
    labels: {
      name: "Nome",
      email: "Email",
      subject: "Oggetto",
      message: "Messaggio",
    },
    placeholders: {
      name: "Inserisci il tuo nome",
      email: "Inserisci la tua email",
      subject: "Di cosa parla il tuo progetto?",
      message: "Inserisci il tuo messaggio",
    },
    tip: {
      text:
        "Tutti i campi sono obbligatori. Inviando il form accetti i termini della",
      terms: "Termini & Condizioni",
      privacy: "Privacy Policy",
    },
    button: {
      idle: "Invia messaggio",
      loading: "Invio in corso...",
    },
    status: {
      success: "Il tuo messaggio è stato inviato correttamente.",
      errorFields: "Controlla i campi evidenziati.",
      errorGeneric:
        "Si è verificato un errore durante l'invio. Riprova più tardi.",
    },
  },
};

const t = (locale) => messages[locale] || messages.en;

export default function Contact() {
  const { locale } = useLanguage();
  const msg = t(locale);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: null, message: "" });
  const [fieldErrors, setFieldErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // handleChange e handleSubmit restano identici, ma cambiamo solo le stringhe
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: null, message: "" });
    setFieldErrors({});
    setLoading(true);

    try {
      await sendContact({
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      });

      setStatus({
        type: "success",
        message: msg.status.success,
      });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      if (error.responseData?.errors) {
        setFieldErrors(error.responseData.errors);
        setStatus({
          type: "error",
          message: msg.status.errorFields,
        });
      } else {
        setStatus({
          type: "error",
          message: msg.status.errorGeneric,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container position-relative">
      <div className="row justify-content-center wow fadeInUp">
        <div className="col-lg-8 col-xl-7 d-flex align-items-stretch">
          <div className="bg-gradient-light-2 round overflow-hidden w-100 px-4 py-5 p-sm-5">
            <div className="row">
              <div className="col-md-10 offset-md-1 col-xl-8 offset-xl-2">
                <h4 className="section-descr-medium mt-n10 mb-30 text-center">
                  {msg.heading}
                </h4>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="form contact-form"
              id="contact_form"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="name">{msg.labels.name}</label>
                    <div className="input-grad-wrap round">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="input-md input-grad round form-control"
                        placeholder={msg.placeholders.name}
                        pattern=".{3,100}"
                        required
                        aria-required="true"
                        value={form.name}
                        onChange={handleChange}
                      />
                    </div>
                    {fieldErrors.name && (
                      <div className="text-danger mt-1">
                        {fieldErrors.name}
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="email">{msg.labels.email}</label>
                    <div className="input-grad-wrap round">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="input-md input-grad round form-control"
                        placeholder={msg.placeholders.email}
                        pattern=".{5,100}"
                        required
                        aria-required="true"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                    {fieldErrors.email && (
                      <div className="text-danger mt-1">
                        {fieldErrors.email}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">{msg.labels.subject}</label>
                <div className="input-grad-wrap round">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="input-md input-grad round form-control"
                    placeholder={msg.placeholders.subject}
                    required
                    aria-required="true"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>
                {fieldErrors.subject && (
                  <div className="text-danger mt-1">
                    {fieldErrors.subject}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message">{msg.labels.message}</label>
                <div className="input-grad-wrap round">
                  <textarea
                    name="message"
                    id="message"
                    className="input-md input-grad round form-control"
                    style={{ height: 101 }}
                    placeholder={msg.placeholders.message}
                    value={form.message}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                </div>
                {fieldErrors.message && (
                  <div className="text-danger mt-1">
                    {fieldErrors.message}
                  </div>
                )}
              </div>

              <div className="row">
                <div className="col-md-6 col-xl-7 d-flex align-items-center">
                  <div className="form-tip w-100 pt-3">
                    <i className="icon-info size-16" />
                    {msg.tip.text}{" "}
                    
                    <a href="/privacy" target="_blank" rel="noopener noreferrer">{msg.tip.privacy}</a>.
                  </div>
                </div>
                <div className="col-md-6 col-xl-5 mt-sm-20">
                  <div className="pt-3 text-md-end">
                    <button
                      className="submit_btn btn-mod btn-medium btn-grad btn-round"
                      data-btn-animate="y"
                      id="submit_btn"
                      aria-controls="result"
                      disabled={loading}
                    >
                      {loading ? msg.button.loading : msg.button.idle}
                    </button>
                  </div>
                </div>
              </div>

              <div
                id="result"
                role="region"
                aria-live="polite"
                aria-atomic="true"
                className="pt-3"
              >
                {status.type === "success" && (
                  <div className="alert alert-success">
                    {status.message}
                  </div>
                )}
                {status.type === "error" && (
                  <div className="alert alert-danger">
                    {status.message}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}