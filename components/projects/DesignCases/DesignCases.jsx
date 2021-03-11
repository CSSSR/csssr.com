import React from 'react'
import { object, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './DesignCases.styles'
import Grid from '../../ui-kit/core-design/Grid'
import ButtonLink from '../../ui-kit/core-design/ButtonLink'
import Case from './Case'
import Heading from '../../ui-kit/core-design/Heading'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import { L10nConsumer } from '../../../utils/l10nProvider'
import { DeviceConsumer } from '../../../utils/deviceProvider'

const DesignCases = ({
  className,
  content: { heading, buttonTitle, buttonHref, cases },
  l10n: { translations },
}) => {
  return (
    <Grid className={className} as="section" data-testid="Projects:block:designCases">
      <Heading.H2
        type="slab"
        size="m"
        dangerouslySetInnerHTML={{ __html: heading(translations) }}
        className="heading"
      />
      <Grid as="div" className="cases-wrapper">
        {cases.map((content, index) => (
          <Case key={index} content={content} />
        ))}
      </Grid>

      <ButtonLink
        href={buttonHref(translations)}
        kind="third"
        className="button"
        dangerouslySetInnerHTML={{ __html: buttonTitle(translations) }}
        data-testid="Projects:link.designCases"
      />
    </Grid>
  )
}

DesignCases.propTypes = {
  className: string,
  content: object,
}

export default L10nConsumer(
  DeviceConsumer(
    MsBrowserConsumer(styled(DesignCases)`
      ${styles}
    `),
  ),
)
