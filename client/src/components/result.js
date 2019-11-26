import React from "react"
import { Card, Accordion } from "react-bootstrap"
import PropTypes from "prop-types"

/**
 * Component that returns react code corresponding to a report
 * @component
 * @example
 * datetime = "2019-10-13T02:21:14.321Z"
 * result = 'Asymmetric'
 * id = 0
 * return (
 *  <Result
 *       datetime={datetime}
 *       result={result}
 *       id={id} />
 * )
 * @prop {PropTypes.string} datetime Contains the datetime of the report. Processed to be shown on the user's locale.
 * @prop {PropTypes.string} result Contains the result of the prop, can be either 'Asymmetric' or 'No asymmetric'
 * @prop {PropTypes.number} id contains the id key related to the ordering of the reports.
 */

class Result extends React.Component {
  static propTypes = {
    datetime: PropTypes.string,
    result: PropTypes.string,
    id: PropTypes.number,
  }
  static defaultProps = {
    datetime: new Date(),
    result: [],
    id: 0,
  }
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
