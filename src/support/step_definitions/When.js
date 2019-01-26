import summerDressesPage from '../pages/summerDressesPage'

let { When } = require('cucumber');

When(/^I check '([LMS])' size from catalog$/,(size) => {
    summerDressesPage.selectSize(size);
});

When(/^I select '(White|Black|Orange|Blue|Green|Yellow)' color from catalog$/,(color) => {
    summerDressesPage.selectColor(color);
});
When(/^I Select '(.*)' option in Sort By dropdown$/,(sortT) => {
    summerDressesPage.selectSortBy(sortT);
});
