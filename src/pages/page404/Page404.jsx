import React from "react";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <>
      <section id="error" className="w3l-error py-5">
        <div className="container py-md-4">
          <div className="row align-items-center">
            <div className="col-md-5 col-7 mx-auto">
              <img
                src="assets/images/error.png"
                alt=""
                className="rounded-circle img-fluid"
              />
            </div>
            <div className="col-md-7 col-sm-12">
              <h1 className="error-title">404</h1>
              <h2>Page Not Found</h2>
              <p className="mt-3">
                Sorry, we're offline right now to make our site even better.
                Please, come back later and check what we've been up to.
              </p>
              <Link to="/" className="btn btn-style btn-outline mt-4">
                {" "}
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
