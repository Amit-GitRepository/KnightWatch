var seleniumServer = require('selenium-server');
// var phantomjs = require('phantomjs-prebuilt')

module.exports = {
	"src_folders": ["tests"],
	"output_folder": "reports",
	"custom_commands_path": "",
	"custom_assertions_path": "",
	"page_objects_path": "page-objects",
	"globals_path": "",

	"selenium": {
		"start_process": true,
		"server_path": "/Users/amitkumar/Wow/ui/resources/server/selenium-server-standalone-3.14.0.jar",
		"host": "127.0.0.1",
		"port": 4444,
		"cli_args": {
			"webdriver.chrome.driver": "./resources/drivers/chromedriver"//,
			// "webdriver.gecko.driver" : "./resources/drivers/geckodriver"
		}
	},

	"test_settings": {
		"default": {
			"launch_url": "https://booking.wowair.com/search",
			"selenium_host": "localhost",
			"selenium_port": 4444,
			"pathname": "/wd/hub",
			"silent": true,
			"screenshots": {
				"enabled": true,
				"path": "/Users/amitkumar/Wow/UIAutomation/reports/screenshots"
			},
			"desiredCapabilities": {
				"browserName": "chrome"
			}
		}

		// "ci": {
		// 	"desiredCapabilities": {
		// 		"browserName": "firefox"
		// 	}
		// },
		//
		// "phantom": {
		// 	"desiredCapabilities": {
		// 		"browserName": "phantomjs",
		// 		"phantomjs.binary.path": phantomjs.path,
		// 	}
		// }
	}
}
