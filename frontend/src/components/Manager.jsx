import React, { useState, useEffect } from "react";
import eyeSlash from "../assets/icons/eyecross.png";
import eye from "../assets/icons/eye.png";

const Manager = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArr, setpasswordArr] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArr(JSON.parse(passwords));
    }
  }, []);

  const savePassword = () => {
    setpasswordArr([...passwordArr, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArr, form]));
    console.log(passwordArr);
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <div className="mycontainer text-white">
        <h1 className="font-bold text-center text-4xl">
          <span className="text-green-700">&lt;</span>
          Pass
          <span className="text-green-700">OP/&gt;</span>
        </h1>
        <p className="text-green-700 text-lg text-center">
          Your own Password Manager
        </p>

        <div className="text-white flex flex-col p-4 gap-8 items-center">
          <input
            className="inputField"
            type="text"
            id="site"
            name="site"
            value={form.site}
            onChange={handleChange}
            placeholder="Enter Website URL"
          />

          <div className="flex w-full justify-between gap-8">
            <input
              className="inputField"
              type="username"
              id="username"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
            />

            <div className="relative">
              <input
                className="inputField"
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
              />
              <span
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer w-5"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <img className="invert" src={eye} alt="Hide password" />
                ) : (
                  <img className="invert" src={eyeSlash} alt="Show password" />
                )}
              </span>
            </div>
          </div>

          <button
            onClick={savePassword}
            className="flex justify-center items-center bg-green-800 hover:bg-green-600 rounded-full hover:shadow-lg hover:shadow-green-400 text-center gap-2 px-8 py-2 w-fit border-2 border-emerald-200"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>

        <div className="passwords">
          <h2>Your Passwords</h2>
          <table className="table-auto w-full rounded-xl overflow-hidden border border-green-400">
            <thead className="bg-green-900">
              <tr>
                <th className="py-2">Song</th>
                <th className="py-2">Artist</th>
                <th className="py-2">Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 border border-green-400 text-center w-32">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td className="py-2 border border-green-400 text-center w-32">Malcolm Lockyer</td>
                <td className="py-2 border border-green-400 text-center w-32">1961</td>
              </tr>
              <tr>
                <td className="py-2 border border-green-400 text-center w-32">Witchy Woman</td>
                <td className="py-2 border border-green-400 text-center w-32">The Eagles</td>
                <td className="py-2 border border-green-400 text-center w-32">1972</td>
              </tr>
              <tr>
                <td className="py-2 border border-green-400 text-center w-32">Shining Star</td>
                <td className="py-2 border border-green-400 text-center w-32">Earth, Wind, and Fire</td>
                <td className="py-2 border border-green-400 text-center w-32">1975</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Manager;
