let lowerBoundary =  24001;
let lowerBoundaryB = 32333
let personalRelief = 2400;
let nsf =  200;
function netSalary(salary, benefits = 1080)
{
    let payeeCalulations = () => // Function to calculate payee
    {
    const grossSalary = salary;
    let taxable = grossSalary - benefits
    if (salary <= 24000)
    {
        var tax =  (24000 * 0.1) - 2400;
        return tax;
    }
    else if (taxable> 24000 && taxable <= 32333)
    {
        const tax =  (24000 * 0.1) + (0.25 * (taxable - lowerBoundary)) - personalRelief;
        return tax;
    }
     else if (taxable > 32333)
     {
         const tax =  2400 + ((32333 - 24000) * 0.25) + (0.3 * (taxable - lowerBoundaryB)) - personalRelief;
         return tax;
     }
    }
    const nssfNhifDeduction = ()=> // Block takes into account NSSF, NHIF figures and PAYE function above.
    {
        if (salary <= 5999)
        {
            const salo = salary - payeeCalulations() - nsf - 150;
            return salo;
        }
        else if (salary >=6000 && salary < 8000)
        {
            const salo = salary - payeeeCalulations() - nsf - 300;
            return salo;
        }
        else if (salary >=8000 && salary < 12000)
        {
            const Salop = salary - payeeeCalulations() - nsf - 400;
            return Salop;
        }
        else if (salary >=12000 && salary < 15000)
        {
            const salo = salary - payeeCalulations() - nsf - 500;
            return salo;
        }
        else if (salary >=15000 && salary < 20000)
        {
            const salo = salary - payeeCalulations() - nsf - 600;
            return salo;
        }
        else if (salary >=20000 && salary < 25000)
        {
            const salo = salary - payeeCalulations() - nsf - 750;
            return salo;
        }
        else if (salary >=25000 && salary < 30000)
        {
            const salo = salary - payeeCalulations() - nsf - 850;
            return salo;
        }
        else if (salary >=30000 && salary < 35000)
        {
            const salo = salary - payeeCalulations() - nsf - 900;
            return salo;
        }
        else if (salary >=35000 && salary < 40000)
        {
            const salo = salary - payeeCalulations() - nsf - 950;
            return salo;
        }
        else if (salary >=40000 && salary < 45000)
        {
            const salo = salary - payeeCalulations() - nsf - 1000;
            return salo;
        }
        else if (salary >=45000 && salary < 50000)
        {
            const salo = salary - payeeCalulations() - nsf - 1100;
            return salo;
        }
        else if (salary >=50000 && salary < 60000)
        {
            const salo = salary - payeeCalulations() - nsf - 1200;
            return salo;
        }
        else if (salary >=60000 && salary < 70000)
        {
            const salo = salary - payeeCalulations() - nsf - 1300;
            return salo;
        }
        else if (salary >=70000 && salary < 80000)
        {
            const salo = salary - payeeCalulations() - nsf - 1400;
            return salo;
        }
        else if (salary >=80000 && salary < 90000)
        {
            const salo = salary - payeeCalulations() - nsf - 1500;
            return salo;
        }
        else if (salary >=90000 && salary < 100000)
        {
            const salo = salary - payeeCalulations() - nsf - 1600;
            return salo;
        }
        else
        {
            const salo = salary - payeeCalulations() - nsf - 1600;
            return salo;
        }
    }
    const finalPay =  [`PAYE: ${payeeCalulations().toFixed(2)}, NSSF: ${nsf}, Net Salary is: ${nssfNhifDeduction() + benefits}`];
    return finalPay; // This returns Net Salary
}
console.log(netSalary(500000,60000)); // Testing if the program works