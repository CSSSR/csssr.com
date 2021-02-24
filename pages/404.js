import React from 'react'
import Error404Page from '../components/error/Error404Page'

class Custom404 extends React.Component {
  render() {
    return <Error404Page {...this.props} />
  }
}

export default Custom404
