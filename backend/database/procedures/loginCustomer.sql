CREATE OR ALTER PROCEDURE loginCustomer
  @Email VARCHAR(255),
  @Password VARCHAR(50)
AS
BEGIN

    SELECT * FROM Customers WHERE Email= @Email

END
