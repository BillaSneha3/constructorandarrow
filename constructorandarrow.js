

function BankAccount(customerName,accountNumber,branch,balance,amount){
    this.customerName=customerName;
    this.accountNumber=accountNumber;
    this.branch=branch;
    this.balance=balance;

    this.deposit=function(){
        let addedAmount=this.balance+amount;
        let result=console.log(" the deposited amount is "+ addedAmount +" rupees ");
        return result;

    }
    this.withdraw=function(){
        minusAmount=this.balance-amount;
        let result=console.log(" the withdrawn amount was "+minusAmount+" rupees ");
        return result;
    }

}


//creating objects

let customer1=new BankAccount("sneha",2253255222,"SBI",25000,3000);
let customer2=new BankAccount("sruthi",2258524177,"UNION",30000,4000);


//Accessing

customer1.deposit();
customer2.withdraw();



// Annualsalary

function EmployeeDetails(name, id, salary, village) {
        this.name = name;
        this.id = id;
        this.salary = salary;
        this.village = village;

        this.annualsalary=function(){
            let annualincome=this.salary*12;
            let result =console.log("the annualsalary of"+" "+this.name+" is "+annualincome);
            return result;
        }

        }


//creating objects


let emp1=new EmployeeDetails("sneha",101,25000,"ongole");
let emp2=new EmployeeDetails("Billa",102,30000,"Guntur");


//Accessing properties

emp1.annualsalary();
emp2.annualsalary();




//Arrow functions

let multiplication=(a,b)=>a*b;
console.log(multiplication(12,12));

let double=a =>2*a;
console.log(double(10));

let myArray=[1,2,3,4];

let even=myArray.filter(num => num%2===0);
console.log(even,"number is even");

    




