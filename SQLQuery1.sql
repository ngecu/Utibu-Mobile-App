-- CUSTOMER FUNCTIONALITY 
--------------------------------------------------------------------------------
--------------------------------------------------------------------------------
CREATE TABLE Customers (
    CustomerID VARCHAR(500) PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Email VARCHAR(100),
    Phone VARCHAR(20),
    Address VARCHAR(255),
    Username VARCHAR(50),
    Password VARCHAR(500)
);
DROP TABLE Customers

CREATE OR ALTER PROCEDURE registerCustomer
  @customerID VARCHAR(500),
  @FirstName VARCHAR(50),
  @LastName VARCHAR(50),
  @Email VARCHAR(100),
  @Phone VARCHAR(20),
  @Address VARCHAR(255),
  @Username VARCHAR(50),
  @Password VARCHAR(50)
AS
BEGIN
  SET NOCOUNT ON;

  DECLARE @existingCustomerCount INT;

  -- Check if the username or email is already registered
  SELECT @existingCustomerCount = COUNT(*)
  FROM Customers
  WHERE Username = @Username OR Email = @Email;

  IF (@existingCustomerCount > 0)
  BEGIN
    -- Username or email already exists
    RAISERROR ('Username or email already exists', 16, 1);
    RETURN;
  END


  INSERT INTO Customers (CustomerID, FirstName, LastName, Email, Phone, Address, Username, Password)
  VALUES (@CustomerID, @FirstName, @LastName, @Email, @Phone, @Address, @Username, @Password);

  SELECT 'Customer registered successfully' AS [Message];
END;

SELECT * FROM Customers

CREATE OR ALTER PROCEDURE loginCustomer
  @Email VARCHAR(255),
  @Password VARCHAR(50)
AS
BEGIN

    SELECT * FROM Customers WHERE Email= @Email

END
--------------------------------------------------------------------------------
--------------------------------------------------------------------------------
