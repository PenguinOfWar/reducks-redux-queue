import React from 'react';
import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps } from '../../dispatch/bootstrap';

import { Simple, Advanced } from '../../components/Examples/Examples';

import logo from '../../assets/images/logo.png';
import './App.scss';

const App = (props = {}) => {
  return (
    <div className="app container-fluid">
      <div className="row">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="jumbotron bg-secondary text-white text-center">
                <div className="row">
                  <div className="col-lg-6 offset-lg-3">
                    <figure className="figure">
                      <img
                        src={logo}
                        className="img-fluid logo"
                        alt="Reducks"
                      />
                      <figcaption className="figure-caption text-white sr-only">
                        Logo credit:{' '}
                        <a
                          href="https://github.com/damianryann"
                          className="text-light"
                        >
                          Damian Ryan
                        </a>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <h1 className="display-5">
                  <span className="sr-only">Reducks </span>(Redux Queue)
                </h1>
                <p className="lead">
                  A redux-observable driven FIFO (first in - first out) queueing
                  system for redux and redux-thunk.
                </p>
                <p className="lead">
                  Reducks is also fully compatible with react-redux. Please see
                  the source code of this page for examples.
                </p>
                <p className="lead">
                  Logo credit:{' '}
                  <a
                    href="https://github.com/damianryann"
                    className="badge badge-dark"
                  >
                    Damian Ryan
                  </a>
                </p>
                <hr className="my-4" />
                <p>
                  On this page you will find interactive examples. Please
                  consult the documentation for further details and a tutorial.
                </p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a
                      className="btn btn-dark btn-lg"
                      href="https://github.com/PenguinOfWar/reducks-redux-queue"
                      target="_blank"
                      rel="noopener noreferrer"
                      role="button"
                    >
                      Documentation
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="btn btn-dark btn-lg"
                      href="https://github.com/PenguinOfWar/reducks-redux-queue/issues"
                      target="_blank"
                      rel="noopener noreferrer"
                      role="button"
                    >
                      Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="container pb-4">
          <div className="row">
            <div className="col-12">
              <div className="card bg-secondary text-white">
                <div className="card-body">
                  <h2 className="card-title display-4">Demos &amp; Examples</h2>
                  <p className="card-text">
                    The following examples are generic usage examples that
                    assume you have either followed the tutorial to get started,
                    or know enough that this will just make sense.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <Simple {...props} />
      </div>
      <div className="row">
        <Advanced {...props} />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
