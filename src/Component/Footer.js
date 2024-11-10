import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#45526e' }}>
      <div className="container p-4 pb-0">
        {/* Section: Links */}
        <section>
          <div className="row">
            {/* Grid column */}
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Company name</h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </div>
            {/* ... */}
          </div>
        </section>
        {/* ... */}
        <hr className="my-3" />
        {/* Section: Copyright */}
        <section className="p-3 pt-0">
          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8 text-center text-md-start">
              {/* Copyright */}
              <div className="p-3">
                © 2020 Copyright:
                <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
              </div>
              {/* Copyright */}
            </div>
            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
              {/* Social media icons */}
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a
                    className="btn btn-outline-light btn-floating m-1"
                    role="button"
                    href="https://www.facebook.com/"
                  >
                    <i className="fab fa-facebook-f" alt="Facebook" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn btn-outline-light btn-floating m-1"
                    role="button"
                    href="https://twitter.com/"
                  >
                    <i className="fab fa-twitter" alt="Twitter" />
                  </a>
                </li>
                {/* ... */}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;