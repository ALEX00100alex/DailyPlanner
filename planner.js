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

// get current date and append to planner
var currentDate = moment().format('dddd, MMMM Do');
$("header").append(currentDate);

$(document).ready(function () {

    for (let i = 0; i < dayPlanner.length; i++) {

        var hour = dayPlanner[i].hour;
        var ampm = dayPlanner[i].ampm;

        var makeRow = $("<form>").attr({ "class": "row" });
        $(".container").append(makeRow);

        var inputField = $("<div>");
        inputField.text(hour + ":00" + ampm);
        inputField.attr({ "class": "col-md-2 hour" });

        var planBody = $("<div>");
        planBody.attr({ "class": "col-md-9" });

        var planInput = $("<textarea>");
        planInput.css("background-color", "lightgray");
        planBody.append(planInput);
        // planInput.attr("id", dayPlanner.id);
    
        var buttonIcon = $("<i class='far fa-save fa-lg'></i>")
        var saveButton = $("<button>");
        saveButton.attr({ "class": "col-md-1 saveBtn" });
        saveButton.append(buttonIcon);
        makeRow.append(inputField, planBody, saveButton);

    }
})
