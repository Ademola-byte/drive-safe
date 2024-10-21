
// today button
const button = document.getElementById('today');
const datePicker = document.getElementById('datepicker')



const fp = flatpickr(datePicker, {
    onchange: function(salectedDate, datestr){
        console.log("selectedDate:", datestr);
    }
});



button.addEventListener('click', function(){
    datePicker.style.display = 'block';
    fp.open();
});


// passenger button

let passengerCount = 1;
const btn = document.getElementById('1-passenger');
const passengerText = document.getElementById('passenger-text');

button.addEventListener('click', function() {
    
    // passengerCount++;
    // passengerText.textContent = passengerCount + "Passenger" + (passengerCount > 1 ? 's' : '');
});




