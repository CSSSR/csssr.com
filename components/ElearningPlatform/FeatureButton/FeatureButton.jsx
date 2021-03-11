import React from 'react'
import cn from 'classnames'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import styled from '@emotion/styled'
import styles from './FeatureButton.styles'

const FeatureButton = ({
  className,
  text,
  d,
  images,
  onClick,
  onMouseOver,
  imageAlt,
  isActive,
  testId,
}) => {
  return (
    <div
      className={cn(className, {
        active: isActive,
      })}
      onClick={onClick}
      onMouseOver={onMouseOver}
      date-testid={testId}
    >
      <PictureSmart className="image" requireImages={images} alt={imageAlt} loading="lazy" />

      <div className="wrapper">
        <p className="font-p-4 title">{text}</p>
        <p className="font-p-2">{d}</p>
      </div>
    </div>
  )
}

export default styled(FeatureButton)`
  ${styles}
`
