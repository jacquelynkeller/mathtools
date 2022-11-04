<script src="https://randojs.com/2.0.0.js"></script>
<script>
    var count=0;

    function copyTextScenario() {
        var copyText = document.getElementById("scenario");

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
            var chooseScenario=rando(4);
            var randomScenario;
  
            switch (chooseScenario) {
              case 0:
                randomScenario = "test 1"
                break;
               case 1:
                randomScenario = "test 1"
                break;
               case 2:
                randomScenario = "test 2"
                break;
               case 3:
                randomScenario = "test 3"
                break;
               case 4:
                randomScenario = "test 4"
                break;
                
            const textarea = document.getElementById('scenario');
            textarea.value = randomScenario;
        }
  
    
        function getEvent()
        {
            var chooseEvent[]=randoSequence(5);
            var currentEvent = chooseEvent[count];
            count++;
            var chooseEvent;
                       
            switch (chooseScenario) {
              case 0:
                chooseEvent = "test 1"
                break;
               case 1:
                chooseEvent = "test 1"
                break;
               case 2:
                chooseEvent = "test 2"
                break;
               case 3:
                chooseEvent = "test 3"
                break;
               case 4:
                chooseEvent = "test 4"
                break;
            
            document.getElementById( "event" ).value = chooseEvent;
        }
  
  
</script>
