import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './ValuesSection.styles'

import DetailValue from '../DetailValue'
import detailValue from '../../../data/core-values/detail-value'

const ValuesSection = ({ className }) => (
  <section className={className} data-testid="CoreValues:block:values">
    {detailValue.map((item) => (
      <DetailValue key={item.title} content={item} />
    ))}
  </section>
)

ValuesSection.propTypes = {
  className: string,
}

export default styled(ValuesSection)`
  ${styles}
`
