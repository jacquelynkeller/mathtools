var count=0;
var luckScore=0;

function copyTextScenario() 
{
    var copyText = document.getElementById("scenario");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    alert("Copied the text: " + copyText.value);
}

function copyTextEvent() 
{
    var copyText = document.getElementById("event");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    alert("Copied the text: " + copyText.value);
}

function getScenario()
{
    var chooseScenario=Math.floor(Math.random() * 5);
    var randomScenario;
    
    switch (chooseScenario) {
        case 0:
            randomScenario = "test 0";
            break;
        case 1:
            randomScenario = "test 1";
            break;
        case 2:
            randomScenario = "test 2";
            break;
        case 3:
            randomScenario = "test 3";
            break;
        case 4:
            randomScenario = "test 4";
            break;
    }

    document.getElementById("scenario").value = randomScenario;
    document.getElementById("scenarioButton").disabled = true;

}   
 
function getEvent()
{
var chooseEvent=Math.floor(Math.random() * 5);
count++;

switch (chooseEvent) {
    case 0:
        chooseEvent = "You got a promotion! Your income increased by $50 a month!";
        luck=10;
        break;
    case 1:
        chooseEvent = "Your car insurance went up. Vehicle expenses increase by $10 a month.";
        luck=-5;
        break;
    case 2:
        chooseEvent = "test 3";
        luck=-10;
        break;
    case 3:
        chooseEvent = "test 4";
        luck=-40;
        break;
    case 4:
        chooseEvent = "test 5";
        luck=30;
        break;
}         

if (count==1)
{
    document.getElementById( "event" ).value = chooseEvent;
    document.getElementById( "luck" ).value=luck;
}
            
else
{
    luckScore = document.getElementById( "luck" ).value;
    luckScore = Number(luckScore) + Number(luck);
    document.getElementById( "luck" ).value=luckScore;
    document.getElementById( "event" ).value += "\n" + chooseEvent;
}

if(count==5)
    document.getElementById("eventButton").disabled = true;
}
