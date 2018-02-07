function DivBlcok(num) {
   this.newDiv= document.createElement('div');
   this.newDiv.classList.add("div-block");
   this.newDiv.innerText=num;
   var scene=document.getElementById("scene");
   scene.appendChild(this.newDiv);
}


function init() {
    var div=new DivBlcok(2);
    var div=new DivBlcok(8);
}

