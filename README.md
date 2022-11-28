# code-challenge-js
# student-grade-generator
 # description 
 Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 

A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

# instructions
1. Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 

A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.


2. use if..else statements to write your code.
3. inside your code assign score and return the letters as expected. 
    >"A" starts from 79 and less than 100
    >'B' from 60 to 79 
    >'C' from 49 to 59
    >'D' from40 to 49
    >'E' from 0 to 40
3.test your code to see if its working.
# test code
.on terminal run ( node index.js )
or
use `console.log(gradeGenerator())` to test the code if its working
 

# title
#speed-detector-js

# description
The code challenge is to generate students grades in letters after being grouped against the grade you got.The language used is javascript.
# task
Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.
# instructions
1. create a function ..speedDetector and insert parameter called speed.
2.use if else to insert the content required by the task.
3. use console log in if else to print your out put.
4. call out the function after finishing using "speedDetector()"
# how to test the code
    Open terminal and run "node speed-detector.js




# title
     net-salary-calculator-js

# description 
     Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 
For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

# instructions
1.Use KRA, NHIF, and NSSF values provided in the link below.
    https://www.aren.co.ke/payroll/taxrates.htm
 
    https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/pay

# steps
  1 create 3 variables lowerBoundary,upperboundary and personalRelief.
  2 Create function named 'netSalary' (salary, benefits = 1080)
  3 use if else to calculate PAYE
  4.  declare a variable const nssfNhifDeduction = ()=>  which takes takes into account NSSF, NHIF figures and PAYE function you created above.
  5.To return salary use the code below
  const finalPay =  [`PAYE: ${payeeCalulations().toFixed(2)}, NSSF: ${nsf}, Net Salary is: ${nssfNhifDeduction() + benefits}`];
    return finalPay; 
 # test
 on your terminal run node "net-salary-calculator.js"
 or  
 inside the code your code you can use console.log(netSalary()); to test if its working.  
