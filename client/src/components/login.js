import React from "react"
import Cleave from "cleave.js/react"
import { navigate } from "gatsby"
import { Container, Form, Button, Row, Col, Spinner } from "react-bootstrap"
import axios from "axios"

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: true,
    }
    this.formref = React.createRef()
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({
      loaded: false,
      success: false,
    })
    const data = new FormData(e.target)
    var data_j = {}
    data.forEach((value, key) => {
      data_j[key] = value
    })
    axios({
      method: "get",
      url: "http://localhost:3000/login",
      params: data_j,
      headers: { "Content-Type": "text/plain" },
    })
      .then(res => {
        this.formref.reset()
        this.setState({
          loaded: true,
          error: false,
          success: true,
        })
        navigate("/reports/", { state: res.data })
      })
      .catch(error => {
        this.setState({
          error,
          loaded: true,
          success: false,
        })
      })
  }

  render() {
    return (
      <Container style={{ position: "relative" }}>
        {!this.state.loaded || this.state.success ? (
          <Container
            fluid
            className="h-100"
            style={{
              backgroundColor: "rgba(255, 191, 195, 0.85)",
              position: "absolute",
              zIndex: "10",
            }}
          >
            <div className="d-flex flex-column" style={{ marginTop: "50px" }}>
              <Spinner
                animation="grow"
                variant="secondary"
                className="mx-auto m-3 d-block"
              />
              {!this.state.success ? (
                <div className="mx-auto">Checking your credentials...</div>
              ) : (
                <div className="mx-auto">Getting your reports...</div>
              )}
            </div>
          </Container>
        ) : null}
        <Form
          onSubmit={this.handleSubmit.bind(this)}
          ref={el => (this.formref = el)}
          className="mb-5 mx-auto d-flex flex-column"
          style={{ maxWidth: "600px" }}
        >
          {this.state.error ? (
            <Form.Text className="text-danger ">
              Username/Password combination not found. <br />
              <strong>Please review your credentials:</strong>
            </Form.Text>
          ) : (
            <Form.Text>Enter your login Information:</Form.Text>
          )}
          <Form.Group controlId="username">
            <Row>
              <Form.Label column sm={2}>
                E-mail:
              </Form.Label>
              <Col>
                <Form.Control
                  as={Cleave}
                  name="username"
                  type="email"
                  placeholder="somebody@somewhere.com"
                  required
                  options={{ lowercase: true }}
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group controlId="password">
            <Row>
              <Form.Label column sm={2}>
                Password:
              </Form.Label>
              <Col>
                <Form.Control
                  as={Cleave}
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                />
              </Col>
            </Row>
          </Form.Group>
          <Button variant="light" type="submit" className="ml-auto">
            Login
          </Button>
        </Form>
      </Container>
    )
  }
}
export default LoginForm
