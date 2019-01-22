import React, { Fragment } from 'react'
import { string, func } from 'prop-types'
import { Field } from 'react-final-form'
import { translate } from 'react-i18next'
import Checkbox from '../components/ui-kit/Checkbox'
import privacyPolicyLinkClick from '../utils/privacyPolicyLinkClick'


const PrivacyPolicyCheckbox = ({
  id = 'privacyPolicyCheckbox',
  lng,
  className,
  t,
}) =>
  <Fragment>
    <Field
      id={id}
      name='privacyPolicy'
      className={className}
      type='checkbox'
      showValidationAsWarning
      component={Checkbox}
    >
      {t('common:checkBoxesText.privacyPolicyText')}
      <a
        href={`/${lng}/privacy-policy`}
        target='_blank'
        rel='noopener'
        onClick={privacyPolicyLinkClick}
        className='font_link-list_16'
      >
        {t('common:checkBoxesText.privacyPolicyLinkText')}
      </a>
    </Field><style jsx>{`
      a[target='_blank']::after {
        display: none;
      }

      @media (max-width: 767px) {
        .font_link-list_16 {
          padding-bottom: 0;
          font-size: 0.875rem;
          line-height: 1.5rem;
        }
      }
    `}</style>
  </Fragment>

PrivacyPolicyCheckbox.propTypes = {
  id: string,
  name: string,
  t: func,
}

export default translate()(PrivacyPolicyCheckbox)
