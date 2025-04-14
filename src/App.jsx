import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import "./App.css";

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";

function App() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [msgUsername, setMsgUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msgPassword, setMsgPassword] = useState("");
  const [specializzazione, setSpecializzazione] = useState("default");
  const [anni, setAnni] = useState("");
  const [descrizione, setDescrizione] = useState("");
  const [msgDescrizione, setMsgDescrizione] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !name ||
      !username ||
      !password ||
      specializzazione === "default" ||
      !anni ||
      anni <= 0 ||
      !descrizione
    ) {
      console.log("compila i campi obbligatori");
      return;
    } else {
      console.log(
        "name: " + name,
        "; username: " + username,
        "; password: " + password,
        "; specializzazione: " + specializzazione,
        "; anni di esperienza: " + anni,
        "; descrizione: " + descrizione
      );
    }
  };

  console.log(name);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nome completo</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nome e cognome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            const val = e.target.value;
            setUsername(val);
            if (
              !val.split("").find((char) => symbols.includes(char)) &&
              val.length >= 6 &&
              !val.includes(" ")
            ) {
              setMsgUsername("Username valido ✅");
            } else {
              setMsgUsername(
                "L'username deve contenere solo lettere e numeri e deve essere di almeno 6 caratteri e senza contenere spazi ❌"
              );
            }
          }}
        />
      </Form.Group>
      {msgUsername && (
        <Form.Text
          className={
            msgUsername.includes("valido") ? "text-success" : "text-danger"
          }
        >
          {msgUsername}
        </Form.Text>
      )}

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            const val = e.target.value;
            setPassword(val);
            if (
              val.length >= 8 &&
              val.split("").find((char) => letters.includes(char)) &&
              val.split("").find((char) => numbers.includes(char)) &&
              val.split("").find((char) => symbols.includes(char))
            ) {
              setMsgPassword("Password valida ✅");
            } else {
              setMsgPassword(
                "La password deve contenere almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo ❌"
              );
            }
          }}
        />
      </Form.Group>
      {msgPassword && (
        <Form.Text
          className={
            msgPassword.includes("valida") ? "text-success" : "text-danger"
          }
        >
          {msgPassword}
        </Form.Text>
      )}

      <Form.Group className="mb-3">
        <Form.Label>Seleziona specializzazione</Form.Label>
        <Form.Select
          aria-label="Default select example"
          value={specializzazione}
          onChange={(e) => setSpecializzazione(e.target.value)}
        >
          <option value="default">Scegli una specializzazione</option>
          <option value="Full Stack">Full Stack</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicExperience">
        <Form.Label>Anni di esperienza</Form.Label>
        <Form.Control
          type="number"
          placeholder="Anni di esperienza"
          value={anni}
          onChange={(e) => setAnni(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descrizione</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={descrizione}
          onChange={(e) => {
            const val = e.target.value;
            setDescrizione(val);
            if (val.length >= 100 && val.length <= 1000 && val === val.trim()) {
              setMsgDescrizione("Descrizione valida ✅");
            } else {
              setMsgDescrizione(
                "La descrizione deve avere tra i 100 e i 1000 caratteri, e non deve contenere spazi all'inizio o alla fine di essa ❌"
              );
            }
          }}
        />
      </Form.Group>
      {msgDescrizione && (
        <Form.Text
          className={
            msgDescrizione.includes("valida") ? "text-success" : "text-danger"
          }
        >
          {msgDescrizione}
        </Form.Text>
      )}

      <Button className="d-flex mt-3" variant="primary" type="submit">
        Invio
      </Button>
    </Form>
  );
}

export default App;
