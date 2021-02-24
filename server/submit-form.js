import testEmails from '../utils/testEmails'

const Sentry = require('@sentry/node')
const { sales, TEST_TAG } = require('@csssr/csssr-amo')
const { isProduction } = require('../utils/app-environment')
const validateFormFields = require('./validate-form-fields')
const amoSales = sales.init(
  process.env.AMO_CRM_SALES_USER_LOGIN,
  process.env.AMO_CRM_SALES_USER_HASH,
)

module.exports = async (req, res) => {
  const { email, phone, company, message, pageName, newsletter, gacid, language } = req.body

  const validationResult = validateFormFields(res.locals.l10n.translations, 'contactForm', {
    email,
    company,
  })

  if (validationResult.errors) {
    return res.status(400).send({ error: validationResult.errors })
  }

  const tagsArray = ['csssr.com'].concat(pageName)

  if (!isProduction) {
    tagsArray.push(TEST_TAG)
  }

  if (newsletter) {
    tagsArray.push('Подписчик')
  }

  tagsArray.push(language)

  const tags = tagsArray.join(',')

  const { utm_source, utm_medium, utm_campaign, utm_term, utm_content } = req.cookies

  const isTestEmail = testEmails.includes(email)
  try {
    const amoResponse = await amoSales.createLead(isTestEmail ? TEST_TAG : language, {
      tags,
      email,
      phone,
      company,
      message,
      newsletter,
      gacid,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
    })

    console.log(
      'server/submit-form.js SUCCESS',
      JSON.stringify(amoResponse.contact),
      JSON.stringify(amoResponse.lead),
    )

    return res.sendStatus(201)
  } catch (e) {
    console.error('server/submit-form.js ERROR', JSON.stringify(req.body), e)

    Sentry.withScope((scope) => {
      scope.setExtra('reqBody', req.body)
      Sentry.captureException(e)
    })

    return res
      .status(400)
      .send({ error: res.locals.l10n.translations.common.form.message.fail.intro })
  }
}
