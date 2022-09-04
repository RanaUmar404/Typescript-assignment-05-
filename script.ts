// Write a ts program to find maximum between two numbers.
var a: number = 30; //prompt("Enter first Number");
var b: number = 45; //prompt("Enter 2nd Number");
if (a > b) {
    console.log("maximum number is :", a);
} else {
    console.log("maximum Number is :", b);
};

//problem no 02     Write a ts program to find maximum between three numbers.

var a: number = 30; //prompt("Enter first Number");
var b: number = 45; //prompt("Enter 2nd Number");
var c: number = 60; //prompt("Enter 2nd Number");

if (a > b && a > c) {
    console.log("maximum number is :", a);
} else if (b > a && b > c) {
    console.log("maximum Number is :", b);
} else {
    console.log("maximum Number is :", c);
}

//problem no 03     Write a ts program to check whether a number is negative, positive or zero.

var a: number = 45; //prompt("Enter your Number");
if (a == 0) {
    console.log("Number is zero");
} else if (a > 0) {
    console.log("Number is positive");
} else {
    console.log("Number is Negative");
}

//probem no 04 Write a ts program to check whether a number is divisible by 5 and 11 or not

var num: number = 110;  //prompt("Enter your Number");
if (num % 5 == 0 && num % 11 == 0) {
    console.log("Number is divisible by 5 and 11");
} else {
    console.log("Number is not divisible by 5 and 11");
}


//problem no 05  Write a ts program to check whether a number is even or odd.

var num: number = 110;  //prompt("Enter your Number");
if (num % 2 == 0) {
    console.log("Number is EVEN");
} else {
    console.log("Number is ODD");
}

//problem no 06  Write a ts program to check whether a year is leap year or not.

var year: number = 2002; //prompt("Enter your year");
if (year % 4 == 0) {
    console.log(year, " is leap year"); //divide the year by 4. If it is fully divisible by 4, it is a leap year
} else {
    console.log(year, " is not leap year");
}


//problem no 07 Write a ts program to check whether a character is alphabet or not.
var input: string = "9";   //prompt("Enter your charachter");
if (input >= 'A' && input <= 'Z') {
    console.log(input, "is an alphabet");
} else {
    console.log(input, " is not an ALphabet");
}


//problem no 08 Write a ts program to input any alphabet and check whether it is vowel or consonant.
var input2: string = "J";   //prompt("Enter your charachter");
if (input2 >= 'A' && input2 <= 'Z' && input2 == 'E, I, O,U') {
    console.log(input2, "is an vowel alphabet");
} else {
    console.log(input2, " is consonent ALphabet");
}


//problem no 09    Write a ts program to input any character and check whether it is alphabet, digit or special character.


var input: string = "@";   //prompt("Enter your charachter");
if (input >= 'A' && input <= 'Z') {
    console.log(input, "is an alphabet");
} else if (input >= '0' && input <= '9') {
    console.log(input, " is  a digit");
} else {
    console.log(input, " is spacial charachter")
}

//problem no 10   Write a ts program to check whether a character is uppercase or lowercase alphabet.

var input: string = "ali";   //prompt("Enter your charachter");
if (input >= 'A' && input <= 'Z') {
    console.log(input, "is in UPPERCASE");
} else if (input >= 'a' && input <= 'z') {
    console.log(input, " is in LOWERCASE");
} else {
    console.log(input, "not an alphabet");
}

//problem no 11  Write a ts program to input week number and print week day.
var weeknum: number = 9; //prompt("Enter your charachter");
if (weeknum == 1) {
    console.log(weeknum, "is Monday in week");
} else if (weeknum == 2) {
    console.log(weeknum, "is Tuesday in week");
} else if (weeknum == 3) {
    console.log(weeknum, "is Wednesday in week");
} else if (weeknum == 4) {
    console.log(weeknum, "is Thursday in week");
} else if (weeknum == 5) {
    console.log(weeknum, "is Friday in week");
} else if (weeknum == 6) {
    console.log(weeknum, "is Satursday in week");
} else if (weeknum == 7) {
    console.log(weeknum, "is Sundayday in week");
} else {
    console.log(weeknum, "not a week number");
}

// problem no 12  Write a ts program to input month number and print number of days in that month.
var monthNum: number = 13;  //prompt("Enter your monthNum");

if (monthNum == 1 || monthNum == 3 || monthNum == 5 || monthNum == 7 || monthNum == 8 || monthNum == 10 || monthNum == 12) {
    console.log(monthNum, "has 31 days");
} else if (monthNum == 2) {
    console.log(monthNum, "has 28 days");
} else if (monthNum == 4 || monthNum == 9 || monthNum == 6 || monthNum == 10) {
    console.log(monthNum, "has 30 days");
} else {
    console.log("invalid number");
}



//problem no 13  13. Write a ts program to count total number of notes in given amount.

//problem no 14 Write a ts program to input angles of a triangle and check whether triangle is valid or not


        //A triangle has three sides, three angles, and three vertices.
        // The sum of all internal angles of a triangle is always equal to 180°

var angle1: number = 20;        //prompt("Enter your 1st angle");
var angle2: number =30;         //prompt("Enter your 2nd angle");
var angle3: number = 40;        //prompt("Enter your 3rd angle");
    var sumAngles:number =  angle1 + angle2 + angle3;
 if(sumAngles == 180){
    console.log(sumAngles, "is a valid triangle");
 }else{
    console.log(sumAngles, "is not a valid triangle");
 }




 //problem no 15 Write a ts program to input all sides of a triangle and check whether triangle is valid or not.
        //if some of two sides is greater than 3rd side than it will be valid triangle

 var sideA: number= 12;
 var sideB: number=13;
 var sideC: number= 13;
    if(sideA + sideB > sideC){
        console.log("it is a valid triangle");
    }else if(sideB + sideC >  sideA){
        console.log("it is a valid triangle");
    }else if(sideA + sideC > sideB){
        console.log("it is a valid triangle");
    }else{
        console.log("it is not a valid triangle");

    }


//problem 16  Write a ts program to check whether the triangle is equilateral, isosceles or scalene triangle.

        //all side equal equilateral triangel
        //two side equal isoscele triangle
        //none of side equal is scalene triangle

var sideA: number = 12;         //prompt("Enter side of Triangle")
var sideB: number = 12;         //prompt("Enter side of Triangle")
var sideC: number = 13;         //prompt("Enter side of Triangle")
    var equilateral:number = sideA + sideB + sideC;
    if(equilateral / 3 == sideA){
        console.log("triangle is Equilateral");
    }else if(sideA == sideB || sideA == sideC || sideB == sideC){
        console.log(" triangle is a isoscele");
    }else if(sideA != sideB || sideA != sideC || sideB != sideC){
        console.log("truangle is scalene");
    }else{
        console.log("Not an triangle");
    }

//problem no 17 Write a ts program to find all roots of a quadratic equation.


var numA:number = 1;   //prompt("Enter value of a");
var numB:number = 2;    //prompt("Enter value of b");
var numC:number =3;         //prompt("Enter value of c");

var discriminant:number = (numB* numB) - 4*numA*numC;   //b*b -4ac
 
        if(discriminant > 0){
            var root1: number = (-numB + Math.sqrt(discriminant))/ 2* numA;
            var root2: number = (-numB - Math.sqrt(discriminant))/ 2* numA;
            console.log("Roots are :", root1 , root2);
        }else if (discriminant == 0){
            var root:number = -numB / 2*numA;
            console.log("Root is :" , root);
        }else{
            var root1: number  = -numB / 2 * numA;
            var root2:number  = (Math.sqrt(-discriminant) ) / 2 * numA;
            console.log("Roots are :" , root1, root2);
        }



//problem 18   Write a ts program to calculate profit or loss.
var purchase: number = 90;   //prompt("Enter purchase amount");
var sell: number = 60;    //prompt("Enter selling amount");
          var  total:number = sell - purchase;
        if(total  > 0){
            console.log(total, " is the profit");

        }else{
            console.log(total, " is the loss");
        }



//problem no 19   Write a ts program to input marks of five subjects Physics, Chemistry, Biology, Mathematics
// and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

//lets total number of per subject 100
var physics:number = 50;        //prompt("enter number of physics")......
var chemistry:number = 50;
var biology:number = 50;
var math:number =50;
var comp:number =50;

var totalMarks: number = physics+chemistry+biology+math+comp;
var percentage:number = (totalMarks  / 500) * 100;
            console.log("percentage is :" , percentage);

if(percentage>= 90){
    console.log("Grade A");
}else if (percentage>= 80){
    console.log("Grade B");
}else if (percentage>= 70){
    console.log("Grade C");
}else if (percentage>= 60){
    console.log("Grade D");
}else if (percentage>= 40){
    console.log("Grade E");
}else{
    console.log("Grade F");
}


//problem no 20  Write a ts program to input basic salary of an employee and calculate its Gross salary
//  according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

                //gross salary = basic salary   +   DA     +   HRA

var salary:number = 16000;    //prompt ("enter salary ");
    if(salary <=  10000){
        var hra:number = (salary * 20)  /  100;
        var da:number =  (salary * 80)  /  100;
        var grossSalary:number = salary + hra + da;
            console.log("Gross salary is :" , grossSalary);
    }else if (salary <= 20000){
        var hra:number = (salary * 25)  /  100;
        var da:number =  (salary * 90)  /  100;
        var grossSalary:number = salary + hra + da;
            console.log("Gross salary is :" , grossSalary);
    }else{
        var hra:number = (salary * 30)  /  100;
        var da:number =  (salary * 95)  /  100;
        var grossSalary:number = salary + hra + da;
            console.log("Gross salary is :" , grossSalary);
    }

    // problem no 21   Write a ts program to input electricity unit charges and calculate total electricity bill
    //  according to the given condition:
    // For first 50 units Rs. 0.50/unit
    // For next 100 units Rs. 0.75/unit
    // For next 100 units Rs. 1.20/unit
    // For unit above 250 Rs. 1.50/unit
    // An additional surcharge of 20% is added to the bill

            //bill  =  unit *  cost of unit

var units:number = 45;  //prompt("enter number of units ")
if(units <= 50){
    var bill :number = units * 0.50;
    var additional : number =  (bill * 20) / 100;
      var totalBill : number = bill + additional;

    console.log("Total Bill is :" , totalBill);  
}else if(units > 50  &&  units <= 150){
    var bill :number = units * 0.75;
    var additional : number =  (bill * 20) / 100;
      var totalBill : number = bill + additional;

    console.log("Total Bill is :" , totalBill);  
}else if(units > 150 &&  units <=250){
    var bill :number = units * 1.20;
    var additional : number =  (bill * 20) / 100;
      var totalBill : number = bill + additional;

    console.log("Total Bill is :" , totalBill);  
}else{
    var bill :number = units * 1.50;
    var additional : number =  (bill * 20) / 100;
      var totalBill : number = bill + additional;

    console.log("Total Bill is :" , totalBill);  
};