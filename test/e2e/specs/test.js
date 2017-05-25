// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.hello')
      .assert.elementCount('ul', 1)
      .assert.elementCount('li', 0)
      // ---
      .setValue('input[type=text]', 'nightwatch')
      .assert.value('input[type=text]', 'nightwatch')
      .click('button#add')
      .assert.elementCount('li', 1)
      .assert.containsText('li', 'nightwatch')
      // ---
      .setValue('input[type=text]', 'vue')
      .assert.value('input[type=text]', 'vue')
      .click('button#add')
      .assert.elementCount('li', 2)
      .assert.containsText('li:nth-child(1)', 'nightwatch')
      .assert.containsText('li:nth-child(2)', 'vue')
      // --
      .setValue('input[type=text]', 'vuex')
      .assert.value('input[type=text]', 'vuex')
      .click('button#add')
      .assert.elementCount('li', 3)
      .assert.containsText('li:nth-child(1)', 'nightwatch')
      .assert.containsText('li:nth-child(2)', 'vue')
      .assert.containsText('li:nth-child(3)', 'vuex')
      // --
      .assert.elementCount('button', 4)
      .click('#button_1')
      .assert.elementCount('li', 2)
      .assert.containsText('li:nth-child(1)', 'nightwatch')
      .assert.containsText('li:nth-child(2)', 'vuex')
      .end()
  }
}
