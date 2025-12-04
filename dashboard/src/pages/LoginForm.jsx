import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

// Zod Schema
const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
  });

  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [msg, setMsg] = useState("");

  // Submit Function
  const onSubmit = async (data) => {
    const response = await loginUser(data);

    if (response.success) {
      setMsg("Login successful");
      navigate("/");
    } else {
      setMsg(response.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white flex flex-col justify-center rounded-xl shadow-md p-10 w-full max-w-lg h-screen md:h-[550px]">

        <h2 className="text-gray-600 text-sm mb-1">Please enter your details</h2>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Welcome Back</h1>

        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">Email address</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#020c18]"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#020c18]"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#020c18] text-white py-2 rounded-md hover:bg-[#1a202c] transition mb-4 disabled:opacity-50"
          >
            {isSubmitting ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* Error / Success */}
        {msg && <p className="text-center text-sm text-red-500">{msg}</p>}



      </div>
    </div>
  );
}
