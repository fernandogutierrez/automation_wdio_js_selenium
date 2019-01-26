module.exports = {
    itemPrices: "//a[contains(text(), 'Printed') and contains(text(), 'Dress')]" +
        "/ancestor::div[@class='right-block']/descendant::span[@itemprop='price']",

    loadingImage: "//img[contains(@src, '/img/loader.gif')]/parent::p",

    productSort: "#selectProductSort",

    validSize: size => {
        return (size === 'L' || size === 'S' || size === 'M') ? `//a[text()='${size}']` : "//a[text()='L']";
    },

    validColor: color => {
        return (color === 'White' || color === 'Yellow' || color === 'Black')
            ? `//a[text()='${color}']`: "//a[text()='Yellow']";
    },

    sortType: sortText => { return `//option[text()='${sortText}']`; },

    printedTypePrice: (printedT, price) => {
        return `//a[contains(text(), '${printedT}')]/ancestor::div[@class='right-block']/descendant::span[@itemprop='price' and contains(text(),'$${price}')]`
    }
};
