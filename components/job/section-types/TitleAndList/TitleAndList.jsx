import React, { Fragment } from 'react'
import { arrayOf, string } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './TitleAndList.styles'
import formatText from '../../../../utils/formatText'

const TitleAndList = ({ className, list, title, isChild }) => {
  const Header = isChild ? 'h3' : 'h2'

  return (
    <Fragment>
      <Header
        className={cn(isChild ? 'font_h3-regular' : 'font_h2-regular', className)}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <ul className="have-square-bullets" data-testid="Jobs:block:list">
        {list.map((item, index) => (
          <li
            className="font_p16-regular"
            key={index}
            dangerouslySetInnerHTML={{ __html: formatText(item) }}
          />
        ))}
      </ul>
    </Fragment>
  )
}

TitleAndList.propTypes = {
  title: string,
  list: arrayOf(string),
}

export default styled(TitleAndList)`
  ${styles}
`
