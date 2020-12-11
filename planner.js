$(document).ready(function () {

var dayPlanner = [
    {
        id: "0",
        hour: "9",
        time: "09",
        ampm: "am",
        notes: ""
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        ampm: "am",
        notes: ""
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        ampm: "am",
        notes: ""
    },
    {
        id: "3",
        hour: "12",
        time: "12",
        ampm: "pm",
        notes: ""
    },
    {
        id: "4",
        hour: "1",
        time: "13",
        ampm: "pm",
        notes: ""
    },
    {
        id: "5",
        hour: "2",
        time: "14",
        ampm: "pm",
        notes: ""
    },
    {
        id: "6",
        hour: "3",
        time: "15",
        ampm: "pm",
        notes: ""
    },
    {
        id: "7",
        hour: "4",
        time: "16",
        ampm: "pm",
        notes: ""
    },
    {
        id: "8",
        hour: "5",
        time: "17",
        ampm: "pm",
        notes: ""
    },

]


var currentDate = moment().format('dddd, MMMM Do');
var currentHour = moment().hour();

function updateTime () {
    var currentDate = moment().format('dddd, MMMM Do');
    var currentHour = moment().hour();

    createPlanner()
}

$("header").append(currentDate);

function createPlanner() {

    for (let i = 0; i < dayPlanner.length; i++) {

        var hour = dayPlanner[i].hour;
        var hourMil = dayPlanner[i].time;
        var ampm = dayPlanner[i].ampm;
        

        var makeRow = $("<form>").attr({ "class": "row" });
        $(".container").append(makeRow);

        var timeField = $("<div>");
        timeField.text(hour + ":00" + ampm);
        timeField.attr({ "class": "col-md-2 hour" });

        var planBody = $("<div>");
        planBody.attr({ "class": "col-md-9" });

        var planInput = $("<textarea>");
        // planInput.css("background-color", "lightgray");
        planInput.attr({"class": "text"});

    
        
        if (currentHour < hourMil) {
            planInput.attr({ "class": "future"}) 

        } else if (currentHour == hourMil) {
                planInput.attr({"class": "present"})
            }
            else if (currentHour > hourMil) {
                planInput.attr({"class": "past"})
            }

            planBody.append(planInput);

            var buttonIcon = $("<i class='far fa-save fa-lg'></i>")
            var saveButton = $("<button>");
            saveButton.attr({ "class": "col-md-1 saveBtn" });
            saveButton.append(buttonIcon);
            makeRow.append(timeField, planBody, saveButton);
        }

}
createPlanner ()

const id = setInterval (updateTime, 10000);

})



// function saveNotes() {
//     localStorage.setItem("dayPlan", JSON.stringify(dayPlanner));
// }

// //Ability to view data in LocalStorage 

// function showNotes() {
//     dayPlanner.forEach(function (_thisHour) {
//         $(`#${_thisHour.id}`).val(_thisHour.reminder);
//     })
// }


// //Displays note data in the planner

// function viewNotes() {
//     var storedDay = JSON.parse(localStorage.getItem("dayPlan"));

//     if (storedDay) {
//         dayPlanner = storedDay;
//     }

//     saveNotes();
//     showNotes();
// }

// // loads header date

// // function renderRows () 
// //get current time
// //get stored notes
// //render rows with colors and notes

// dayPlanner.forEach(function(thisHour) {
//     // creates timeblocks row
//     var makeRow = $("<form>").attr({
//         "class": "row"
//     });
//     $(".container").append(makeRow);

//     // creates time field
//     var inputField = $("<div>")
//         .text(`${thisHour.hour}${thisHour.ampm}`)
//         .attr({
//             "class": "col-md-2 hour"
//     });

//     // creates scheduler data
//     var planBody = $("<div>")
//         .attr({
//             "class": "col-md-9 description p-0"
//         });

//     var planInput = $("<textarea>");
//     planBody.append(planInput);
//     planInput.attr("id", thisHour.id);

//     if (thisHour.time < moment().format("HH")) {
//        planInput.attr ({
//             "class": "past", 
//         })
//     } else if (thisHour.time === moment().format("HH")) {
//         planInput.attr({
//             "class": "present"
//         })
//     } else if (thisHour.time > moment().format("HH")) {
//         planInput.attr({
//             "class": "future"
//         })
//     }

//     // creates save button
//     var saveButton = $("<i class='far fa-save fa-lg'></i>")
//     var savePlan = $("<button>")
//         .attr({
//             "class": "col-md-1 saveBtn"
//     });
//     savePlan.append(saveButton);
//     makeRow.append(inputField, planBody, savePlan);
// })

// // loads any existing localstorage data after components created
// viewNotes();


// // saves data to be used in localStorage
// $(".saveBtn").on("click", function(event) {
//     event.preventDefault();
//     var saveIndex = $(this).siblings(".description").children(".future").attr("id");
//     dayPlanner[saveIndex].reminder = $(this).siblings(".description").children(".future").val();
//     console.log(saveIndex);
//     saveNotes();
//     showNotes();
// })