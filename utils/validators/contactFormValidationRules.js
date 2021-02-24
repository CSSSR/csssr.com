import { composeValidators, email, required } from '../../utils/validators/index'

export default (translations) => (values) => ({
  company: required(translations)(values.company),
  email: composeValidators(required(translations), email(translations))(values.email),
})
