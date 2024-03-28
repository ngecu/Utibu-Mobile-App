CREATE TABLE Orders (
    OrderID VARCHAR(500) PRIMARY KEY,
    CustomerID VARCHAR(500),
    OrderDate DATETIME,
    TotalAmount DECIMAL(10, 2),
    Status VARCHAR(20),
    PaymentStatus VARCHAR(20),
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);