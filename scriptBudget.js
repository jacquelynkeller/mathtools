<script src="https://randojs.com/2.0.0.js"></script>
<script>
    var count=0;

    function getScenario()
        {
            var chooseScenario=rando(4);
  
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
            count++;
            var chooseEvent[]=randoSequence(5);
            var currentEvent = chooseEvent[count];
            
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
                
            
            document.getElementById( "scenario" ).value = randomScenario;
        }
  
  
</script>
