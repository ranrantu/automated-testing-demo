// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  // '断言测试': browser => {
  //   browser
  //     .init()
  //     // 等待app显示
  //     .waitForElementVisible('#app')
  //     // 有class为hello的dom节点
  //     .assert.elementPresent('.hello')
  //     // 包含h1标签，内容为Welcome to Your Vue.js App
  //     .assert.containsText('h1', 'Welcome to Your Vue.js App')
  //     // 具有一个img标签
  //     .assert.elementCount('img', 1)
  //     .end()
  // },
  // '使用一次自定义指令': browser => {
  //   browser
  //     .openHomepage()
  //      // 有class为hello的dom节点
  //     .assert.elementPresent('.hello')
  //     .end()
  // },
  '打开google首页，增加一条文字' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'hello nightwatch')
      // .end()
  },
}
