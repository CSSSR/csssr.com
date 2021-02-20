import React, { Fragment } from 'react'
import { Field } from 'react-final-form'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles, {
  stylesForFileField,
  stylesForFirstHalfWidthField,
  stylesForFullWidthField,
  stylesForSecondHalfWidthField,
  stylesForTextareaField,
} from './CandidateInfoSection.styles'
import { css } from '@emotion/react'
import { L10nConsumer } from '../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import ContactOptions from '../ContactOptions'
import ContactOptionsMobile from '../ContactOptionsMobile'
import Checkbox from '../../ui-kit/Checkbox'
import TextField from '../../ui-kit/TextField/TextField'
import FileField from '../../ui-kit/FileField/FileField'
import TextareaField from '../../ui-kit/TextareaField/TextareaField'
import getFileFieldText from '../../../utils/getFileFieldText'
import Grid from '../../ui-kit/core-design/Grid'

const CandidateInfoSection = (props) => {
  const {
    className,
    connection,
    vacancy,
    onFileFieldChange,
    l10n: { translations },
  } = props
  const { hasComment, hasGithub, hasPortfolio, hasResume, hasFile, fileExt } = vacancy
  const commonFieldsData = [
    {
      id: 'firstname',
      required: true,
      label: translations.job.name,
      css: css`
        ${stylesForFullWidthField}
        ${stylesForFirstHalfWidthField}
      `,
    },
    {
      id: 'lastname',
      required: true,
      label: translations.job.lastname,
      css: css`
        ${stylesForFullWidthField}
        ${stylesForSecondHalfWidthField}
      `,
    },
    {
      id: 'location',
      required: true,
      label: translations.job.city,
      css: css`
        ${stylesForFullWidthField}
      `,
    },
    {
      id: 'email',
      required: true,
      label: translations.job.email,
      type: 'email',
      css: css`
        ${stylesForFullWidthField}
      `,
    },
    {
      id: 'portfolio',
      required: true,
      label: translations.job.resumePortfolio,
      shouldShow: hasPortfolio,
      css: css`
        ${stylesForFullWidthField}
      `,
    },
    {
      id: 'github',
      label: translations.job.resumeGithub,
      shouldShow: hasGithub,
      css: css`
        ${stylesForFullWidthField}
      `,
    },
  ]

  return (
    <Grid className={className}>
      <h2 className="font_h2-regular">{translations.job.tellAboutYourself}</h2>

      {!props.isMobile && <ContactOptions connection={connection} />}

      {commonFieldsData.map(({ id, label, css, type = 'text', shouldShow = true, required }) =>
        shouldShow ? (
          <Field
            key={id}
            id={id}
            name={id}
            className={`input-${id}`}
            css={css}
            component={TextField}
            type={type}
            label={label}
            kind="regular"
            aria-required={required}
            required={required}
            testId={`Jobs:form:input.${id}`}
            errorTestid={`Jobs:form:text:error.${id}`}
          />
        ) : null,
      )}

      <p className="text">{translations.common.checkBoxesText.resumeText}</p>

      {hasResume && (
        <Field
          id="resume"
          name="resume"
          className="input-resume"
          component={TextField}
          type="text"
          css={css`
            ${stylesForFullWidthField}
          `}
          label={translations.job.resumeLink}
          kind="regular"
          aria-required="required"
          required="required"
          testId="Jobs:form:input.resue"
          errorTestid="Jobs:form:text:error.resume"
        />
      )}

      <p className="conjunction">{translations.common.checkBoxesText.conjunction}</p>

      {hasFile && (
        <Field
          id="file"
          name="file"
          className="file seventh-line"
          css={css`
            ${stylesForFileField}
          `}
          label={`${translations.job.testQuest} ${getFileFieldText(translations)(fileExt)}`}
          fileAccept={fileExt}
          component={FileField}
          onFileFieldChange={onFileFieldChange}
          aria-required={true}
          testId="Jobs:form:input.file"
          buttunTestId="Jobs:form:button.file"
          labelTestId="Jobs:form:label.file"
          required
        />
      )}

      {props.isMobile && <ContactOptionsMobile connection={connection} />}

      {hasComment && (
        <Fragment>
          <Field
            id="comment"
            name="comment"
            label={translations.job.tellUsMoreAboutYourself}
            className="textarea line-nine"
            css={css`
              ${stylesForTextareaField}
            `}
            component={TextareaField}
            kind="regular"
            testId="Jobs:form:input.comment"
          />
        </Fragment>
      )}

      <div className={cn('field', 'field_type_checkbox', 'news-field')}>
        <Field
          id="newsletter"
          name="newsletter"
          type="checkbox"
          component={Checkbox}
          testId={'CandidateForm:field:callbackForm.newsletter.checkbox'}
          tabIndex="0"
        >
          {translations.common.checkBoxesText.candidateNewsletterText}
        </Field>
      </div>

      <p
        className="policy-text"
        dangerouslySetInnerHTML={{ __html: translations.contactUs.form.policy }}
      />
    </Grid>
  )
}

export default L10nConsumer(
  MsBrowserConsumer(styled(CandidateInfoSection)`
    ${styles}
  `),
)
