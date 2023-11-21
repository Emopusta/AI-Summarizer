import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

  return (
    <div className="p-3 max-w-lg mx-auto mt-10">
      <h1 className="text-3xl text-center font-semibold mt-3 mb-3">Sign In</h1>
      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg"
          id="assword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="
          bg-slate-700 
          text-white p-3 rounded-lg 
          uppercase hover:opacity-95 
          disabled:opacity-80
          "
        >
          Sign In
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Don`t have an account? </p>
        <Link to="/sign-up">
          <span className="text-blue-700"> Sign up</span>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
