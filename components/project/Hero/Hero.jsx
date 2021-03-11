import React from 'react'
import { object, string } from 'prop-types'
import cn from 'classnames'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import styled from '@emotion/styled'
import { Global } from '@emotion/react'
import styles, { backgroundImagesStyles } from './Hero.styles'

import Grid from '../../ui-kit/core-design/Grid'
import Heading from '../../ui-kit/core-design/Heading'
import Link from '../../ui-kit/core-design/Link'
import Text from '../../ui-kit/core-design/Text'

import { L10nConsumer } from '../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const Hero = ({
  className,
  id,
  projectId,
  content: { tag, heading, link, subHeading, text, images, imgAlt },
  l10n: { translations, language },
}) => {
  return (
    <section
      className={cn(className, `_${projectId}`, `_${language}`, {
        _gazpromNeft: projectId === 'gazpromNeft',
      })}
      id={id}
      data-testid="Project:block:hero"
    >
      <Grid
        className={cn('grid', {
          grid_gazpromNeft: projectId === 'gazpromNeft',
        })}
        as="div"
      >
        {projectId === 'gazpromNeft' && <span className="project-case">{tag(translations)}</span>}
        <Heading.H1
          type="slab"
          size="l"
          dangerouslySetInnerHTML={{ __html: heading(translations) }}
          className={cn('heading', {
            heading_gazprom: projectId === 'gazpromNeft',
            heading_is_wider: projectId === 'gazpromNeft' && language === 'ru',
          })}
        />

        {link && (
          <Link
            className="link"
            href={link(translations)}
            type="list"
            target="_blank"
            rel="noreferrer noopener"
            dangerouslySetInnerHTML={{ __html: link(translations) }}
            data-testid="Project:link.project-site"
          />
        )}

        {subHeading && (
          <Heading.H2
            type="slab"
            size="m"
            dangerouslySetInnerHTML={{ __html: subHeading(translations) }}
            className="sub-heading"
          />
        )}

        <div
          className={cn('text', {
            text_gazpromNeft: projectId === 'gazpromNeft',
          })}
        >
          {text.map((item, index) => (
            <Text
              key={`paragraph-${index}`}
              type="strong"
              size="m"
              as="p"
              dangerouslySetInnerHTML={{ __html: item(translations) }}
              className={`paragraph paragraph_${index}`}
            />
          ))}
        </div>

        <div className={cn('pic-wrapper', `pic-wrapper_${projectId}`)}>
          <PictureSmart requireImages={images} alt={imgAlt(translations)} className="image" />
        </div>
      </Grid>
      <Global styles={backgroundImagesStyles(className)} />
    </section>
  )
}

Hero.propTypes = {
  className: string,
  id: string,
  content: object,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(Hero)`
    ${styles}
  `),
)
