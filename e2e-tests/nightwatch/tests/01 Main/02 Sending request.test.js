const { contInfo } = require('../actions/contInfo')
const { modalContInfo } = require('../actions/modalContInfo')

// Отправка заявок с русской локали

testcase('Send request from header modal form of RU-locales | Main', () => {
  step('Go to Main page', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(browser.launch_url + '/ru')
  })

  step('Press the button in the header [Нанять нас]', () => {
    browser.click('[data-testid="Header:button.contactUs"]')
  })

  modalContInfo('ru')
})

testcase('Sending request from the form at the end of the page of RU-locales | Main', () => {
  step('Go to the form at the end of the page', () => {
    browser.url(browser.launch_url + '/ru')
  })

  contInfo('ru')
})

// Отправка заявок с английской локали

testcase('Send request from header modal form of EN-locales | Main', () => {
  step('Go to Main page', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(browser.launch_url + '/en')
  })

  step('Press the button in the header [Hire us]', () => {
    browser.click('[data-testid="Header:button.contactUs"]')
  })

  modalContInfo('en')
})

testcase('Sending request from the form at the end of the page of EN-locales | Main', () => {
  step('Go to the form at the end of the page', () => {
    browser.url(browser.launch_url + '/en')
  })

  contInfo('en')
})
