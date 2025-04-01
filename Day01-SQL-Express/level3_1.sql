-- Tabelle Customers:
-- 1. Zeige alle Länder an, die mehr als fünf Kunden haben
SELECT Country FROM Customers GROUP BY Country HAVING COUNT(*) > 5

-- Tabelle Orders:
-- 1. Zeige alle Bestellungen im August 1996 an
SELECT * FROM Orders WHERE OrderDate LIKE '8/%/1996'


-- 2. Zeige alle CustomerIds, die mehr als eine Bestellung getätigt haben
SELECT CustomerId FROM Orders GROUP BY CustomerId HAVING COUNT(*) > 1

-- 3. Zeige die CustomerId mit den meisten Bestellungen an
SELECT TOP 1 CustomerId FROM Orders GROUP BY CustomerId ORDER BY COUNT(*) DESC

-- Bonus: Zeige direkt den Kundennamen an (nutze JOIN um zwei Tabellenabfragen zu verbinden)

-- Tabelle Products
-- 1. Zeige alle Produkte an, die von der Firma “Heli Süßwaren GmbH & Co. KG ” geliefert werden
SELECT * FROM Products WHERE SupplierID = (SELECT SupplierID FROM Suppliers WHERE SupplierName = 'Heli Süßwaren GmbH & Co. KG')

-- 2. Zeige den Durchschnittspreis aller Produkte an
SELECT AVG(Price) AS AveragePrice FROM Products 

-- 3. Zeige den Höchstpreis aller Produkte an
SELECT MAX(Price) AS MaxPrice FROM Products 

-- Tabelle Suppliers
-- 1. Zeige alle Lieferanten an, deren Telefonnummer keine Klammern () enthält
SELECT * FROM Suppliers WHERE Phone NOT LIKE '%(%' AND Phone NOT LIKE '%)%'
-- 2. Liste die Länder mit der Anzahl der Lieferanten auf, sortiert nach der Anzahl der Lieferanten in absteigender Reihenfolge und bei gleicher Anzahl von Lieferanten alphabetisch nach Ländernamen.
SELECT Country, COUNT(*) AS SupplierCount FROM Suppliers GROUP BY Country ORDER BY COUNT(*) DESC, Country ASC;