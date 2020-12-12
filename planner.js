$(document).ready(function () {

    var dayPlanner = [
        {
            hour: "9",
            time: "09",
            ampm: "am",
            notes: localStorage.getItem("9")
        },
        {
            hour: "10",
            time: "10",
            ampm: "am",
            notes: localStorage.getItem("10")
        },
        {
            hour: "11",
            time: "11",
            ampm: "am",
            notes: localStorage.getItem("11")
        },
        {
            hour: "12",
            time: "12",
            ampm: "pm",
            notes: localStorage.getItem("12")
        },
        {
            hour: "1",
            time: "13",
            ampm: "pm",
            notes: localStorage.getItem("1")
        },
        {
            hour: "2",
            time: "14",
            ampm: "pm",
            notes: localStorage.getItem("2")
        },
        {
            hour: "3",
            time: "15",
            ampm: "pm",
            notes: localStorage.getItem("3")
        },
        {
            hour: "4",
            time: "16",
            ampm: "pm",
            notes: localStorage.getItem("4")
        },
        {
            hour: "5",
            time: "17",
            ampm: "pm",
            notes: localStorage.getItem("5")
        },

    ]


    var currentDate = moment().format('dddd, MMMM Do');
    var currentHour = moment().hour();

    $("header").append(currentDate);

    function createPlanner() {

        for (let i = 0; i < dayPlanner.length; i++) {

            let hour = dayPlanner[i].hour;
            var hourMil = dayPlanner[i].time;
            var ampm = dayPlanner[i].ampm;
            let notes = dayPlanner[i].notes;


            var makeRow = $("<form>").attr({ "class": "row" });
            $(".container").append(makeRow);

            var timeField = $("<div>");
            timeField.text(hour + ":00" + ampm);
            timeField.attr({ "class": "col-md-2 hour" });

            var planBody = $("<div>");
            planBody.attr({ "class": "col-md-9" });

            var planInput = $("<textarea>");
            planInput.attr({ "class": "text" });
            console.log(notes);
            planInput.val(notes);

            if (currentHour < hourMil) {
                planInput.attr({ "class": "future" });

            } else if (currentHour == hourMil) {
                planInput.attr({ "class": "present" });
            }
            else if (currentHour > hourMil) {
                planInput.attr({ "class": "past" });
            }

            planBody.append(planInput);

            var buttonIcon = $("<i class='far fa-save fa-lg'></i>")
            var saveButton = $("<button>");
            saveButton.attr({ "class": "col-md-1 saveBtn" });
            saveButton.append(buttonIcon);
            makeRow.append(timeField, planBody, saveButton);
        }

        $(".saveBtn").on("click", function (event) {
            event.preventDefault();
            var hour = $(this).parent().find(".hour").text().split(":")[0];
            var notes = $(this).parent().find("textarea").val();
            localStorage.setItem(hour, notes);


        })
    }
    createPlanner();


})