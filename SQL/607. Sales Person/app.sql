# Write your MySQL query statement below
select name from SalesPerson where sales_id Not In (select sales_id from Orders as o join Company as c on c.com_id = o.com_id where c.name="RED");