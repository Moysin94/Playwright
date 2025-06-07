const {test, expect} = require ('@playwright/test');

test('login test case', async ({page})=>{

    await page.goto('https://automationexercise.com');

    //find out all the product name and this is common locator for all the product
    const productNames = await page.$$('[class="features_items"]>div>div>div>div>p');

    //for loop to fetch out each product name 
    for(const productName of productNames){
        const productNameEach= await productName.textContent();
        console.log(productNameEach);
    }
})