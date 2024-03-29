
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

  -- Generate a unique customer ID
  -- This is assuming @customerID is generated in the application and passed to the procedure

  -- Insert the new customer record
  INSERT INTO Customers (CustomerID, FirstName, LastName, Email, Phone, Address, Username, Password)
  VALUES (@CustomerID, @FirstName, @LastName, @Email, @Phone, @Address, @Username, @Password);

  -- Procedure executed successfully
  SELECT 'Customer registered successfully' AS [Message];
END;

