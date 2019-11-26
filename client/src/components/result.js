import React from "react"
import Cleave from "cleave.js/react"
import { Card, Accordion } from "react-bootstrap"
import axios from "axios"

class Result extends React.Component {
  render() {
    return (
      <Card className="element shadow">
        <Accordion.Toggle as={Card.Header} eventKey={this.props.id}>
          Report date:{" "}
          <b>{new Date(this.props.datetime).toLocaleString("es-MX")}</b>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={this.props.id}>
          <Card.Body>
            <Card.Text>
              Result: <strong>{this.props.result}</strong>
            </Card.Text>
            <Card.Text>
              What this means? <br />
              {this.props.result == "Asymmetric"
                ? "There is a discrepancy on the density of your tissue, this is normal in most cases and we need more information to give you an accurate result. Please schedule a follow-up exploration at any of our clinics."
                : "Everything looks normal. Don't forget to check regularly at our clinics."}
            </Card.Text>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    )
  }
}
export default Result
