import React from 'react'
import cn from 'classnames'
import { array, string, func } from 'prop-types'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import styled from '@emotion/styled'
import styles from './AboutProject.styles'

import Heading from '../../ui-kit/core-design/Heading'
import Text from '../../ui-kit/core-design/Text'
import Grid from '../../ui-kit/core-design/Grid'

import { L10nConsumer } from '../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const AboutProject = ({
  className,
  projectId,
  paragraphsScheme,
  images,
  l10n: { translations },
}) => (
  <Grid as="section" className={className} data-testid="Project:block:aboutProject">
    <Heading
      className="title"
      as="span"
      type="slab"
      size="m"
      dangerouslySetInnerHTML={{ __html: translations.project[projectId].aboutProject.title }}
    />

    {paragraphsScheme.map(
      (paragraphsGroup, paragraphsGroupId) =>
        paragraphsGroup &&
        (projectId === 'mindbox' ? (
          <Grid
            as="div"
            key={paragraphsGroupId}
            className={cn(
              'paragraphs-group',
              `paragraphs-group_${paragraphsGroupId}`,
              `paragraphs-group_${projectId}`,
            )}
          >
            {paragraphsGroup.map((paragrapId) => (
              <Text
                key={paragrapId}
                className="paragraph"
                as="p"
                type={paragraphsGroupId === 0 ? 'regular' : 'strong'}
                size="m"
                dangerouslySetInnerHTML={{
                  __html:
                    translations.project[projectId].aboutProject.text[paragraphsGroupId][
                      paragrapId
                    ],
                }}
              />
            ))}
          </Grid>
        ) : (
          <div
            key={paragraphsGroupId}
            className={cn(
              'paragraphs-group',
              `paragraphs-group_${paragraphsGroupId}`,
              `paragraphs-group_${projectId}`,
            )}
          >
            {paragraphsGroup.map((paragrapId) => (
              <Text
                key={paragrapId}
                className="paragraph"
                as="p"
                type={paragraphsGroupId === 0 ? 'regular' : 'strong'}
                size="m"
                dangerouslySetInnerHTML={{
                  __html:
                    translations.project[projectId].aboutProject.text[paragraphsGroupId][
                      paragrapId
                    ],
                }}
              />
            ))}
          </div>
        )),
    )}

    <PictureSmart
      className="picture"
      requireImages={images}
      alt={translations.project.aboutProjectImageAlt}
    />
  </Grid>
)

AboutProject.propTypes = {
  className: string,
  projectId: string,
  paragraphsScheme: array,
  images: func,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(AboutProject)`
    ${styles}
  `),
)
