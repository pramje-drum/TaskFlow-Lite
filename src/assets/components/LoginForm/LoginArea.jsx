import { useState } from "react";
import Header from "../Header";
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";

const userKey = "taskReact";

const LoginArea = () => {
  const { register, handleSubmit } = useForm();
  const [isLogin, setIsLogin] = useState(true);
//   const navigate = useNavigate();

  const onSubmit = (data) => {
    const savedUser = JSON.parse(localStorage.getItem(userKey));

    if (isLogin) {
      // LOGIN MODE
      if (
        savedUser &&
        data.username === savedUser.username &&
        data.password === savedUser.password
      ) {
        localStorage.setItem("token", "dummy-token-123");
        // navigate("/dashboard");
        alert("Logged In")
      } else {
        alert("Invalid username or password");
      }
    } else {
      // SIGNUP MODE
      if (data.password !== data.confirm_password) {
        alert("Passwords do not match");
        return;
      }

      localStorage.setItem(userKey, JSON.stringify(data));
      alert("Account created successfully. Please log in.");
      setIsLogin(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* header area */}
      <div>
        <Header />
      </div>

      <div className="flex-1 flex justify-center items-center px-4">
        {/* form area */}
        <div className="font-Gothic w-full bg-white p-8 text-center max-w-lg shadow-lg rounded-2xl">
          {/* loginheading */}
          <div className="text-4xl mb-6 text-center font-semibold">
            {isLogin ? "Log In" : "Sign Up"}
          </div>

          {/* form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="flex items-center gap-4">
              <label className="w-28 text-left text-lg font-medium">
                UserName :
              </label>
              <input
                className="flex-1 border px-3 py-2 rounded-lg focus:outline-none"
                placeholder="username.."
                {...register("username", { required: true, maxLength: 20 })}
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="w-28 text-left text-lg font-medium">
                Password :
              </label>
              <input
                className="flex-1 border px-3 py-2 rounded-lg focus:outline-none"
                placeholder="password.."
                type="password"
                {...register("password", { required: true, maxLength: 20 })}
              />
            </div>

            {!isLogin && (
              <div className="flex items-center gap-4">
                <label className="w-28 text-left text-lg font-medium">
                  Confirm Password :
                </label>
                <input
                  className="flex-1 border px-3 py-2 rounded-lg focus:outline-none"
                  placeholder="confirm password.."
                  type="password"
                  {...register("confirm_password", {
                    required: true,
                    maxLength: 20,
                  })}
                />
              </div>
            )}

            <input
              type="submit"
              value={isLogin ? "Log In" : "Sign Up"}
              className="mt-4 px-6 py-2 rounded-lg border hover:bg-gray-400 cursor-pointer"
            />
          </form>

          <div
            className="mt-5 hover:text-gray-700 cursor-pointer"
            onClick={() => {
              setIsLogin(!isLogin);
            }}
          >
            {isLogin
              ? " New User? Create Account "
              : "Already a User? LogIn here"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginArea;
