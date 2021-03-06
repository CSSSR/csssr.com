import { isProduction } from '../utils/app-environment'

export default (language) => {
  if (!isProduction) {
    return 'GTM-W23KLZB'
  }
  if (language === 'en') {
    return 'GTM-TDG7X5G'
  }
  return 'GTM-K67FHB5'
}
