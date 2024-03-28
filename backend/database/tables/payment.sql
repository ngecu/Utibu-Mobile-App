CREATE TABLE Payments (
    PaymentID VARCHAR(500) PRIMARY KEY,
    InvoiceID VARCHAR(500),
    PaymentDate DATETIME,
    AmountPaid DECIMAL(10, 2),
    FOREIGN KEY (InvoiceID) REFERENCES Invoices(InvoiceID)
);