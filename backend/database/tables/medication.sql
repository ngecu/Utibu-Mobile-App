CREATE TABLE Medications (
    MedicationID VARCHAR(500) PRIMARY KEY,
    Name VARCHAR(100),
    Description TEXT,
    Price DECIMAL(10, 2),
    QuantityAvailable INT
);