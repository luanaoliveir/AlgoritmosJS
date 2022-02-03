let employees = [ 
    {name: 'Mila', salary: '10000', hireDate: "July, 20, 2018"},
    {name: 'Analu', salary: '12000', hireDate: "January, 14, 2016"},
    {name: 'Luka', salary: '9000', hireDate: "April, 18, 2015"}

];

employees.sort(function(x, y) {
    return x.salary - y.salary;
});

console.table(employees);

employees.sort(function(x, y) {
    let a = x.name.toUpperCase(),
        b = y.name.toUpperCase();
    return a == b ? 0 : a > b ? 1 : -1;                   
         
});

console.table(employees);

employees.sort(function(x, y ) {
    let a = new Date(x.hireDate),
        b = new Date(y.hireDate);
    return a - b;           

});

console.table(employees);