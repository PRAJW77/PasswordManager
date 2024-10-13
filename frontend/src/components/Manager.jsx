import React, { useState, useEffect } from "react";
import eyeSlash from "../assets/icons/eyecross.png";
import eye from "../assets/icons/eye.png";

// toaster
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// uuid
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArr, setpasswordArr] = useState([]);

  const getPasswords = async () => {
    let req = await fetch("http://localhost:3000/");
    let passwords = await req.json();
    setpasswordArr(passwords);
    console.log(passwords);
  };

  useEffect(() => {
    getPasswords();
  }, []);

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("copied!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const savePassword = async () => {
    if (
      form.site.length > 3 &&
      form.username.length > 3 &&
      form.password.length > 3
    ) {
      const id = uuidv4(); // Generate id once
      setpasswordArr([...passwordArr, { ...form, id }]);
      await fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...form, id }),
      });
      toast.success("data saved!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setform({ site: "", username: "", password: "" });
    } else {
      toast.warn("Please enter valid details!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const deletePassword = async (id) => {
    let c = confirm("Do you want delete the data?");
    if (c) {
      setpasswordArr(passwordArr.filter((item) => item.id !== id));
      let req = await fetch("http://localhost:3000/", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      // localStorage.setItem(
      //   "passwords",
      //   JSON.stringify(passwordArr.filter((item) => item.id !== id))
      // );
      toast.success("data deleted!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const editPassword = (id) => {
    let c = confirm("Do you want edit the data?");
    if (c) {
      setform({ ...passwordArr.filter((i) => i.id === id)[0], id: id });
      setpasswordArr(passwordArr.filter((item) => item.id !== id));
    }
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="absolute inset-0 -z-10 min-h-screen w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <div className="p-3 md:mycontainer text-white">
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

          <div className="flex flex-col md:flex-row w-full justify-between gap-8">
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
            className="flex justify-center items-center bg-green-800 hover:bg-green-600 rounded-full hover:shadow-lg hover:shadow-green-400 text-center gap-2 px-6 py-2 w-fit border-2 border-emerald-200 font-bold"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
              colors="primary:#66eece"
              style={{
                width: "23px",
                height: "23px",
              }}
            ></lord-icon>
            SAVE
          </button>
        </div>

        <div className="passwords">
          <h2 className="font-bold text-2xl py-4">Your Passwords</h2>

          <div className="max-h-[280px] overflow-y-auto scrollbar-hide md:scrollbar-default">
            {passwordArr.length === 0 && <div>No Passwords to show</div>}
            {passwordArr.length !== 0 && (
              <table className="table-auto w-full rounded-xl overflow-hidden border border-green-400">
                <thead className="bg-green-900">
                  <tr>
                    <th className="py-2">Site</th>
                    <th className="py-2">Username</th>
                    <th className="py-2">Password</th>
                    <th className="py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {passwordArr.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="py-2 border border-green-400 text-center">
                          <div className="flex justify-center items-center">
                            <a
                              href={item.site}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {item.site}
                            </a>
                            <div
                              className="lordiconcopy size-7 cursor-pointer text-wrap"
                              onClick={() => {
                                copyText(item.site);
                              }}
                            >
                              <lord-icon
                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                trigger="hover"
                                colors="primary:#66eece"
                                style={{
                                  width: "25px",
                                  height: "25px",
                                  paddingTop: "3px",
                                  paddingLeft: "3px",
                                }}
                              ></lord-icon>
                            </div>
                          </div>
                        </td>

                        <td className="items-center py-2 border border-green-400 text-center">
                          <div className="flex justify-center">
                            <span>{item.username}</span>
                            <div
                              className="lordiconcopy size-7 cursor-pointer"
                              onClick={() => {
                                copyText(item.username);
                              }}
                            >
                              <lord-icon
                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                trigger="hover"
                                colors="primary:#66eece"
                                style={{
                                  width: "25px",
                                  height: "25px",
                                  paddingTop: "3px",
                                  paddingLeft: "3px",
                                }}
                              ></lord-icon>
                            </div>
                          </div>
                        </td>
                        <td className="items-center py-2 border border-green-400 text-center">
                          <div className="flex justify-center">
                            <span>{item.password}</span>
                            <div
                              className="lordiconcopy size-7 cursor-pointer"
                              onClick={() => {
                                copyText(item.password);
                              }}
                            >
                              <lord-icon
                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                trigger="hover"
                                colors="primary:#66eece"
                                style={{
                                  width: "25px",
                                  height: "25px",
                                  paddingTop: "3px",
                                  paddingLeft: "3px",
                                }}
                              ></lord-icon>
                            </div>
                          </div>
                        </td>
                        <td className="items-center py-2 border border-green-400 text-center">
                          <span
                            className="cursor-pointer mx-1"
                            onClick={() => {
                              editPassword(item.id);
                            }}
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/gwlusjdu.json"
                              trigger="hover"
                              colors="primary:#66eece"
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                            ></lord-icon>
                          </span>
                          <span
                            className="cursor-pointer mx-1"
                            onClick={() => {
                              deletePassword(item.id);
                            }}
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/skkahier.json"
                              trigger="hover"
                              colors="primary:#66eece"
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                            ></lord-icon>
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Manager;
