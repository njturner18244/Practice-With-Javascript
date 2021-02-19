let appointments = [];

const daysInThisMonth = function () {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
};

const saveMeeting = function () {
    const meetingDay = document.querySelector("#newMeetingDay").innerText;
    let meetingTime = document.querySelector("#newMeetingTime");
    let meetingName = document.querySelector("#newMeetingTime");

    let calender = document.querySelector("#calendar");
    let dayCell = calendar.children[parseInt(meetingDay) - 1];
    dayCell.classList.add("withEvent");
    dayCell.innerHTML += "<span></span>"

    appointments[parseInt(meetingDay) - 1].push(
        meetingTime.value + " - " + meetingName.value
    );

    meetingTime.value = "";
    meetingName.value = "";

    showAppointments(parseInt(meetingDay));
}

const showAppointments = function (day) {
    let todaysAppointments = appointments[day - 1];

    document.querySelector("#appointments").getElementsByClassName.display = "block";

    let appointmentList = document.querySelector("#appointmentList");
    appointmentList.innerHTML = "";

    for (let i = 0; i < todaysAppointments.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = todaysAppointments[i];
        appointmentList.appendChild(li);
    }
}

window.onload = function () {
    const numberOfDays = daysInThisMonth();
    let calendar = document.querySelector("#calendar")
    for (let i = 0; i < numberOfDays; i++) {
        appointments[i] = [];

        const child = document.createElement("div");
        child.className = "day"; 

        child.onclick = function (event) {
            let selected = document.querySelector("selected")
            if (selected) {
                selected.classList.remove("selected");
            }
            event.currentTarget.classList.add("selected");

            document.querySelector("#newMeetingDay").innerText = i + 1;
            document.querySelector("#newMeetingDay").style.cssText = 
            "font-size: 28px; background-color: #181818; border-radius: 3px; color: white; padding: 2px 6px";

            let todaysAppointments = appointments[i]
            if(todaysAppointments.length > 0) {
                showAppointments(i + 1)
            } else {
                document.querySelector("#appointments").style.dislay = "none";
            }
        };

        const day = document.createElement("h3");
        const dayOftheMonth = i + 1;
        day.innerText = dayOftheMonth;

        child.appendChild(day);
        calendar.appendChild(child);
    }
}
