import React, { useEffect } from "react";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { postUser } from "./api/postUser";

export default function Home() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/user`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    postUser(input).then((res) => {
      if (res.state === "aprobado") {
        alert("usuario creado0");
      }
    });
  }
  console.log("user", user);
  return (
    <>
      <h1>El problema son ustedes giles</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <label>nombre</label>

        <input
          type="text"
          name="username"
          value={input.username}
          onChange={(e) => handleChange(e)}
        />

        <label>contraseña</label>
        <input
          type="password"
          name="password"
          value={input.password}
          onChange={(e) => handleChange(e)}
        />

        <button type="submit">enviar</button>
      </form>

      {
        user!==null && user.length>0?
        user.map(e=><h1>{e.username}</h1>)
        :null
      }
    </>
  );
}
