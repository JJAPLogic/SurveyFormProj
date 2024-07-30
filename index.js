let submission = 0;
let yesOption = 0;
let noOption = 0;
let percentageOfYes = 0;
let percentageOfNo = 0;

let selectedOption;

// Load data from local storage
window.onload = () => {
  const data = localStorage.getItem("surveyData");
  if (data) {
    const parsedData = JSON.parse(data);
    submission = parsedData.submission;
    yesOption = parsedData.yesOption;
    noOption = parsedData.noOption;
    update();
  }
};

const submit = () => {
  const options = document.getElementsByName("Option");

  options.forEach((option) => {
    if (option.checked) {
      selectedOption = option.value;

      if (selectedOption === "Yes") {
        yesOption += 1;
      } else if (selectedOption === "No") {
        noOption += 1;
      }
      submission += 1;

      option.checked = false;

      // Save data to local storage
      const data = {
        submission,
        yesOption,
        noOption,
      };
      localStorage.setItem("surveyData", JSON.stringify(data));
      update();
    }
  });
};

const update = () => {
  document.getElementById(
    "numOfSubmission"
  ).innerHTML = `Submitted: ${submission}`;
  document.getElementById("yesOptionResult").innerHTML = `Yes: ${yesOption}`;
  document.getElementById("noOptionResult").innerHTML = `No: ${noOption}`;
  calculatePercentages();
};

const calculatePercentages = () => {
  const totalOptions = yesOption + noOption;

  if (totalOptions > 0) {
    percentageOfYes = (yesOption / totalOptions) * 100;
    percentageOfNo = (noOption / totalOptions) * 100;
  } else {
    percentageOfYes = 0;
    percentageOfNo = 0;
  }

  console.log(
    `Yes: ${percentageOfYes.toFixed(2)}% No: ${percentageOfNo.toFixed(2)}%`
  );

  document.getElementById(
    "percentageOfYes"
  ).innerHTML = `Yes: ${percentageOfYes.toFixed(2)}%`;
  document.getElementById(
    "percentageOfNo"
  ).innerHTML = `No: ${percentageOfNo.toFixed(2)}%`;

  document.getElementById("barYes").style.width = `${percentageOfYes.toFixed(
    2
  )}%`;
  document.getElementById("barYes").innerText = `${percentageOfYes.toFixed(
    2
  )}%`;

  document.getElementById("barNo").style.width = `${percentageOfNo.toFixed(
    2
  )}%`;
  document.getElementById("barNo").innerText = `${percentageOfNo.toFixed(2)}%`;
};
