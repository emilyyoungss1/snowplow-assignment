module.exports = {
    'Number of images consistent in main page' : function(browser) {
        browser
            .url('http://127.0.0.1:8000/')
            .saveScreenshot('tests_output/initial.png');

        const imgGrid = "#image-grid";
        const imgClass = '.floated_img[type="image"]';

        browser.waitForElementVisible(imgGrid,'Image grid visible').assert.elementPresent("#image-grid > .floated_img:nth-of-type(4)", "Four images present before Ajax");
        browser.waitForElementVisible(imgClass, 'Image loaded successfully')
            .click(imgClass, function (result) {
                this.assert.equal(true, result.status == 0, "Image clicked successfully");
            })
        browser.waitForElementVisible(imgGrid, 'Image grid visible after AJAX').assert.elementPresent("#image-grid > .floated_img:nth-of-type(4)", "Four images present after Ajax");

    },

    'Ajax site returns four images' : function(browser) {
        browser
            .url('http://127.0.0.1:8000/new_images?imgset=1')
            .saveScreenshot('tests_output/ajax.png');

        const imgClass = '.floated_img[type="image"]';

        browser.waitForElementVisible(imgClass, 'Image is visible').assert.elementPresent(".floated_img:nth-of-type(4)", "Four images present");
    }
};