import React, { Fragment } from 'react'
import { array, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Quest.styles'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'
import FormRow from '../../FormRow'
import Section from '../../Section'

const renderFileInfo = (fileSize, fileExt, fileName, fileLink) => (
  <Fragment>
    <div className="icon-wrapper">
      <img
        src={require(`../../../../static/icons/${fileExt.toLowerCase()}.svg`).default}
        alt={`${fileExt} file extension logo`}
      />
    </div>

    <div className="file-info">
      <a
        className="font_link-list_16"
        href={fileLink}
        target="_blank"
        rel="noopener nofollow"
        data-testid="Jobs:link:quest"
      >
        {fileName}
      </a>
      <span className="font_perforator-10-regular" dangerouslySetInnerHTML={{ __html: fileSize }} />
    </div>
  </Fragment>
)

const Quest = ({ className, fileSize, fileExt, fileName, fileLink, text, title, sections }) => (
  <Fragment>
    <FormRow
      className={className}
      rightSideContent={renderFileInfo(fileSize, fileExt, fileName, fileLink)}
    >
      <h2 className="font_h2-regular" dangerouslySetInnerHTML={{ __html: title }} />
      <p className="font_p16-regular" dangerouslySetInnerHTML={{ __html: text }} />
    </FormRow>

    {sections.map((section, index) => (
      <Section key={index} {...section} asRow isChild />
    ))}
  </Fragment>
)

Quest.propTypes = {
  fileSize: string,
  fileExt: string,
  fileName: string,
  fileLink: string,
  text: string,
  title: string,
  sections: array,
}

export default MsBrowserConsumer(styled(Quest)`
  ${styles}
`)
