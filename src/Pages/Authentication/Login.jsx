import { Link, useLocation, useNavigate } from "react-router-dom";
import Social from "../../Components/Shared/SocialAuthentication/Social";
import { useFormik } from "formik";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useState } from "react";
import { loginSchema } from "../../Utils/loginSchema";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const location = useLocation();
  const navigation = useNavigate();
  console.log(location);
  const [errMessage, setErrMessage] = useState(null);
  const { loginUser } = useAuth();
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const onSubmit = async (values, actions) => {
    try {
      const { email, password, validate } = values;
      if (validateCaptcha(validate) == true) {
        const toastId = toast.loading("Logging in...");
        setErrMessage(null);
        loginUser(email, password)
          .then(async (userCredential) => {
            console.log(userCredential);
            await new Promise((resolved) => setTimeout(resolved, 1000));
            actions.resetForm();
            navigation(
              location.state.form.pathname ? location.state.form.pathname : "/"
            );
            loadCaptchaEnginge(6);
            toast.success("Logged In...", { id: toastId });
          })

          .catch((err) => {
            toast.error(err.message, { id: toastId });
            console.log(err.message);
          });
      } else {
        setErrMessage("didn't matched");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const { handleBlur, handleChange, handleSubmit, values, touched, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        validate: "",
      },
      validationSchema: loginSchema,
      onSubmit,
    });

  return (
    <div className="bg-[url('/src/assets/reservation/wood-grain-pattern-gray1x.png')] bg-cover">
      <div className="hero min-h-screen">
        <div className="hero-content py-20 shadow-xl  mx-4 bg-[url('/src/assets/others/authentication.png')] flex-col md:flex-row">
          <div>
            <img src="/src/assets/others/authentication2.png" alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-md  bg-none">
            <h1 className="text-5xl text-center font-bold">Login now!</h1>
            <form onSubmit={handleSubmit} className="card-body space-y-3">
              <div className="form-control space-y-1">
                <label className="email">
                  <span className=" font-bold text-lg">Email</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="user123@gmail.com"
                  className={`${
                    errors.email && touched.email ? "border-red-200" : ""
                  }  input input-bordered `}
                  required
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
              <div className="form-control space-y-1">
                <label className="password">
                  <span className=" font-bold text-lg">Password</span>
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="* * * * * * "
                  className={`${
                    errors.password ? "border-red-200" : ""
                  }  input input-bordered `}
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password}</p>
                )}
                <label className="label">
                  <a
                    href="#"
                    className=" font-bold text-lg-alt link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div>
                <label>
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  id="validate"
                  value={values.validate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Type here"
                  className="input input-bordered w-full mt-3"
                  required
                />
                {errMessage && <p className="text-red-500">{errMessage}</p>}
              </div>
              <div className="form-control mt-6">
                <button
                  // disabled={disable && errors}
                  type="submit"
                  className="btn bg-[#d1a054] hover:bg-[#c28325] uppercase text-xl font-extrabold text-white"
                >
                  Login
                </button>
              </div>
              <div>
                <div
                  className="flex  mx-auto items-center w-fit gap-1 text-[#d1a052] font-extrabold text-lg
              "
                >
                  <p>Now here </p>
                  <span>?</span>

                  <Link to="/register" className="text-xl hover:link">
                    Create a New Account
                  </Link>
                </div>
              </div>
              <div className="divider text-xl font-bold text-[#d1a054]">Or</div>
              <Social />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
