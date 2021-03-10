import React, { useState } from 'react'
import { string, bool, func } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Tags.styles'
import Tag from './Tag'
import { L10nConsumer } from '../../../utils/l10nProvider'
import data from '../../../data/contact-form/tags'

let tagList = []

const Tags = ({ className, l10n: { language }, tagValidationError, getTagListStatus }) => {
  const [activeGroup, setActiveGroup] = useState('')
  const [isTagListEmpty, setIsTagListEmpty] = useState(true)
  const tagsData = language === 'ru' ? data.tagsRu : data.tagsEn

  const updateTagList = (tagId, groupName) => {
    setActiveGroup(groupName)
    if (tagList.includes(tagId)) {
      tagList = tagList.filter((tag) => tag !== tagId)
      if (tagList.length === 0) {
        setActiveGroup('')
        setIsTagListEmpty(true)
        getTagListStatus(false)
      }
    } else {
      tagList.push(tagId)
      setIsTagListEmpty(false)
      getTagListStatus(true)
    }
  }

  const resetTagList = () => {
    tagList = []
    setActiveGroup('')
    setIsTagListEmpty(true)
    getTagListStatus(false)
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

        {tagValidationError && isTagListEmpty && (
          <span className="error-message">Выберите тип заявки</span>
        )}
      </div>
    </div>
  )
}

Tags.propTypes = {
  status: string,
  tagValidationError: bool,
  getTagListStatus: func,
}

export default styled(L10nConsumer(Tags))`
  ${styles}
`
