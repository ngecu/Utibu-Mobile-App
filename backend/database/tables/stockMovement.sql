CREATE TABLE StockMovement (
    MovementID VARCHAR(500) PRIMARY KEY,
    MedicationID VARCHAR(500),
    QuantityMoved INT,
    MovementType VARCHAR(20),
    MovementDate DATETIME,
    FOREIGN KEY (MedicationID) REFERENCES Medications(MedicationID)
);