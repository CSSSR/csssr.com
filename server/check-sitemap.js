const fs = require('fs')
const sitemapUrls = require('./generate-sitemap').sitemapUrls

import { supportedLocales } from '../common/locales-settings'

const pagesUrls = []
const walkSync = (dir) => {
  const files = fs.readdirSync(dir)

  files.forEach((file) => {
    const filePath = `${dir}${file}`
    const fileStat = fs.statSync(filePath)
    const isFileDirectory = fileStat.isDirectory()

    if (isFileDirectory) {
      walkSync(`${filePath}/`)
    } else {
      const url =
        'https://csssr.com/' +
        filePath.substr(0, filePath.lastIndexOf('.')).replace('pages/', '').replace('/index', '')

      const excludedPagesUrls = [
        'https://csssr.com/_app',
        'https://csssr.com/_document',
        'https://csssr.com/_error',
        'https://csssr.com/404',
        'https://csssr.com/ru/404',
        'https://csssr.com/en/404',
        'https://csssr.com/ru/500',
        'https://csssr.com/en/500',
      ].join(supportedLocales.map((locale) => `https://csssr.com/${locale}/job`))

      if (excludedPagesUrls.includes(url)) {
        return
      }

      pagesUrls.push(url)
    }
  })
}

walkSync('pages/')

pagesUrls.some((pageUrl) => {
  if (!sitemapUrls.includes(pageUrl)) {
    throw `
      \x1b[33m
      Страница ${pageUrl} не указана в файле генерации sitemap: ./server/generate-sitemap.js

      Добавьте информацию о ней в объект sitemapUrlsSettings
      или внесите её в список исключений excludedPagesUrls в  ./server/check-sitemap.js
      \x1b[0m
    `
  }
})
