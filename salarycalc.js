function calculateNetSalary() {
    // Prompt user for input
    let basicSalaryInput = prompt("Enter your basic salary:");
    let benefitsInput = prompt("Enter your benefits:");

    // Convert inputs to numbers
    let basicSalary = Number(basicSalaryInput);
    let benefits = Number(benefitsInput);

    // Calculate Gross Salary
    let grossSalary = basicSalary + benefits;

    // Calculate PAYE
    let payee = 0;
    if (grossSalary <= 24000) {
        payee = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        payee = (24000 * 0.1) + ((grossSalary - 24000) * 0.25);
    } else {
        payee = (24000 * 0.1) + ((32333 - 24000) * 0.25) + ((grossSalary - 32333) * 0.3);
    }

    // Apply personal relief
    const personalRelief = 2400;
    payee = payee - personalRelief;
    if (payee < 0) payee = 0; // Manually ensuring PAYE is not negative

    // Calculate NHIF Deduction
    let nhifDeduction = 0;
    if (grossSalary <= 5999) {
        nhifDeduction = 150;
    } else if (grossSalary <= 7999) {
        nhifDeduction = 300;
    } else if (grossSalary <= 11999) {
        nhifDeduction = 400;
    } else if (grossSalary <= 14999) {
        nhifDeduction = 500;
    } else if (grossSalary <= 19999) {
        nhifDeduction = 600;
    } else if (grossSalary <= 24999) {
        nhifDeduction = 750;
    } else if (grossSalary <= 29999) {
        nhifDeduction = 850;
    } else if (grossSalary <= 34999) {
        nhifDeduction = 900;
    } else if (grossSalary <= 39999) {
        nhifDeduction = 950;
    } else if (grossSalary <= 44999) {
        nhifDeduction = 1000;
    } else if (grossSalary <= 49999) {
        nhifDeduction = 1100;
    } else if (grossSalary <= 59999) {
        nhifDeduction = 1200;
    } else if (grossSalary <= 69999) {
        nhifDeduction = 1300;
    } else if (grossSalary <= 79999) {
        nhifDeduction = 1400;
    } else if (grossSalary <= 89999) {
        nhifDeduction = 1500;
    } else if (grossSalary <= 99999) {
        nhifDeduction = 1600;
    } else {
        nhifDeduction = 1700;
    }

    // Calculate NSSF Deduction
    let nssfDeduction = Math.min(grossSalary * 0.06, 18000 * 0.06);

    // Calculate Net Salary
    let netSalary = grossSalary - (payee + nhifDeduction + nssfDeduction);

    // Output results
    console.log("Gross Salary: KES " + grossSalary.toFixed(2));
    console.log("PAYE (Tax): KES " + payee.toFixed(2));
    console.log("NHIF Deduction: KES " + nhifDeduction.toFixed(2));
    console.log("NSSF Deduction: KES " + nssfDeduction.toFixed(2));
    console.log("Net Salary: KES " + netSalary.toFixed(2));
}

// Run the function
calculateNetSalary();
