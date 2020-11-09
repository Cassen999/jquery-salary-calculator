// console.log('in JS');

$(document).ready(readyNow);

let employee = [];

function readyNow() {
    // console.log('jquery working');

    $('#inputButton').on('click', inputSubmit);
}

function inputSubmit() {
    console.log('submitting input');
    if ($("#firstName-in").val() == '' || $("lastName-in").val() == '' || $("#id-in").val() == '' || $("#title-in").val() == '' || $("#annSal-in").val() == ''){
        alert ('Please fill out all input fields');
    } else {
        let emp = {
            firstName: $('#firstName-in').val(),
            lastName: $('#lastName-in').val(),
            id: $('#id-in').val(),
            title: $('#title-in').val(),
            annualSal: $('#annSal-in').val()
        }
        employee.push(emp);
        event.preventDefault();
        $("#tableBody").append(`<tr id="newEmp"><td>${emp.firstName}</td><td>${emp.lastName}</td><td>${emp.id}</td><td>${emp.title}</td><td>${emp.annualSal}</td><td><button class="removeButton">Remove Employee</button></td></tr>`); // This doesn't work
        $(".inFields").val([]);
        $(".removeButton").on('click', removeEmployee);
        costCalc();
        // console.log(employee);
    }
}



function removeEmployee() {
    alert('Are you sure you want to remove this employee?');
    $(this).closest("tr").remove();
    costCalc();
    // console.log('in remove');
}

function costCalc() {
    let totalCost = 0;
    for (let i = 0; i<tableBody.rows.length; i++){
        totalCost += parseInt(tableBody.rows[i].cells[4].innerHTML / 12);
    }
    $('#costCalc').empty();
    $('#costCalc').append(`Total Monthly Cost: $${totalCost}`);
    if (totalCost > 20000) {
        $('#costCalc').addClass('redBackground');
    } else {
        $('#costCalc').removeClass('redBackground');
    }
    // console.log(totalCost);
}