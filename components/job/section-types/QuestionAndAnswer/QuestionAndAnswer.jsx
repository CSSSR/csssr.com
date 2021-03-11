import React from 'react'
import { number, string } from 'prop-types'
import { Field } from 'react-final-form'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './QuestionAndAnswer.styles'
import { L10nConsumer } from '../../../../utils/l10nProvider'
import TextareaField from '../../../ui-kit/TextareaField/TextareaField'
import TextField from '../../../ui-kit/TextField/TextField'
import FormRow from '../../FormRow'
import formatText from '../../../../utils/formatText'
import interpolate from '../../../../utils/interpolate'

const renderTime = (time, translations, language, isVisibleOnMobile) => {
  return (
    <div
      className={cn({
        wrapper: true,
        'wrapper_mobile-only': isVisibleOnMobile,
      })}
    >
      <div className="font_subhead-regular value">
        {interpolate(translations.job.minutes, time, language)}
      </div>
      <div className="font_p16-regular hint">{translations.job.willBeRequired}</div>
    </div>
  )
}

const QuestionAndAnswer = ({
  className,
  linkText,
  taskLink,
  taskText,
  time,
  title,
  inputIndex,
  l10n: { translations, language },
}) => (
  <FormRow className={className} rightSideContent={renderTime(time, translations, language, false)}>
    <h3 className="font_h3-regular">{title}</h3>
    <div className="link-wrapper">
      <a
        className="font_link-list_16"
        href={taskLink}
        target="_blank"
        rel="noopener nofollow"
        data-testid="Jobs:link:quest"
      >
        {taskLink}
      </a>
    </div>
    {taskText.split('\n').map((taskTextString, index) => (
      <p
        key={index}
        className="font_p16-regular"
        dangerouslySetInnerHTML={{ __html: formatText(taskTextString) }}
      />
    ))}
    {renderTime(time, translations, language, true)}
    <Field
      name={`quests[${inputIndex}].text`}
      component={TextareaField}
      kind="regular"
      testId="Jobs:field:quest.textarea"
      label={translations.job.annotation}
    />
    <Field
      name={`quests[${inputIndex}].link`}
      component={TextField}
      kind="regular"
      testId="Jobs:field:quest.input"
      label={linkText}
    />
  </FormRow>
)

QuestionAndAnswer.propTypes = {
  index: number,
  linkText: string,
  taskLink: string,
  taskText: string,
  time: number,
  title: string,
}

export default styled(L10nConsumer(QuestionAndAnswer))`
  ${styles}
`
