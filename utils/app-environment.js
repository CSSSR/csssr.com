const DEVELOPMENT = 'development'
const PRODUCTION = 'production'
// Окружение максимально приближенное к production
const PRODUCTION_LIKE = 'production-like'

// Отличия production от production-like и development:
// - ошибки в sentry отправляются в соответствующие окружения, удобно для фильтрации ошибок только на проде
// - на production используется свой GTM и ga
// - на не production отправляется тег "TEST" в AmoCRM
// - на не production robots.txt запрещает индексацию стенда

// local, yarn dev => 'development'
// local, yarn build => 'production-like'
// staging, yarn build => 'production-like'
// production, yarn build => 'production'
// IS_PRODUCTION === 'TRUE' только на проде
const APP_ENV = process.env.NODE_ENV === DEVELOPMENT ?
  DEVELOPMENT :
  process.env.IS_PRODUCTION === 'TRUE' ?
    PRODUCTION :
    PRODUCTION_LIKE

console.log('ENV', APP_ENV, process.env, process.env.CSSSR_SPACE_ORIGIN, process.env.IS_PRODUCTION, process.env.NODE_ENV)

module.exports = {
  APP_ENV,
  isDevelopment: APP_ENV === DEVELOPMENT,
  isProductionLike: APP_ENV === PRODUCTION_LIKE,
  isProduction: APP_ENV === PRODUCTION,
}
