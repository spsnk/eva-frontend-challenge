import React from "react"
import { Link } from "gatsby"
import { Container, Accordion, Button } from "react-bootstrap"
import Layout from "../components/layout"
import Result from "../components/result"

/**
 * Reports view using a bootstrap accordion to display the list when the user has logged in.
 * Displays a message indicating the user should login if they hasnt.
 * @component
 * @prop {Object} location.state.data Received prop from gatsby Navigation page, should contain property reports
 * @prop {Array} location.state.data.reports Array of reports, its sorted by date upon update and used to render the <Result /> component.
 */

class Reports extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      logged_in: this.props.location.state ? true : false,
    }
  }
  render() {
    let reports
    if (this.state.logged_in) {
      reports = this.props.location.state.data.reports
      reports.sort((a, b) => (a.datetime > b.datetime ? -1 : 1))
    } else {
      reports = []
    }
    console.log()
    return (
      <Layout>
        <Container>
          {!this.state.logged_in ? (
            <Container className="mx-auto my-3 d-flex flex-column">
            <p className="mx-auto my-5 "> <strong>You are not logged in.</strong> </p> 
              <p className="mx-auto"> To continue click here: </p> 
              <div className="mx-auto "><Button as={Link} variant="light" to="/">Login here</Button></div>
            </Container>
          ) : (
            <>
            <Container className="d-flex flex-column mt-3">
              <p className="mx-auto">Here is the list of all your reports we have on file. To view the results of each report click on its date.</p>
            </Container>
            <Accordion>
              {reports.map((report, key) => (
                <Result
                  datetime={report.datetime}
                  result={report.result}
                  id={key}
                  key={key}
                />
              ))}
            </Accordion>
            </>
          )}
        </Container>
      </Layout>
    )
  }
}

export default Reports
