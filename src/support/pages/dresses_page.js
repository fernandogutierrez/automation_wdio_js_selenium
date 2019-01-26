import dressesSelectors from '../selectors/dresses'

class DressesPage{
    get summerDresses(){
        return $(dressesSelectors.summerDresses);
    }

    selectSummerDresses(){
        this.summerDresses.click();
    }

}

export default new DressesPage();
