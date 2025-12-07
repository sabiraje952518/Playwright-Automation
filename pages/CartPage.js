exports.HomePage=class HomePage{

    constructor(page){
        this.page=page;
        this.ProductList='//*[@id="tbodyid"]/div/div/div/h4/a';
        this.addToCarrtbtn='//a[normalize-space()="Add to cart"]'
        this.cart="#cartur"
    }

    async addProductToCart(productName){
        const ProductList=await this.page.$$(this.ProductList);
        for (const product of ProductList) {
            if (productName===await product.textcontent())   {
                await product.click()
                break;
            }
        }
        await this.page.on('dialog',async dialog=>{
            if(dialog.message().includes('added')){
                await dialog.accept();
            }
        })
        await this.page.locator(this.addToCarrtbtn).click();
    }
    async gotoCart() {
        await this.page.locator(this.cart).click();
    }
}