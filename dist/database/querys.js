"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.querys = void 0;
var querys = {
  getAllProducts: "SELECT TOP(500) * FROM [CoffeeShopBD].[dbo].[Product]",
  getProducById: "SELECT * FROM Product Where Id = @Id",
  addNewProduct: "INSERT INTO [CoffeeShopBD].[dbo].[Product] (price, name, image) VALUES (@price, @name, @image);",
  deleteProduct: "DELETE FROM [CoffeeShopBD].[dbo].[Product] WHERE Id= @Id",
  getTotalProducts: "SELECT COUNT(*) FROM CoffeeShopBD.dbo.Product",
  updateProductById: "UPDATE [CoffeeShopBD].[dbo].[Product] SET Price = @price, Name = @name, Image = @image WHERE Id = @id"
};
exports.querys = querys;