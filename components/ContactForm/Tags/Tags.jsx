import React, { useState } from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Tags.styles'
import Tag from './Tag'
import { L10nConsumer } from '../../../utils/l10nProvider'
import data from '../../../data/contact-form/tags'

const Tags = ({ className, l10n: { language } }) => {
  const [tagList, setTagList] = useState([])
  const [activeGroup, setActiveGroup] = useState('')
  const [isTagListEmpty, setIsTagListEmpty] = useState(false)
  const tagsData = language === 'ru' ? data.tagsRu : data.tagsEn

  const updateTagList = (tagId, groupName) => {
    setActiveGroup(groupName)
    if (tagList.includes(tagId)) {
      setTagList(tagList.filter((tag) => tag !== tagId))
      if (tagList.length === 0) {
        setActiveGroup('')
        setIsTagListEmpty(true)
      }
    } else {
      tagList.push(tagId)
      setIsTagListEmpty(false)
    }
  }

  const resetTagList = () => {
    setTagList([])
    setActiveGroup('')
    setIsTagListEmpty(true)
  }

  return (
    <div className={className}>
      <ul className="tag-list tag-list_sales">
        {tagsData.sales.map(({ id, title }) => (
          <Tag
            key={id}
            id={id}
            title={title}
            group="sales"
            activeGroup={activeGroup}
            isTagListEmpty={isTagListEmpty}
            updateTagList={updateTagList}
          />
        ))}
      </ul>

      <div className="tag-wrapper">
        <ul className="tag-list tag-list_hr">
          {tagsData.hr.map(({ id, title }) => (
            <Tag
              key={id}
              id={id}
              title={title}
              group="hr"
              activeGroup={activeGroup}
              isTagListEmpty={isTagListEmpty}
              updateTagList={updateTagList}
            />
          ))}
        </ul>

        {activeGroup && (
          <button
            className="reset-button"
            type="button"
            data-testid="Tags:button.reset"
            onClick={resetTagList}
          >
            Очистить
          </button>
        )}
      </div>
    </div>
  )
}

Tags.propTypes = {
  status: string,
}

export default styled(L10nConsumer(Tags))`
  ${styles}
`
