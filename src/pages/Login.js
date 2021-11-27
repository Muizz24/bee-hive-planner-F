import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import React, {useState} from 'react';
import Alert from 'react-bootstrap/Alert'
import { useHistory } from "react-router-dom";

function Login() {
    const history = useHistory();

    const [username, setUsername] = useState("")

    const [password, setPassword] = useState("")

    const [errorMsg, setErrorMsg] = useState("")

    const handleLogin = async (e) => {
      e.preventDefault()
      setErrorMsg("")
      const rawResponse = await fetch('https://email-api-test-dot-greencube-sports.uc.r.appspot.com/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "api_key": "d46a52bb-7d25-4f63-b238-c4c51b3d46e1",
                                    "username":  username,
                                    "password":  password
                                })
        });
      if (rawResponse.status === 200) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        history.push("/VM-tables");
      } else {
        setErrorMsg("Invalid username or password")
      }
    }
  
    return (
      <div className="mainContainer">
        <div className="loginForm">
            <h2>GC Dashboard</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="email" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  {errorMsg && <Alert variant={"danger"}>{errorMsg}</Alert>}
                </Form.Group>
                

                <Button variant="primary" type="submit" onClick={(e) => handleLogin(e)}>
                    Submit
                </Button>
            </Form>
        </div>
      </div>
    );
  }

  export default Login;