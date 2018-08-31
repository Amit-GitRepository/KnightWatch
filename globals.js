export default {
  waitForConditionTimeout: 10000
};


var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter({
	openBrowser: true,
	reportsDirectory: __dirname + '/reports'
});
module.exports = {
	reporter: reporter.fn
};
