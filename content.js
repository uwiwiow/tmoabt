let match = window.location.pathname.match(/\/news\/([a-fA-F0-9]+)\//);
if (match && match[1].length > 12) {
    let id = match[1];
    let matchOptions = window.location.pathname.match(/\/\w+\/\w+\/(.*)/);
    if (matchOptions[1] === "cascade1") {
        matchOptions[1] = "cascade";
    }
    if (matchOptions) {
        window.location.replace("https://zonatmo.com/viewer/" + id + "/" + matchOptions[1]);
    } else window.location.replace("https://zonatmo.com/viewer/" + id);
} else console.log("TempHexID not found");