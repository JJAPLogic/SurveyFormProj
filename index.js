var Submission = 0;
var noOption = 0;
var yesOption = 0;
var selectedOption;

var percentageOfYes = 0;
var percentageOfNo = 0;

function submit(){
  var option = document.getElementsByName("Option");
  
  for( var i = 0; i < option.length; i++){
    
    if(option[i].checked){
      selectedOption = option[i].value;
      console.log(selectedOption)
      
      if(selectedOption === "Yes"){
        yesOption += 1;
        Submission += 1;
        update();
      }else if(selectedOption === "No"){
        noOption += 1;
        Submission += 1;
        update();
      }
      
      option[i].checked = false;
    }
  }
}

function update () {
  document.getElementById("numOfSubmission").innerHTML = `Submitted: ${Submission}`;
  document.getElementById("yesOptionResult").innerHTML = `Yes: ${yesOption}`;
  document.getElementById("noOptionResult").innerHTML = `No: ${noOption}`;
  cal();
}

function cal(){
  var totalOptions = yesOption+noOption;
  
  //var result= (part/whole)*100;
  
  var percentageOfYes = (yesOption/totalOptions)*100;
  var percentageOfNo = (noOption/totalOptions)*100;
  console.log("Yes"+percentageOfYes+"No"+percentageOfNo);
  
  document.getElementById("percentageOfYes").innerHTML = `Yes: ${percentageOfYes.toFixed(2)}%`;
  document.getElementById("percentageOfNo").innerHTML = `No: ${percentageOfNo.toFixed(2)}%`;
}
