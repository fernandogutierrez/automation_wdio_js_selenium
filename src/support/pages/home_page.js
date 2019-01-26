import homePageSelectors  from "../selectors/home.js";

class HomePage{
    get womenTab(){
        return $(homePageSelectors.women);
    }

    clickWomenTab(){
        this.womenTab.click()
    }

}

export default new HomePage();

