import React, { Fragment } from 'react'
import { Field } from 'react-final-form'
import styled from '@emotion/styled'
import styles, {
  stylesForCheckboxField,
  stylesForFileField,
  stylesForFirstHalfWidthField,
  stylesForFullWidthField,
  stylesForSecondHalfWidthField,
  stylesForTextareaField,
} from './CandidateInfoSection.styles'
import { css } from '@emotion/core'
import { L10nConsumer } from '../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import ContactOptions from '../ContactOptions'
import ContactOptionsMobile from '../ContactOptionsMobile'
import TextField from '../../ui-kit/TextField/TextField'
import FileField from '../../ui-kit/FileField/FileField'
import TextareaField from '../../ui-kit/TextareaField/TextareaField'
import PrivacyPolicyCheckbox from '../../PrivacyPolicyCheckbox'
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
      label: translations.job.name,
      css: css`
        ${stylesForFullWidthField}
        ${stylesForFirstHalfWidthField}
      `,
    },
    {
      id: 'lastname',
      label: translations.job.lastname,
      css: css`
        ${stylesForFullWidthField}
        ${stylesForSecondHalfWidthField}
      `,
    },
    {
      id: 'age',
      label: translations.job.age,
      css: css`
        ${stylesForFullWidthField}
      `,
    },
    {
      id: 'location',
      label: translations.job.city,
      css: css`
        ${stylesForFullWidthField}
      `,
    },
    {
      id: 'email',
      label: translations.job.email,
      type: 'email',
      css: css`
        ${stylesForFullWidthField}
      `,
    },
    {
      id: 'resume',
      label: translations.job.resumeLink,
      shouldShow: hasResume,
      css: css`
        ${stylesForFullWidthField}
      `,
    },
    {
      id: 'portfolio',
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

      {commonFieldsData.map(({ id, label, css, type = 'text', shouldShow = true }) =>
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
          />
        ) : null,
      )}

      {hasFile && (
        <Field
          id="file"
          name="file"
          className="seventh-line"
          css={css`
            ${stylesForFileField}
          `}
          label={`${translations.job.testQuest} ${getFileFieldText(translations)(fileExt)}`}
          fileAccept={fileExt}
          component={FileField}
          onFileFieldChange={onFileFieldChange}
        />
      )}

      {props.isMobile && <ContactOptionsMobile connection={connection} />}

      {hasComment && (
        <Fragment>
          <Field
            id="comment"
            name="comment"
            label={translations.job.tellUsMoreAboutYourself}
            className="line-nine"
            css={css`
              ${stylesForTextareaField}
            `}
            component={TextareaField}
            kind="regular"
          />
        </Fragment>
      )}

      <PrivacyPolicyCheckbox
        className="input-checkbox"
        css={css`
          ${stylesForCheckboxField}
        `}
      />
    </Grid>
  )
}

export default L10nConsumer(
  MsBrowserConsumer(styled(CandidateInfoSection)`
    ${styles}
  `),
)
