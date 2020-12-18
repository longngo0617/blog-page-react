import React from "react";

export default function Contact() {
  return (
    <>
      <nav id="breadcrumbs" className="breadcrumbs">
        <div className="container page-wrapper">
          <a href="index.html">Home</a> /{" "}
          <span className="breadcrumb_last" aria-current="page">
            Contact
          </span>
        </div>
      </nav>
      <section className="w3l-contact-2 py-5">
        <div className="container py-lg-5 py-md-4">
          <h3 className="section-title-left">Leave Us a message </h3>
          <div className="contact-grids d-grid">
            <div className="contact-left">
              <h3 className="mb-3">Contact Details</h3>
              <p>
                Everything start with a Hello! We’re here to answer any
                questions you may have and create an effective solution for your
                instructional needs.
              </p>
              <p>
                We have a dedicated support center for all of your support
                needs. We usually get back to you within 12-24 hours.
              </p>
              <div className="cont-details">
                <div className="cont-top margin-up">
                  <div className="cont-left text-center">
                    <span className="fa fa-map-marker" />
                  </div>
                  <div className="cont-right">
                    <h6>Address</h6>
                    <p>#135 block, Barnard St. Brooklyn, NY 10036, USA</p>
                  </div>
                </div>
                <div className="cont-top margin-up">
                  <div className="cont-left text-center">
                    <span className="fa fa-phone" />
                  </div>
                  <div className="cont-right">
                    <h6>Call Us</h6>
                    <p>
                      <a href="tel:+(12)234-11-2446">+(12)234-11-2446</a>,{" "}
                      <a href="tel:+(12)234-11-4455" className="ml-2">
                        +(12)234-11-4455
                      </a>
                    </p>
                  </div>
                </div>
                <div className="cont-top margin-up">
                  <div className="cont-left text-center">
                    <span className="fa fa-envelope-o" />
                  </div>
                  <div className="cont-right">
                    <h6>Email Us</h6>
                    <p>
                      <a href="mailto:example@mail.com" className="mail">
                        example@mail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-right">
              <form
                action="https://sendmail.w3layouts.com/submitForm"
                method="post"
                className="signin-form"
              >
                <div className="input-grids">
                  <input
                    type="text"
                    name="w3lName"
                    id="w3lName"
                    placeholder="Your Name*"
                    className="contact-input"
                    required
                  />
                  <input
                    type="email"
                    name="w3lSender"
                    id="w3lSender"
                    placeholder="Your Email*"
                    className="contact-input"
                    required
                  />
                  <input
                    type="text"
                    name="w3lSubect"
                    id="w3lSubect"
                    placeholder="Subject*"
                    className="contact-input"
                    required
                  />
                </div>
                <div className="form-input">
                  <textarea
                    name="w3lMessage"
                    id="w3lMessage"
                    placeholder="Type your message here*"
                    required
                    defaultValue={""}
                  />
                </div>
                <button className="btn btn-style btn-outline">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
