import React from 'react'
import { object, string } from 'prop-types'
import { Global } from '@emotion/react'
import styled from '@emotion/styled'
import styles, { backgroundImagesStyles } from './TechStack.styles'
import { L10nConsumer } from '../../../utils/l10nProvider'
import Grid from '../../ui-kit/core-design/Grid'
import Heading from '../../ui-kit/core-design/Heading'
import Text from '../../ui-kit/core-design/Text'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const TechStack = ({
  className,
  id,
  content: {
    heading,
    techList,
    numericData: { duration, projectTeam },
  },
  l10n: { translations },
}) => {
  return (
    <section className={className} data-testid="Project:block:teachStack">
      <Global styles={backgroundImagesStyles} />

      <Grid as="div" id={id}>
        <Heading.H2
          type="slab"
          size="m"
          dangerouslySetInnerHTML={{ __html: heading(translations) }}
          className="heading"
        />

        <ul className="tech-list">
          {techList.map(({ name }) => (
            <li className="tech-item" key={name}>
              <Text
                type="strong"
                size="m"
                as="span"
                dangerouslySetInnerHTML={{ __html: name(translations) }}
              />
            </li>
          ))}
        </ul>

        <div className="duration">
          <Text
            className="number duration-number"
            type="strong"
            as="span"
            dangerouslySetInnerHTML={{ __html: duration.number(translations) }}
          />

          <Text
            className="text"
            type="strong"
            size="m"
            as="span"
            dangerouslySetInnerHTML={{ __html: duration.text(translations) }}
          />
        </div>

        <div className="team">
          <Text
            className="number team-number"
            type="strong"
            as="span"
            dangerouslySetInnerHTML={{ __html: projectTeam.number(translations) }}
          />

          <Text
            className="text"
            type="strong"
            size="m"
            as="span"
            dangerouslySetInnerHTML={{ __html: projectTeam.text(translations) }}
          />
        </div>
      </Grid>
    </section>
  )
}

TechStack.propTypes = {
  className: string,
  id: string,
  content: object,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(TechStack)`
    ${styles}
  `),
)
