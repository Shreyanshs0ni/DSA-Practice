# Write your MySQL query statement below

-- SELECT e.employee_id 
-- FROM employees e
-- FULL OUTER JOIN salaries s         
--     ON e.employee_id=s.employee_id
--     WHERE e.employee_id IS NULL OR s.employee_id IS NULL
-- ORDER BY employee_id ASC

#this  Mysql does not support full outer join so we use another method but logic is same
SELECT e.employee_id
FROM employees e
LEFT JOIN salaries s
    ON e.employee_id=s.employee_id
    WHERE s.employee_id IS NULL

UNION

SELECT s.employee_id
FROM salaries s
LEFT JOIN employees e
    ON s.employee_id=e.employee_id
    WHERE e.employee_id IS NULL

ORDER BY employee_id ASC