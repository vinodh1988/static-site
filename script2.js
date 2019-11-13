items=[];
images=[
    "12cadmin.jpg",
    "12cback.jpg",
    "angular.jpg",
    "jsp.jpg",
    "plsql.jpg",
    "java.jpg",
    "node.jpg",
    "sql.jpg",
    "sa.jpg",
    "mysql.jpg"
]

setInterval(slideshow,3000);

function slideshow(){
    var index=Math.floor(Math.random()*10);
    document.images[0].src="projectimages/"+images[index];
}

    function addItem(){
        var a=document.forms[0].item.value;
        items.push(a);
        
        code="";
        for(var x in items){
            code+="<li>"+items[x]+"</li>";
        }
        console.log(code);
        document.getElementById("olist").innerHTML=code;
    }

$(document).ready(
  function(){
      $('.theme').click(
        function(){
            var type= $(this).text();
            if(type=="theme1")
        $('#form').css("background-color","yellow");
           else if(type=="theme2")
        $('#form').css("background-color","lightgreen");
            else
        $('#form').css("background-color","lightgrey");
            
                
        }
      )
      
  }
)