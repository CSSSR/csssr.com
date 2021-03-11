import React from 'react'
import Link from 'next/link'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './Vacancy.styles'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'

const Vacancy = ({ className, locale, vacancy, testid }) => (
  <li className={className}>
    <Link
      href={{ pathname: `/${locale}/job`, query: { jobPathName: vacancy.pathName } }}
      as={`/${locale}/jobs/${vacancy.pathName}`}
    >
      <a
        className={cn('font_link-list_16', {
          'hot-vacancy': vacancy.isHot,
        })}
        data-testid={testid}
      >
        {vacancy.name}
      </a>
    </Link>
  </li>
)

export default MsBrowserConsumer(styled(Vacancy)`
  ${styles}
`)
