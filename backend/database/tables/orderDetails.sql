CREATE TABLE OrderDetails (
    OrderDetailID VARCHAR(500) PRIMARY KEY,
    OrderID VARCHAR(500),
    MedicationID VARCHAR(500),
    Quantity INT,
    UnitPrice DECIMAL(10, 2),
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (MedicationID) REFERENCES Medications(MedicationID)
);