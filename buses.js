/*
function getInfo() {
    let stopId = $("#stopId").val();

    let list = $("#buses");
    list.empty();//Clean the list with #buses every time it is loaded again

    $.get(`https://judgetests.firebaseio.com/businfo/${stopId}.json`)
        .then(displayBusStopInfo)
        .catch(displayError);

    function displayBusStopInfo(busStopInfo) {
        $("#stopName").text(busStopInfo.name);//Displays the name of the bus stop in #stopName div

        let buses = busStopInfo.buses;
        for (let busNumber in buses) {
            let busMinutes = buses[busNumber];
            let listItem = $("<li>");
            listItem.text(`Bus ${busNumber} arrives in ${busMinutes} minutes`);
            list.append(listItem);
        }
    }

    function displayError(e) {
        console.dir(e.status);
        $("#stopName").text("Error");//Displays error
    }
}*/

function getInfo() {
    let stopId = $("#stopId").val();

    let list = $("#buses");
    list.empty();//Clean the list with #buses every time it is loaded again

    let getRequest = {
        method: "GET",
        url: `https://judgetests.firebaseio.com/businfo/${stopId}.json`,
        success: displayBusStopInfo,
        error: displayError
    };

    $.ajax(getRequest);

    function displayBusStopInfo(busStopInfo) {
        $("#stopName").text(busStopInfo.name);//Displays the name of the bus stop in #stopName div

        let buses = busStopInfo.buses;
        for (let busNumber in buses) {
            let busMinutes = buses[busNumber];
            let listItem = $("<li>");
            listItem.text(`Bus ${busNumber} arrives in ${busMinutes} minutes`);
            list.append(listItem);
        }
    }

    function displayError(e) {
        console.dir(e.status);
        $("#stopName").text("Error");//Displays error
    }
}