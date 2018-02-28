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
    setups[setupName].hash = {};

    for (const key in setups[setupName]) {
      setups[setupName].hash[key] =
        setups[setupName][key].VALUE || setups[setupName][key].MODEL;
    }

    render(setups);
  };

  reader.readAsText(document.querySelector(`#` + setupName).files[0]);
}

function renderSetup(data, selector) {
  document.querySelector(`table#` + selector).innerHTML = "";
  for (const key in data) {
    var row = document.createElement("tr");
    var info = key;
    var value = data[key];
    var infoTd = document.createElement("td");
    var valueTd = document.createElement("td");
    infoTd.textContent = info;
    valueTd.textContent = value;

    if (selector === "second_setup") {
      if (value > setups.first_setup[key]) {
        row.classList.add("higher");
      } else if (value < setups.first_setup.hash[key]) {
        row.classList.add("lower");
      }
    }

    row.appendChild(infoTd);
    row.appendChild(valueTd);
    document.querySelector(`table#` + selector).appendChild(row);
  }
}

function render(setups) {
  if (setups.first_setup) {
    renderSetup(setups.first_setup.hash, "first_setup");
  }

  if (setups.second_setup) {
    renderSetup(setups.second_setup.hash, "second_setup");
  }
}

var firstUpload = document.querySelector("#first_setup");
var secondUpload = document.querySelector("#second_setup");
var setups = {};

firstUpload = addEventListener("change", parseSetup);
secondUpload = addEventListener("change", parseSetup);
