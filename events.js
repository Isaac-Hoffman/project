function showVal(){
    console.log(document.getElementById('name').value);
    alert("hello");
}
document.getElementById('theButton').addEventListener("click", showVal)
//write as showVal not showVal()
var myTxtBox = document.getElementById('name');
myTxtBox.addEventListener("focus", newFunction);
function newFunction(){
    myTxtBox.value = "Clicked";
}
var secondButton = document.getElementById('button2');
secondButton.addEventListener("click", function(){
    var divText = document.getElementById('theDiv').innerHTML;
    divText += " new stuff ";
    document.getElementById('theDiv').innerHTML = divText;
    alert(divText);
});
document.getElementById('lists').addEventListener('click', function(){
    var listsItems = document.getElementsByTagName('li');
    console.log("Using innerHTML:")
    var newV = document.getElementById('theList').innerHTML;
    console.log(newV);
    console.log("Using textContent:")
    var newV = document.getElementById('theList').textContent;
    console.log(newV);
    var item = document.getElementById('addAnItem').value;
    for (let i = 0; i < listsItems.length; i++){
        console.log(listsItems[i].innerHTML);
    }
    document.getElementById('theList').innerHTML += "<li>" + item + "</li>";
});