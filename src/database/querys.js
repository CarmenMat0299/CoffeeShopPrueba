export const querys = {
    getAllProducts:
        "SELECT TOP(500) * FROM [CoffeeShopBD].[dbo].[ProductCoffeeShop]",
    getProducById:
        "SELECT * FROM Product Where IdProduct = @IdProduct",
    addNewProduct:
        "INSERT INTO [CoffeeShopBD].[dbo].[ProductCoffeeShop] ( price, nameProduct, imageProduct ) VALUES ( @price, @nameProduct, @imageProduct );",
    deleteProduct:
        "DELETE FROM [CoffeeShopBD].[dbo].[ProductCoffeeShop] WHERE IdProduct= @IdProduct",
    getTotalProducts:
        "SELECT COUNT(*) FROM CoffeeShopBD.dbo.Product",
    updateProductById:
        "UPDATE [CoffeeShopBD].[dbo].[ProductCoffeeShop] SET price = @price, nameProduct = @nameProduct, imageProduct = @imageProduct WHERE IdProduct = @IdProduct",
    getAllOrders:
        "SELECT TOP(500) * FROM [CoffeeShopBD].[dbo].[OrdersCoffeeShop]",
    addNewOrders:
        "INSERT INTO [CoffeeShopBD].[dbo].[OrdersCoffeeShop] (stateOrder, username) VALUES (@stateOrder, @username);",
    updateOrdersById:
        "UPDATE [CoffeeShopBD].[dbo].[OrdersCoffeeShop] SET stateOrder = @stateOrder WHERE IdOrder = @IdOrder",
    addProductInOrder:
        "INSERT INTO [CoffeeShopBD].[dbo].[OrderProductsCoffeeShop] (IdProduct, IdOrder, qty) VALUES (@IdProduct, @IdOrder, @qty);",
    getProductInOrder:
        "SELECT IdProduct, qty FROM [CoffeeShopBD].[dbo].[OrderProductsCoffeeShop] WHERE IdOrder = @IdOrder",
};