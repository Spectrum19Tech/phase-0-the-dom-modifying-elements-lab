// Write your code here!
document.getElementById("main").remove();
const newHeader = document.createElement('h1');
newHeader.innerHTML = "Jonathan is the champion";
newHeader.id = "victory";
document.body.append(newHeader);