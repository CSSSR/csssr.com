import React, { useState, useContext } from 'react'
import Fade from 'react-reveal/Fade'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import Text from '../../../ui-kit/core-design/Text'
import CalendlyBookingButton from './CalendlyBookingButton'
import styles from './BookACall.styles'

import { L10nConsumer } from '../../../../utils/l10nProvider'
import { TypeInquiryContext } from '../../../../utils/typeInquiryContext'
import getProfileId from '../../../../utils/getProfileId'
import setBookingPossibility from '../../../../utils/setBookingPossibility'
import { MapContext } from '../../../../utils/mapContext'

import profiles from '../../../../data/contact-us/profiles'

import { ReactComponent as CopyIcon } from '../../../../static/icons/footer/copy.svg'

const BookACall = ({ className, l10n: { translations, language }, testId }) => {
  const [isMessageShown, setIsMessageShown] = useState(false)
  const { inquiryTypeId } = useContext(TypeInquiryContext)
  const { activeAddressId } = useContext(MapContext)
  const profileId = getProfileId(inquiryTypeId, activeAddressId, language)
  const canBookACall = setBookingPossibility(inquiryTypeId, activeAddressId, language, profileId)

  const copyButtonClickHandler = () => {
    if (window.dataLayer) {
      window.dataLayer.push({ event: 'footer_mail_copy' })
    }
    navigator.clipboard.writeText(profiles[profileId].email)
    setIsMessageShown(true)

    const timer = setTimeout(() => {
      setIsMessageShown(false)
    }, 2000)
    return () => clearTimeout(timer)
  }

  const emailLinkClickHandler = () => {
    if (window.dataLayer) {
      window.dataLayer.push({ event: 'footer_mail_link' })
    }
  }

  return (
    <Fade right={true} duration={200} distance="40px" key={profileId + canBookACall}>
      <figure className={className}>
        <div className="picture-container">
          <PictureSmart
            className="manager-avatar"
            requireImages={profiles[profileId].images}
            alt={translations.contactUs.bookACall.profiles[profileId].alt}
            testid="contactUs:picture:bookACall.avatar"
          />
        </div>

        <figcaption className="manager">
          <div className="manager-name" data-testid="contactUs:text:bookACall:name">
            {translations.contactUs.bookACall.profiles[profileId].name}
          </div>

          <div className="manager-position" data-testid="contactUs:text:bookACall:position">
            {translations.contactUs.bookACall.profiles[profileId].position}
          </div>

          <div className="email-container">
            <div className="email-wrapper">
              <a
                href={`mailto:${profiles[profileId].email}`}
                className="email"
                data-testid={testId}
                onClick={emailLinkClickHandler}
              >
                {profiles[profileId].email}
              </a>

              {isMessageShown && (
                <Text as="span" className="copy-message">
                  {translations.common.footer.copyMessage}
                </Text>
              )}
            </div>

            <button
              className="copy-icon-button"
              type="button"
              disabled={isMessageShown}
              onClick={copyButtonClickHandler}
            >
              <CopyIcon className="copy-icon" />
            </button>
          </div>
        </figcaption>

        {canBookACall && (
          <div className="button-wrap">
            <CalendlyBookingButton
              bookingUrl={`${profiles[profileId]?.calendlyLink}-${language}`}
            />
            <div
              className="communication"
              dangerouslySetInnerHTML={{ __html: translations.contactUs.bookACall.communication }}
            />
          </div>
        )}
      </figure>
    </Fade>
  )
}

BookACall.propTypes = {
  className: string,
  testId: string,
}

export default L10nConsumer(styled(BookACall)`
  ${styles}
`)
