import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [username, setUserame] = useState("");
  const [password, setPassword] = useState("");
  const [specializzazione, setSpecializzazione] = useState("default");
  const [anni, setAnni] = useState("");
  const [descrizione, setDescrizione] = useState("");

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
          onChange={(e) => setUserame(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

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

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descrizione</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={descrizione}
          onChange={(e) => setDescrizione(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Invio
      </Button>
    </Form>
  );
}

export default App;
