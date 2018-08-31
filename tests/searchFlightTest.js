module.exports = {
  'Search flight and validate search results': function(browser) {
    var searchFlights = browser.page.searchFlights_Page();
    var searchResults = browser.page.searchResults_Page();

    searchFlights.navigate()
      // .expandModifySearchForm()
      .validateModifySearchForm()
      .fillSearchFlightForm('ROUND TRIP', 'Reykjavik KEF', 'Amsterdam AMS', '03/12/2019', '03/27/2019')
      .searchFlight()

    // searchResults.verifySearchedFlight()

    browser.end();
  }
}
