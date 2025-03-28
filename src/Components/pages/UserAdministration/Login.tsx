import React from 'react'
import { IonContent } from '@ionic/react';

import '../style/LoginStyle.css'

function Login() {
  return (
    <IonContent>
      <div className='login-container'>
        <div>
          <h1 className='pagetitle'>Login</h1>
          <form>
            <div data-mdb-input-init className="form-outline mb-4">
              <input type="email" id="form2Example1" className="form-control" />
              <label className="form-label" htmlFor="form2Example1">Email address</label>
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <input type="password" id="form2Example2" className="form-control" />
              <label className="form-label" htmlFor="form2Example2">Password</label>
            </div>

            <div className="row mb-4">
              <div className="col d-flex justify-content-center">
                <div className="form-check">
                  <input className="form-check-input form-check-input" type="checkbox" id="form2Example31" defaultChecked />
                  <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                </div>
              </div>

              <div className="col">

                <a className='anchorStyle' href="#!">Forgot password?</a>
              </div>
            </div>

            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-warning btn-block mb-4">Login</button>

            <div className="text-center">
              <p>Not a member? <br /> <a className='anchorStyle' href="#!">Register</a></p>
              <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
              </button>

              <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                <i className="fab fa-google"></i>
              </button>

              <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                <i className="fab fa-twitter"></i>
              </button>

              <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                <i className="fab fa-github"></i>
              </button>
            </div>
          </form>
        </div>
      </div>

    </IonContent>
  )
}

export default Login;