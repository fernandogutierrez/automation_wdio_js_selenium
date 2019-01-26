import summerDressPage from '../pages/summerDressesPage'
let { Then } = require('cucumber');

Then(/^Verify that 'Printed (Chiffon|Summer) Dress' is displayed with a price of '(.*)'$/, (printedT, price) => {
    expect(summerDressPage.printedTypePriceIsDisplayed(printedT, price)).to.be.true;
});

Then(/^Verify that the listed items have ascendant ordering by the price$/, () => {
    summerDressPage.waitForLoadDissapear();
    expect(summerDressPage.getItemPrices()).to.be.ascending;
});
