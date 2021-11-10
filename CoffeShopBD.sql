Create database CoffeeShopBD
Use CoffeeShopBD
CREATE TABLE dbo.ProductCoffeeShop
(
IdProduct INT NOT NULL IDENTITY(1,1) CONSTRAINT PK_ProductCoffeeShop PRIMARY KEY CLUSTERED(IdProduct),
price int NOT NULL,
nameProduct VARCHAR(250) NOT NULL,
imageProduct VARCHAR(250) NOT NULL,
createdAt DATETIME NOT NULL,
)
GO


CREATE TABLE dbo.OrdersCoffeeShop
(
IdOrder INT NOT NULL IDENTITY(1,1) CONSTRAINT PK_OrdersCoffeeShop PRIMARY KEY CLUSTERED(IdOrder),
stateOrder VARCHAR(250) NOT NULL,
userName VARCHAR(250) NOT NULL,
createdAt DATETIME NOT NULL,
updatedAt DATETIME NOT NULL,
)
GO


CREATE TABLE dbo.OrderProductsCoffeeShop
(
IdProduct INT NOT NULL
CONSTRAINT FK_ProductOrsCoffeeShop FOREIGN KEY(IdProduct) REFERENCES dbo.ProductCoffeeShop(IdProduct),
IdOrder INT NOT NULL
CONSTRAINT FK_OrderProdCoffeeShop FOREIGN KEY(IdOrder) REFERENCES dbo.OrdersCoffeeShop(IdOrder),
qty INT NOT NULL
)
GO
alter table ProductCoffeeShop add constraint createdAtPr default getdate() for createdAt;
alter table OrdersCoffeeShop add constraint createdAtOr default getdate() for createdAt;
alter table OrdersCoffeeShop add constraint updatedAtOrders default getdate() for updatedAt;
