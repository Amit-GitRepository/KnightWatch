var searchFlightCommands = {
	expandModifySearchForm: function() {
		return this.waitForElementVisible('body', 15000)
      .waitForElementVisible('@modifySearch_link', 2000)
      .click('@modifySearch_link')
			.waitForElementVisible('@closeSearch_button', 2000)
			.verify.visible('@closeSearch_button')
	},

	validateModifySearchForm: function() {
		return this.waitForElementVisible('body', 1000)
			.assert.visible('@departureFrom_textBox')
			.assert.visible('@goingTo_textBox')
			.assert.visible('@departureDate_textBox')
			.assert.visible('@returnDate_textBox')
			.assert.visible('@searchFlight_button')
			.verify.visible('@promoCode_textBox')
	},

  fillSearchFlightForm: function(tripType, departingFrom, goingTo, departureDate, returnDate){
    return this.waitForElementVisible('@searchFlight_button', 2000)
      .click('@departureFrom_textBox')
			.clearValue('@departureFrom_textBox')
			.setValue('@departureFrom_textBox', departingFrom)
			.click('@goingTo_textBox')
			.clearValue('@goingTo_textBox')
			.setValue('@goingTo_textBox', goingTo)
			.click('@departureDate_textBox')
			.clearValue('@departureDate_textBox')
			.setValue('@departureDate_textBox', departureDate)
			.click('@returnDate_textBox')
			.clearValue('@returnDate_textBox')
			.setValue('@returnDate_textBox', returnDate)
  },

	searchFlight: function() {
		return this.waitForElementVisible('@searchFlight_button', 2000)
			.click('@searchFlight_button')
	}
};


module.exports = {
	commands: [searchFlightCommands],
	url: function() {
		return this.api.launchUrl;
	},
	elements: {
		modifySearch_link: {
			selector: '.VW8H1GITSn'
		},
		departureFrom_textBox: {
			selector: '#searchAgainLocationPickerContainerFrom'
		},
		goingTo_textBox: {
			selector: '#searchAgainLocationPickerContainerTo'
		},
		departureDate_textBox: {
			selector: 'input[id*=startDate-]'
		},
    returnDate_textBox: {
			selector: 'input[id*=endDate-]'
		},
    searchFlight_button: {
			selector: '#searchAgainActionsSearchButton'
		},
    closeSearch_button: {
			selector: '#searchAgainActionsCancelButton'
		},
		promoCode_textBox: {
			selector: '#searchAgainPassengersAndPromocodeContainerPromocode'
		},

		firstItemCity_dropDown: {
			selector: 'a[data-key="0"]'
		}

	}
};
