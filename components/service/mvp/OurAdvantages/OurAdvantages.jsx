import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './OurAdvantages.styles'
import { L10nConsumer } from '../../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'

import ourAdvantages from '../../../../data/service/mvp/ourAdvantages'

import Item from './Item'
import Heading from '../../../ui-kit/core-design/Heading'
import Grid from '../../../ui-kit/core-design/Grid'

const OurAdvantages = ({ className, l10n: { translations } }) => (
  <Grid as="section" className={className} data-testid="MVP:block:ourAdvantages">
    <Heading
      className="title"
      as="h2"
      dangerouslySetInnerHTML={{ __html: translations.mvp.ourAdvantages.title }}
      type="slab"
      size="m"
    />

    {ourAdvantages.map((advantagesGroup, advantagesGroupIndex) => (
      <div key={advantagesGroupIndex} className="advantages-group">
        {advantagesGroup.map((advantageItem, advantageItemIndex) => (
          <Item
            key={advantageItemIndex}
            groupId={advantagesGroupIndex}
            itemId={advantageItemIndex}
            images={advantageItem.images}
            link={advantageItem.link}
          />
        ))}
      </div>
    ))}
  </Grid>
)

OurAdvantages.propTypes = {
  className: string,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(OurAdvantages)`
    ${styles}
  `),
)
