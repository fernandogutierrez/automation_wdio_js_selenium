import homePage from '../pages/home_page'
import womenPage from '../pages/women_page'
import dressesPage from '../pages/dresses_page'

let { Given } = require('cucumber');

Given(/^I open site '(.*)'$/, (siteUrl) => {
    browser.url(siteUrl);
    browser.windowHandleMaximize();
});

Given(/^I select WOMEN tab$/, () => {
    homePage.clickWomenTab();
});

Given(/^I select Dresses from WOMEN box$/, () =>{
    womenPage.selectDresses();
});

Given(/^I select Summer Dresses from DRESSES box$/, () => {
    dressesPage.selectSummerDresses();
});
