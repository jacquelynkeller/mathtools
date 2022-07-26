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
    var chooseScenario=Math.floor(Math.random() * 4);
    var randomScenario;
    
    switch (chooseScenario) {
        case 0:
            randomScenario = "You work a part time job and bring in about $500 a month. Your car insurance costs $100 a month, your phone costs $80 a month and your parents charge you $50 a month in rent. You hope to go to university after high school, and have a goal of saving up as much as you can. You also have a gym membership that costs $40 a month, Spotify for $15 and Netflix for $10. In your free time, you like hanging out with friends at the movies.";
            break;
        case 1:
            randomScenario = "You work a part time job and bring in about $550 a month. Your car insurance costs $110 a month, your phone costs $85 a month and your parents charge you $60 a month in rent. You hope to go to college after high school, and are working on saving up for it. You are also saving for a new laptop for school. In your free time, you like to go to the gym, as you find it very helpful to your mental health.";
            break;
        case 2:
            randomScenario = "You work a part time job and bring in about $450 a month. Your car insurance costs $90 a month, your phone costs $60 a month and your parents charge you $20 a month in rent. You hope to go to university after high school, and are working on saving up for it. Your car is getting old and has some big repairs it will need soon.";
            break;
        case 3:
            randomScenario = "You work a part time job and bring in about $400 a month. Your car insurance costs $65 a month, your phone costs $55 a month and your parents charge you $30 a month in rent. You hope to go to college after high school, and are working on saving up for it. You are also saving up for your own car, instead of always relying on your parents. You enjoy going out for lunch each day with your friends.";
            break;
    }

    document.getElementById("scenario").value = randomScenario;
    document.getElementById("scenarioButton").disabled = true;

}   
 
function getEvent()
{
var chooseEvent=Math.floor(Math.random() * 20);
count++;

switch (chooseEvent) {
    case 0:
        chooseEvent = "You got a promotion! Your income increased by $50 a month! Luck +20";
        luck=20;
        break;
    case 1:
        chooseEvent = "Your car insurance went up. Vehicle expenses increase by $10 a month. Luck -5";
        luck=-5;
        break;
    case 2:
        chooseEvent = "Inflation is at an all time high. Your rent increases by $10 a month. Luck -5";
        luck=-5;
        break;
    case 3:
        chooseEvent = "Tuition is increasing. You must increase your savings budget by $20 a month. Luck -5";
        luck=-5;
        break;
    case 4:
        chooseEvent = "You got into a car accident! You're okay, but the new premium is an additional $40 a month. Luck -18";
        luck=-18;
        break;
    case 5:
        chooseEvent = "You worked extra hours this month! You have an addition $30 to add to your budget. Luck +15";
        luck=15;
        break;
    case 6:
        chooseEvent = "You're an excellent driver! Car insurance goes down. Vehicle expenses decrease by $5 a month. Luck +3";
        luck=+3;
        break;
    case 7:
        chooseEvent = "Your car is making a funny sound. It's only a matter of time until it needs to be replaced. Vehicle exenses increased $10 a month. Luck -5";
        luck=-5;
        break;
    case 8:
        chooseEvent = "Inflation is at an all time high. Gas is higher than every! Vehicle expenses increase by $10 a month. Luck -5";
        luck=-5;
        break;
    case 9:
        chooseEvent = "You got a scholarship! You no longer need to put away as much money to your education savings! Decrease your education savings by $80. Luck +30";
        luck=30;
        break;
    case 10:
        chooseEvent = "It's a slow month at work. You got less hours than expected. Decrease income by $50. Luck -20";
        luck=-10;
        break;
    case 11:
        chooseEvent = "You got laid off from work. You income is half of what it used to be. Luck -50";
        luck=-50;
        break;
    case 12:
        chooseEvent = "You got a raise! Your income goes up by $10. Luck +5";
        luck=5;
        break;
    case 13:
        chooseEvent = "Your parents have decided to pay for your phone. Your phone bill is now $0. Luck +50";
        luck=5;
        break;
    case 14:
        chooseEvent = "You got the student discount on your phone plan! Decrease phone bill by $15. Luck +10";
        luck=10;
        break;
    case 15:
        chooseEvent = "Your phone broke! Your phone bill goes up by $10 to replace is. Luck -10";
        luck=-10;
        break;
    case 16:
        chooseEvent = "One of your monthly memberships has increased it's price by $5. Luck -2";
        luck=-2;
        break;
    case 17:
        chooseEvent = "You finally bought something you have been saving up for the last few years! Reduce general savings by $30, if you would like. Luck - no change";
        luck=0;
        break;
    case 18:
        chooseEvent = "Your car repair cost less than expected! Vehicle expenses decrease $10. Luck +5";
        luck=5;
        break;
    case 19:
        chooseEvent = "The cost of entertainment has increased significantly. Adjust your budget as necessary. Luck -2";
        luck=-2;
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
