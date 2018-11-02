import React from 'react'
import { string, func } from 'prop-types'
import { Field } from 'react-final-form'
import { translate } from 'react-i18next'
import Checkbox from '../components/ui-kit/Checkbox'
import privacyPolicyLinkClick from '../utils/privacyPolicyLinkClick'


function PrivacyPolicyCheckbox({
  id = 'privacyPolicyCheckbox',
  name = 'consents',
  t,
}) {
  return (
    <Field
      id={id}
      name={name}
      value='privacyPolicy'
      type='checkbox'
      component={Checkbox}
    >
      {t('common:checkBoxesText.privacyPolicyText')}
      <a
        href='#privacy-policy'
        onClick={privacyPolicyLinkClick}
      >
        {t('common:checkBoxesText.privacyPolicyLinkText')}
      </a>
    </Field>
  )
}

PrivacyPolicyCheckbox.propTypes = {
  id: string,
  name: string,
  t: func,
}

export default translate()(PrivacyPolicyCheckbox)
