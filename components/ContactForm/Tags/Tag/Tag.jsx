import React, { useState, useEffect } from 'react'
import { bool, func, string } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './Tag.styles'
import { L10nConsumer } from '../../../../utils/l10nProvider'
import Button from '../../../ui-kit/core-design/Button'

const Tag = ({
  className,
  l10n: { translations },
  id,
  title,
  group,
  activeGroup,
  isTagListEmpty,
  updateTagList,
}) => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (isTagListEmpty) {
      setIsActive(false)
    }
  }, [isTagListEmpty])

  const tagClickHandler = () => {
    setIsActive(!isActive)
    updateTagList(id, group)
  }

  return (
    <li className={className}>
      <Button
        className={cn('tag', { 'color-blue': isActive && !isTagListEmpty })}
        disabled={activeGroup && activeGroup !== group}
        kind="secondary"
        data-testid="Tags:button.tag"
        onClick={tagClickHandler}
      >
        {title(translations)}
      </Button>
    </li>
  )
}

Tag.propTypes = {
  id: string,
  title: func,
  group: string,
  activeGroup: string,
  isTagListEmpty: bool,
  updateTagList: func,
}

export default styled(L10nConsumer(Tag))`
  ${styles}
`
