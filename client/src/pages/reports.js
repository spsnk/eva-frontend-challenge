import React from "react"
import { Link } from "gatsby"
import { Container, Accordion } from "react-bootstrap"
import Layout from "../components/layout"
import Result from "../components/result"

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
            <div>
              You are not logged in. <br /> Please{" "}
              <Link to="/">Login here</Link>.
            </div>
          ) : (
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
          )}
        </Container>
      </Layout>
    )
  }
}

export default Reports
