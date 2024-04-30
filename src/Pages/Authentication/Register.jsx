import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Social from "../../Components/Shared/SocialAuthentication/Social";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../Utils/loginSchema";

const Register = () => {
  const {
    handleSubmit,
    register,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(useForm);
  return (
    <div className="bg-[url('/src/assets/reservation/wood-grain-pattern-gray1x.png')] bg-cover">
      <div className="hero min-h-screen ">
        <div className="hero-content py-20  bg-[url('/src/assets/others/authentication.png')] flex-col md:flex-row-reverse shadow-xl mx-4">
          <div>
            <img src="/src/assets/others/authentication2.png" alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-md  bg-none">
            <h1 className="text-5xl text-center font-bold">SignUp !!</h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body space-y-3"
            >
              <div className="form-control space-y-1">
                <label>
                  <span className=" font-bold text-lg">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="User123"
                  className=" input input-bordered"
                  {...register("name", { required: true })}
                  required
                />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control space-y-1">
                <label>
                  <span className=" font-bold text-lg">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="user123@gmail.com"
                  className=" input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email?.message}</span>
                )}
              </div>
              <div className="form-control space-y-1">
                <label>
                  <span className=" font-bold text-lg">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="* * * * * * "
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500">
                    {errors.password?.message}
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn bg-[#d1a054] hover:bg-[#c28325] uppercase text-xl font-extrabold text-white"
                  value="Create Account"
                />
              </div>
              <div>
                <div
                  className="flex  mx-auto items-center w-fit gap-1 text-[#d1a052] font-extrabold text-lg
              "
                >
                  <p>Already have an account</p>
                  <span>?</span>

                  <Link to="/login" className="text-xl hover:link">
                    Please Login
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

export default Register;
