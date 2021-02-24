import ErrorPage from '../../components/error/ErrorPage'
import React from 'react'
import { L10nConsumer } from '../../utils/l10nProvider'

class MyError extends React.Component {
  static getInitialProps({ res }) {
    const l10n = res ? res.locals.l10n : window.__NEXT_DATA__.props.pageProps.l10n
    return { statusCode: 500, l10n }
  }

  render() {
    return <ErrorPage {...this.props} />
  }
}

export default L10nConsumer(MyError)
