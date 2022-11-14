var prin = 500;
var i= 7/100;
var loan, t = 15, intAmount;
loan= 1000-prin;


const compoundfreq = [1,12,26,52,365];
const time = [1,12,52,365];


var slider = document.getElementById("principle");
var output = document.getElementById("p");
output.innerHTML = slider.value; // Display the default slider value

   
var slider2 = document.getElementById("rate");
var output2 = document.getElementById("r");
output2.innerHTML = slider2.value; // Display the default slider value
    
var slider3 = document.getElementById("time");
var output3 = document.getElementById("t");
output3.innerHTML = slider3.value; // Display the default slider value


var output4 = document.getElementById("loan");
    output4.innerHTML = loan;

update();
    
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
    prin = +output.innerHTML;
    loan = 1000 - prin;
    output4 = document.getElementById("loan");
    output4.innerHTML = loan;

}

slider2.oninput = function() {
    output2.innerHTML = this.value;
    i= +output2.innerHTML / 100;
}


slider3.oninput = function() {
    output3.innerHTML = this.value;
    t = +output3.innerHTML;
}


function update(){
    var select = document.getElementById('freq');
    var option = select.options[select.selectedIndex];
    var x = document.getElementById('freq').value;
    const freqIndex = +x;

    var select = document.getElementById('timetype');
    var option2 = select.options[select.selectedIndex];
    var y = document.getElementById('timetype').value;
    const timeindex = +y;


    if(document.getElementById("compoundInterestRadio").checked==true)
    {
        intAmount = loan * Math.pow(1+i/compoundfreq[freqIndex],compoundfreq[freqIndex]*(t/time[timeindex])) - loan;  
    }

    else 
    {
        intAmount = loan*(i/compoundfreq[freqIndex])*(t/time[timeindex]);
    }

    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(function() {
        drawBasic(prin,loan,intAmount)
     });
     if(timeindex == 3 ){
        var maxvals = 1010
       }
       else if(timeindex == 2){
        var maxvals = 1200
       }
       else if(timeindex == 1){
        var maxvals = 1500
       }
       else{
        var maxvals = 4000

    }

    function drawBasic(principle, loan, interest) {
          var data = google.visualization.arrayToDataTable([
            ['', 'Principle', 'Loan Amount', 'Interest'],
            ['', principle, loan, interest]
          ]);
    
          var options = {
            chartArea: {width: '50%'},
            isStacked: true,
            vAxis: {
                minValue: 0,
                maxValue: maxvals,
                format: 'currency',
                textStyle : {
                    fontSize: 14 // or the number you want
                }
            },
            series:{
                0:{color:'#9a77bb'},
                1:{color:'#42daf5'},
                2:{color:'#e02d00'}
            }
          };
    
          var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    
          chart.draw(data, options);
    }
    const cost = 1000+(+intAmount);
    document.getElementById("value").innerHTML = cost.toFixed(2);
}
    
