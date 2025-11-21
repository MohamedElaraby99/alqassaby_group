import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AuthContext } from "../context/AuthContext";


// ---------- Zod Schema ----------
const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(["user", "admin"]).default("user"),
});

export default function RegisterForm() {
  const { registerUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [msg, setMsg] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "user",
    },
  });

  // ---------- Submit Handler ----------
  const onSubmit = async (data) => {
    const response = await registerUser(data);
    if (response.success) {
      setMsg(response.data.message);
      reset();
      navigate("/"); 
    } else {
      setMsg(response.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white flex flex-col justify-center rounded-xl shadow-md p-10 w-full max-w-lg h-auto md:h-[650px]">
        <h2 className="text-gray-600 text-sm mb-1">
          Please enter your details
        </h2>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Create an account</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">Enter Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#020c18]"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

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

          {/* Role */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm mb-2">Select Role</label>
            <select
              {...register("role")}
              className="w-full px-4 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#020c18]"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#020c18] text-white py-2 rounded-md hover:bg-[#1a202c] transition mb-4 disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Sign Up"}
          </button>
        </form>

        {/* Login link */}
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/loginForm" className="text-[#020c18] hover:underline">
            Sign in
          </Link>
        </p>

        {/* API Message */}
        {msg && <p className="mt-4 text-center text-red-500">{msg}</p>}
      </div>
    </div>
  );
}
