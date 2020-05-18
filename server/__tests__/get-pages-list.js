import { parsePagePath } from '../get-pages-list'

test('test', () => {
  const pages = [
    'en/cookies-policy.js',
    'en/core-values.js',
    'en/index.js',
    'en/privacy-policy.js',
    'en/tech-stack.js',
    'en/way-of-work.js',
    'ru/core-values.js',
    'ru/index.js',
    'ru/jobs-faq.js',
    'ru/privacy-policy.js',
    'ru/tech-stack.js',
    'ru/way-of-work.js',
    'ru-ee/job.js',
    'ru-ee/jobs.js',
    'ru-ru/job.js',
    'ru-ru/jobs.js',
    'en-ee/job.js',
    'en-ee/jobs.js',
    'en-sg/job.js',
    'en-sg/jobs.js',
    'en-us/job.js',
    'en-us/jobs.js',
    'en/service/express-front-end.js',
    'en/service/mvp-development.js',
    'en/service/outsourcing-front-end.js',
    'en/service/back-end-and-devops.js',
    'en/industry/ecommerce.js',
    'en/industry/fintech.js',
    'en/industry/information-technology.js',
    'en/industry/media-and-marketing.js',
    'ru/industry/ecommerce.js',
    'ru/industry/fintech.js',
    'ru/industry/information-technology.js',
    'ru/industry/media-and-marketing.js',
    'en/project/s7-personal-account.js',
    'en/project/gazprom-neft-professionals-4-0.js',
    'ru/project/s7-personal-account.js',
    'ru/project/gazprom-neft-professionals-4-0.js',
    'ru/service/mvp-development.js',
    'ru/service/outsourcing-front-end.js',
    'ru/service/back-end-and-devops.js',
  ]

  expect(pages.map(parsePagePath)).toEqual([
    { language: 'en', pathname: 'cookies-policy' },
    { language: 'en', pathname: 'core-values' },
    { language: 'en', pathname: 'index' },
    { language: 'en', pathname: 'privacy-policy' },
    { language: 'en', pathname: 'tech-stack' },
    { language: 'en', pathname: 'way-of-work' },
    { language: 'ru', pathname: 'core-values' },
    { language: 'ru', pathname: 'index' },
    { language: 'ru', pathname: 'jobs-faq' },
    { language: 'ru', pathname: 'privacy-policy' },
    { language: 'ru', pathname: 'tech-stack' },
    { language: 'ru', pathname: 'way-of-work' },
    { language: 'ru', pathname: 'job' },
    { language: 'ru', pathname: 'jobs' },
    { language: 'ru', pathname: 'job' },
    { language: 'ru', pathname: 'jobs' },
    { language: 'en', pathname: 'job' },
    { language: 'en', pathname: 'jobs' },
    { language: 'en', pathname: 'job' },
    { language: 'en', pathname: 'jobs' },
    { language: 'en', pathname: 'job' },
    { language: 'en', pathname: 'jobs' },
    { language: 'en', pathname: 'service/express-front-end' },
    { language: 'en', pathname: 'service/mvp-development' },
    { language: 'en', pathname: 'service/outsourcing-front-end' },
    { language: 'en', pathname: 'service/back-end-and-devops' },
    { language: 'en', pathname: 'industry/ecommerce' },
    { language: 'en', pathname: 'industry/fintech' },
    { language: 'en', pathname: 'industry/information-technology' },
    { language: 'en', pathname: 'industry/media-and-marketing' },
    { language: 'ru', pathname: 'industry/ecommerce' },
    { language: 'ru', pathname: 'industry/fintech' },
    { language: 'ru', pathname: 'industry/information-technology' },
    { language: 'ru', pathname: 'industry/media-and-marketing' },
    { language: 'en', pathname: 'project/s7-personal-account' },
    { language: 'en', pathname: 'project/gazprom-neft-professionals-4-0' },
    { language: 'ru', pathname: 'project/s7-personal-account' },
    { language: 'ru', pathname: 'project/gazprom-neft-professionals-4-0' },
    { language: 'ru', pathname: 'service/mvp-development' },
    { language: 'ru', pathname: 'service/outsourcing-front-end' },
    { language: 'ru', pathname: 'service/back-end-and-devops' },
  ])
})
