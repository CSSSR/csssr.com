import React from 'react'
import { arrayOf, bool, func, shape, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './ButtonSelectLinksDefault.styles'
import translate from '../../../../utils/translate-wrapper'
import { ReactComponent as Email } from '../../../../static/icons/email.svg'
import { ReactComponent as Telegram } from '../../../../static/icons/telegram.svg'
import { ReactComponent as Messenger } from '../../../../static/icons/messenger.svg'

const iconsByLabel = {
  Email: <Email />,
  Telegram: <Telegram />,
  Messenger: <Messenger />,
}

const ButtonSelectLinksDefault = (props) => {
  const handleLinkClick = (dataLayerEvent) => () => {
    props.onLinkClick(dataLayerEvent)
  }

  return props.links.map(({ label, localeLink, href, external, dataLayerEvent, testid }) => (
    <li className={props.className} key={label}>
      <a
        href={href}
        onClick={handleLinkClick(dataLayerEvent)}
        target={external ? '_blank' : null}
        rel="noopener"
        data-testid={testid}
      >
        {iconsByLabel[label]}
        <span>{props.t(localeLink)}</span>
      </a>
    </li>
  ))
}

ButtonSelectLinksDefault.propTypes = {
  onLinkClick: func,
  t: func,
  links: arrayOf(
    shape({
      label: string,
      localeLink: string,
      href: string,
      external: bool,
      dataLayerEvent: string,
    }),
  ),
}

export default styled(translate(ButtonSelectLinksDefault))`
  ${styles}
`
