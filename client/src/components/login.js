import React from "react"
import Cleave from "cleave.js/react"
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  Modal,
  ProgressBar,
  Overlay,
  Popover,
} from "react-bootstrap"
import axios from "axios"

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fileprogress: 0,
      loaded: false,
      showModal: false,
      validated: false,
      showcatpchatip: false,
      response: { message: "Uploading files..." },
    }
    this.formref = React.createRef()
    //this.captcha = React.createRef()
    //require("cleave.js/dist/addons/cleave-phone.id")
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({
      showModal: true,
      validated: false,
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
          fileprogress: 100,
          loaded: true,
          response: res.data,
        })
        console.log(res.data)
      })
      .catch(error => {
        if (error.response) {
          this.setState({
            error,
            response: error.response.data,
            loaded: true,
            fileprogress: 0,
          })
        } else {
          this.setState({
            error,
            response: { message: "Error: " + error.message },
            loaded: true,
            fileprogress: 0,
          })
        }
      })
  }

  render() {
    return (
      <Container>
        <Form
          onSubmit={this.handleSubmit.bind(this)}
          ref={el => (this.formref = el)}
          className="mb-5 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <Form.Text>Login Information:</Form.Text>
          <Form.Group controlId="username">
            <Row>
              <Form.Label column sm={2}>
                E-mail
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
                Password
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

          <Form.Group>
            <Row className="justify-content-md-center">
              <Col>
                <Button variant="light" type="submit">
                  Login
                </Button>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </Container>
    )
  }
}
export default LoginForm
