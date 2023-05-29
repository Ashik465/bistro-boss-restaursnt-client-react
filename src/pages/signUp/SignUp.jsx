import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";
import Swal from "sweetalert2";

const SignUp = () => {
  const { emailSignUp, setUser } = useContext(AuthContext);
  const auth = getAuth(app);
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    emailSignUp(data.email, data.password)
      .then((result) => {
        // Signed in
        const loggedUser = result.user;
        console.log(loggedUser);
        updateProfile(auth.currentUser, {
          displayName: data.name,
          photoURL: data.photoUrl,
        })
          .then(() => {
            setUser((loggedUser) => {
              const updatedLoggedUser = { ...loggedUser };
              updatedLoggedUser.displayName = data.name;
              updatedLoggedUser.photoURL = data.photoUrl;

              return updatedLoggedUser;
            });
            // setLoader(true)
            // window.location.reload()
          })
          .catch((error) => {
            // An error occurred
            console.log(error);
          });
        reset();
        navigate("/");

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "sign up succcess",
          showConfirmButton: false,
          timer: 1500,
        });

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">sign-up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500">Name field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">photoUrl</span>
                </label>
                <input
                  type="text"
                  {...register("photoUrl", { required: true })}
                  name="photoUrl"
                  placeholder="photoUrl"
                  className="input input-bordered"
                />
                {errors.photoUrl && (
                  <span className="text-red-500">
                    photoUrl field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500">Email field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /[ A-Za-z]/,
                  })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500"> password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">
                    {" "}
                    password must be six character
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-500">
                    {" "}
                    password must be less than 20 character
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500">
                    {" "}
                    password should have one uppercase letter
                  </p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <p>
                Already have an account{" "}
                <Link className=" link-secondary" to="/login">
                  {" "}
                  Log In{" "}
                </Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
