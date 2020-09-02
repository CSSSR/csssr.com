import React, { useContext } from 'react'
import Fade from 'react-reveal/Fade'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import CalendlyBookingButton from './CalendlyBookingButton'
import styles from './BookACall.styles'

import { L10nConsumer } from '../../../../utils/l10nProvider'
import { TypeInquiryContext } from '../../../../utils/typeInquiryContext'
import setBookingPossibility from '../../../../utils/setBookingPossibility'
import getProfileId from '../../../../utils/getProfileId'
import { MapContext } from '../../../../utils/mapContext'

import profiles from '../../../../data/contact-us/profiles'

const BookACall = ({ className, l10n: { translations, language }, testId }) => {
  const { inquiryTypeId } = useContext(TypeInquiryContext)
  const { activeAddressId } = useContext(MapContext)
  const profileId = getProfileId(inquiryTypeId, activeAddressId, language)
  const canBookACall = setBookingPossibility(inquiryTypeId, activeAddressId, language, profileId)

  return (
    <Fade right={true} duration={200} distance="40px" key={profileId + canBookACall}>
      <figure className={className}>
        <PictureSmart
          className="manager-avatar"
          requireImages={profiles[profileId].images}
          alt={translations.contactUs.bookACall.profiles[profileId].alt}
          testid="contactUs:picture:bookACall.avatar"
        />

        <figcaption className="manager">
          <div className="manager-name" data-testid="contactUs:text:bookACall:name">
            {translations.contactUs.bookACall.profiles[profileId].name}
          </div>

          <div className="manager-position" data-testid="contactUs:text:bookACall:position">
            {translations.contactUs.bookACall.profiles[profileId].position}
          </div>

          <a href={`mailto:${profiles[profileId].email}`} className="email" data-testid={testId}>
            {profiles[profileId].email}
          </a>
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
  testId: string.isRequired,
}

export default L10nConsumer(styled(BookACall)`
  ${styles}
`)
