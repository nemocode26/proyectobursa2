import React from "react";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { postUser } from "./api/postUser";

export default function Home() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

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
    </>
  );
}
