import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'

import Grid from '../../ui-kit/core-design/Grid'
import Heading from '../../ui-kit/core-design/Heading'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

import styles from './Greeting.styles'

const Greeting = ({ className, id, title }) => (
  <section className={className} id={id} data-testid="WayOfWork:block:greeting">
    <Grid>
      <Heading.H1
        type="slab"
        size="l"
        dangerouslySetInnerHTML={{ __html: title }}
        className="heading"
      />
    </Grid>
  </section>
)

Greeting.propTypes = {
  className: string,
  title: string,
  id: string,
}

export default MsBrowserConsumer(styled(Greeting)`
  ${styles}
`)
