// console.log('Mon message');
// console.error('Mon message erreur');
//document.addEventListener('click', function() {
//    alert('MESSAGE');
//});

const bouton3=document.getElementsByClassName('btn btn-primary');

if(bouton3!=null)
{
    bouton3[0].addEventListener("click", function() {
        var table = document.getElementsByTagName("table");
        //ternaire
        table[0].style.display === "none"?table[0].style.display = "block" : table[0].style.display = "none";
    });
}

/*const btns = document.getElementsByClassName('btn');
btns[0].addEventListener('click', function(){
    alert('MESSAGE');
});
*/

const boutonSupp=document.getElementById('boutonSup');

boutonSupp.addEventListener("click",function(){
  var supDate=document.getElementsByClassName("dateNaissance");
  for(i=0; i<supDate.length;i++)
  {
    supDate[i].innerHTML="";
  }
})