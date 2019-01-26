import womenSelector from '../selectors/women'

class WomenPage {
    get dresses(){
        $(womenSelector.dresses).waitForVisible(5000);
        return $(womenSelector.dresses)
    }

    selectDresses(){
        this.dresses.click();
    }

}

export default new WomenPage();
