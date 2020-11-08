// console.log('in JS');

$(document).ready(readyNow);

let employee = [];

function readyNow() {
    // console.log('jquery working');

    $('#inputButton').on('click', inputSubmit);
}

function inputSubmit() {
    console.log('submitting input');
    let emp = {
        firstName: $('#firstName-in').val(),
        lastName: $('#lastName-in').val(),
        id: $('#id-in').val(),
        title: $('#title-in').val(),
        annualSal: $('#annSal-in').val()
    }
    employee.push(emp);
    event.preventDefault();
    $(".inFields").val([]);

    // console.log(employee);
    
}