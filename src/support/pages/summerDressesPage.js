import summerDressesSelectors from '../selectors/summerDresses'

class SummerDressesPage {

    get sortBy(){
        return $(summerDressesSelectors.productSort);
    }

    selectSize(size){
        $(summerDressesSelectors.validSize(size)).click();
    }

    selectColor(color){
        $(summerDressesSelectors.validColor(color)).click();
    }

    selectSortBy(sortT){
        this.sortBy.click();
        $(summerDressesSelectors.sortType(sortT)).click();
    }

    printedTypePriceIsDisplayed(printedT, price){
        return $(summerDressesSelectors.printedTypePrice(printedT, price)).isVisible();
    }

    getItemPrices() {
        return $$(summerDressesSelectors.itemPrices).map(itemPriceEl => { return itemPriceEl.getText() });
    }

    waitForLoadDissapear(){
        for (let i=0; i<20; i++){
            if ($$(summerDressesSelectors.loadingImage).length > 1){
                browser.pause();
            }
            else{
                break;
            }
        }
    }
}

export default new SummerDressesPage();
