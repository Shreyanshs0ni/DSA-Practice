# Write your MySQL query statement below
SELECT 
    u.name, 
    SUM(t.amount) AS balance 
FROM Users u
INNER JOIN Transactions t
    ON t.account = u.account 
GROUP BY 
    u.name, 
    u.account 
HAVING 
    SUM(t.amount) > 10000;