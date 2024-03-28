CREATE TABLE Invoices (
    InvoiceID VARCHAR(500),
    OrderID VARCHAR(500),
    InvoiceDate DATETIME,
    TotalAmount DECIMAL(10, 2),
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID)
);