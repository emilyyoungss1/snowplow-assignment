module.exports = {
  "src_folders" : ["tests"],

  "webdriver" : {
    "start_process": true,
    "server_path": "node_modules/.bin/chromedriver",
    "port": 9515
  },

  "test_settings" : {
    "default" : {
        "custom_assertions_path": "assertions",
        "custom_commands_path": "commands",
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    }
  }

}