import React, { useState } from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'

import Highlight from './Highlight'
import Observer from './Observer'

import Grid from '../../ui-kit/core-design/Grid'
import Heading from '../../ui-kit/core-design/Heading'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import { L10nConsumer } from '../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

import { list } from '../../../data/way-of-work/transparency'

import styles from './Transparency.styles'

const Transparency = ({ className, id, l10n: { translations } }) => {
  const [activeItem, setActiveItem] = useState('triangle')

  const handleActive = (name) => {
    setActiveItem(name)
  }

  return (
    <section className={className} id={id} data-testid="WayOfWork:block:transparency">
      <Grid>
        <Heading.H2
          type="slab"
          size="m"
          dangerouslySetInnerHTML={{ __html: translations.wayOfWork.transparency.title }}
          className="heading"
        />

        <ul className="list">
          {list.map((item) => (
            <Observer
              key={item.id}
              name={item.id}
              handleActive={handleActive}
              className={cn(`listItem ${item.id}Item`, {
                active: item.id === activeItem,
              })}
            >
              <SubHeading
                type="regular"
                dangerouslySetInnerHTML={{
                  __html: item.label(translations),
                }}
              />
            </Observer>
          ))}
        </ul>

        <div className="figures">
          <Highlight active={activeItem} />
        </div>
      </Grid>
    </section>
  )
}

Transparency.propTypes = {
  className: string,
  id: string,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(Transparency)`
    ${styles}
  `),
)
