import { useState } from "react";
import axiosInstance from "../api/axiosInstance";

export default function Register() {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/auth/register", data);
      setMsg("Registration successful!");
    } catch {
      setMsg("Error registering user");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-200">
      <form className="bg-white p-6 rounded shadow w-80" onSubmit={submit}>
        <h1 className="text-xl font-bold mb-4">Register</h1>

        <input className="border w-full p-2 mb-3" placeholder="Name"
               onChange={(e) => setData({ ...data, name: e.target.value })} />

        <input className="border w-full p-2 mb-3" placeholder="Email"
               onChange={(e) => setData({ ...data, email: e.target.value })} />

        <input className="border w-full p-2 mb-3" placeholder="Password" type="password"
               onChange={(e) => setData({ ...data, password: e.target.value })} />

        <button className="bg-green-600 text-white w-full p-2 rounded">Register</button>

        <p className="text-sm mt-3">{msg}</p>
      </form>
    </div>
  );
}
