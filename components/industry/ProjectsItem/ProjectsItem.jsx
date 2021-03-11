import React from 'react'
import { array, object, string } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles from './ProjectsItem.styles'
import Text from '../../ui-kit/core-design/Text'
import Heading from '../../ui-kit/core-design/Heading'
import Link from '../../ui-kit/core-design/Link'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import { DeviceConsumer } from '../../../utils/deviceProvider'
import { L10nConsumer } from '../../../utils/l10nProvider'

const ProjectsItem = ({
  className,
  images,
  imgAlt,
  link,
  heading,
  teamNumber,
  projectDuration,
  itemClassName,
  l10n: { translations, language },
}) => {
  return (
    <div className={cn(itemClassName, className)}>
      <Link
        className="project-link"
        href={`/${language}/project/${link}`}
        data-testid={`Cases:link:${link}`}
      >
        <div className={`picture-wrapper picture-wrapper_${imgAlt}`}>
          <PictureSmart
            requireImages={images}
            alt={imgAlt}
            className={`image image_${imgAlt}`}
            loading="lazy"
          />
        </div>
        <Heading.H2
          type="regular"
          size="m"
          dangerouslySetInnerHTML={{ __html: heading(translations) }}
          className="item-heading"
        />
        <div className="numbers-wrapper">
          <Text
            type="strong"
            dangerouslySetInnerHTML={{ __html: teamNumber(translations) }}
            className="team"
            size="m"
          />
          <Text
            type="strong"
            dangerouslySetInnerHTML={{ __html: '•' }}
            className="separator"
            size="m"
          />
          <Text
            type="strong"
            dangerouslySetInnerHTML={{ __html: projectDuration(translations) }}
            className="duration"
            size="m"
          />
        </div>
      </Link>
    </div>
  )
}

ProjectsItem.propTypes = {
  className: string,
  content: object,
  factItems: array,
}

export default L10nConsumer(
  DeviceConsumer(
    MsBrowserConsumer(styled(ProjectsItem)`
      ${styles}
    `),
  ),
)
