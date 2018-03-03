function parseIni(string) {
  // Start with an object to hold the top-level fields
  let result = {};
  let section = result;
  string.split(/\r?\n/).forEach(line => {
    let match;
    if ((match = line.match(/^(\w+)=(.*)$/))) {
      section[match[1]] = match[2];
    } else if ((match = line.match(/^\[(.*)\]$/))) {
      section = result[match[1]] = {};
    } else if (!/^\s*(;.*)?$/.test(line)) {
      throw new Error("Line '" + line + "' is not valid.");
    }
  });
  return result;
}

function parseSetup(event) {
  var setupName = event.target.getAttribute("id");
  var reader = new FileReader();
  reader.onload = function(e) {
    var text = reader.result;
    setups[setupName] = parseIni(text);

    parsedSetups[setupName] = {};

    for (const key in setups[setupName]) {
      parsedSetups[setupName][key] =
        setups[setupName][key].VALUE || setups[setupName][key].MODEL;
    }

    render(parsedSetups);
  };

  reader.readAsText(document.querySelector(`#` + setupName).files[0]);
}

function renderSetup(data, selector) {
  document.querySelector("table#" + selector).innerHTML = "";
  for (const key in data[selector]) {
    if (key === "CAR") {
      document.getElementById("car_name_" + selector).innerHTML =
        data[selector][key];
    }

    var row = document.createElement("tr");
    var info = key;
    var value = data[selector][key];
    var infoTd = document.createElement("td");
    var valueTd = document.createElement("td");
    infoTd.textContent = info;
    valueTd.textContent = value;

    if (selector === "second_setup") {
      if (value > data["first_setup"][key]) {
        row.classList.add("higher");
      } else if (value < data["first_setup"][key]) {
        row.classList.add("lower");
      }
    }

    row.appendChild(infoTd);
    row.appendChild(valueTd);
    document.querySelector(`table#` + selector).appendChild(row);
  }
}

function render(setups) {
  console.log(setups);
  if (setups.first_setup) {
    renderSetup(setups, "first_setup");
  }

  if (setups.second_setup) {
    renderSetup(setups, "second_setup");
  }
}

var firstUpload = document.querySelector("#first_setup");
var secondUpload = document.querySelector("#second_setup");
var setups = {};
var parsedSetups = {};

firstUpload = addEventListener("change", parseSetup);
secondUpload = addEventListener("change", parseSetup);
