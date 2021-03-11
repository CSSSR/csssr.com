import React, { Fragment, PureComponent } from 'react'
import { L10nConsumer } from '../../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'
import Toggler from './Toggler'
import Grid from '../../../ui-kit/core-design/Grid'
import Heading from '../../../ui-kit/core-design/Heading'
import Text from '../../../ui-kit/core-design/Text'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import styled from '@emotion/styled'
import styles from './AboutMvp.styles'
import cn from 'classnames'

import { mvpOffImages, mvpOnImages } from '../../../../data/service/mvp/aboutMvp'

class AboutMvp extends PureComponent {
  state = {
    togglerIndex: 1,
  }
  render() {
    const {
      className,
      l10n: { translations },
    } = this.props
    const { togglerIndex } = this.state

    return (
      <Fragment>
        <article className={className} id="advantages" data-testid="MVP:block:about">
          <Grid as="div">
            <Heading
              as="h2"
              className="title"
              dangerouslySetInnerHTML={{ __html: translations.mvp.aboutMvp.title }}
              type="slab"
              size="m"
            />

            <Toggler
              className="toggler"
              activeIndex={togglerIndex}
              items={[translations.mvp.aboutMvp.togglerOff, translations.mvp.aboutMvp.togglerOn]}
              onChange={(index) => this.setState({ togglerIndex: index })}
            />

            <div className="description-wrapper">
              <Text
                className={cn('description', { description_visible: togglerIndex === 1 })}
                as="p"
                type="strong"
                size="m"
                dangerouslySetInnerHTML={{ __html: translations.mvp.aboutMvp.descriptionOn }}
                data-testid={
                  togglerIndex === 1 ? 'MVP:text:aboutMvp.on' : 'MVP:picture:aboutMvp.off'
                }
              />

              <Text
                className={cn('description', { description_visible: togglerIndex === 0 })}
                as="p"
                type="strong"
                size="m"
                dangerouslySetInnerHTML={{ __html: translations.mvp.aboutMvp.descriptionOff }}
                data-testid={
                  togglerIndex === 0 ? 'MVP:text:aboutMvp.on' : 'MVP:picture:aboutMvp.off'
                }
              />
            </div>
          </Grid>

          <div
            className={cn('picture-wrapper', {
              'picture-wrapper_with_bg': togglerIndex === 1,
            })}
          >
            <PictureSmart
              className={cn('picture', { picture_visible: togglerIndex === 1 })}
              requireImages={mvpOnImages}
              alt={translations.mvp.imgAlt.mvpOn}
              testId={togglerIndex === 1 ? 'MVP:picture:aboutMvp.on' : 'MVP:picture:aboutMvp.off'}
              loading="lazy"
            />

            <PictureSmart
              className={cn('picture', { picture_visible: togglerIndex === 0 })}
              requireImages={mvpOffImages}
              alt={translations.mvp.imgAlt.mvpOff}
              testId={togglerIndex === 0 ? 'MVP:picture:aboutMvp.on' : 'MVP:picture:aboutMvp.off'}
              loading="lazy"
            />
          </div>
        </article>
      </Fragment>
    )
  }
}

export default L10nConsumer(
  MsBrowserConsumer(styled(AboutMvp)`
    ${styles}
  `),
)
