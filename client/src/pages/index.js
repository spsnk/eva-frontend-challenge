import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Form } from "react-bootstrap"
import LoginForm from "../components/login"

const IndexPage = () => (
  <Layout>
    <SEO title="Login" />
    <LoginForm />
  </Layout>
)

export default IndexPage
