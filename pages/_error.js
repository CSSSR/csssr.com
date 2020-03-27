import ErrorPage from '../components/error/ErrorPage'
import React from 'react'
import translate from '../utils/translate-wrapper'

class MyError extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    return <ErrorPage {...this.props} />
  }
}

export default translate(MyError)
