import { useContext } from "react";
import { useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const LogIn = () => {
  const captchaRef = useRef(null);
  const [disableBtn, setDisableBtn] = useState(true);
  const { emailSignIn} = useContext(AuthContext)
  
  
  // load captcha
    useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  // validate captcha
  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value) == true) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    emailSignIn(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      }
      )
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      }
      );
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <LoadCanvasTemplate />
                <input
                  ref={captchaRef}
                  type="text"
                  name="captcha"
                  placeholder="enter the above text"
                  className="input input-bordered"
                />
                <button
                  onClick={handleValidateCaptcha}
                  className=" btn btn-outline btn-sm"
                >
                  validate
                </button>
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={disableBtn}
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
              <p>New to bistro boss <Link className=" link-secondary" to="/signup">create an account </Link> </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
