import React, { Fragment /*useState*/ } from 'react'
import DevTools from '../DevTools'
import { withRouter } from 'next/router'
import { Global } from '@emotion/react'
import { dynamic } from './Layout.styles'
import cn from 'classnames'
import Header from '../Header'
import Footer from '../Footer'
// import DiscountBanner from '../DiscountBanner'

import { MsBrowserConsumer } from '../../utils/msBrowserProvider'
import { L10nConsumer } from '../../utils/l10nProvider'
import CookiesPopup from '../CookiesPopup'

const Layout = ({
  children,
  isIe11,
  pageName,
  l10n: { language },
  router: { asPath },
  withFooter = true,
}) => {
  const dynamicTag = isIe11 ? 'div' : 'main'
  const pathsNoButton = ['jobs']
  const isButtonVisible = !pathsNoButton.some((string) => asPath.indexOf(string) + 1)
  // const [isHidden, setHidden] = useState(true)

  return (
    <Fragment>
      <Header isButtonVisible={isButtonVisible} pageName={pageName} />
      {/* {language === 'en' && (
        <DiscountBanner
          className="discount-banner"
          pageName={pageName}
          isHidden={isHidden}
          setHidden={setHidden}
        />
      )} */}

      {React.createElement(
        dynamicTag,
        {
          id: 'main',
          className: cn('main', {
            main_en: language === 'en',
            // with_padding: !isHidden,
          }),
          'data-testid': 'Main:block',
        },
        children,
      )}

      {withFooter && <Footer />}
      <CookiesPopup />
      <DevTools />

      <Global styles={dynamic} />
    </Fragment>
  )
}

export default L10nConsumer(withRouter(MsBrowserConsumer(Layout)))
