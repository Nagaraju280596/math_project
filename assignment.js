$(document).ready(
    function(){
        $('#numsubmit').click(function(){
            let num1=$('#numfiled').val();
            $.get(
                "http://numbersapi.com/"+num1,
                function(data){
                    $('#result').text(data)

                }
            )
        })


        $('#mathfact').click(function(){
            let num2=$('#numfiled').val();
            $.get(
                "http://numbersapi.com/"+num2+"/math",
                function(data){
                    $('#result').text(data)
                }
        
            )
        })
        $('#datefact').click(function(){
            console.log("yess")
            let date=$('#datefield').val();
            let month=$('#monthfiled').val();
            $.get(
                "http://numbersapi.com/"+date+"/"+month,
                function(data){
                    console.log("yess")
                    $('#result').text(data)
                }
            )
        })
    }
)
