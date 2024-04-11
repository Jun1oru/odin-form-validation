import { createForm } from "./form-dom";
import "./styles.css";

const p = document.createElement("p");
p.textContent = "Test";
const body = document.querySelector("body");
const form = createForm();
form.appendChild(p);
body.appendChild(form);
