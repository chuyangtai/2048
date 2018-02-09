function DivBlcok(className) {
    this.newDiv = document.createElement('div');
    this.newDiv.classList.add("div-block");
    if (className) {
        this.newDiv.classList.add(className);
    }
    this.changeNumAndColor = function (num) {
        this.num=num;
        this.newDiv.innerText = num;
        if (num == 2) {
            this.newDiv.style.backgroundColor = '#f1e5d7';
        } else if (num == 4) {
            this.newDiv.style.backgroundColor = '#f2e0c3';
        } else if (num == 8) {
            this.newDiv.style.backgroundColor = '#ffad6d';
            this.newDiv.style.color = "#fff";
        } else if (num == 16) {
            this.newDiv.style.backgroundColor = '#ff854a';
            this.newDiv.style.color = "#fff";
        } else if (num == 32) {
            this.newDiv.style.backgroundColor = '#ff7150';
            this.newDiv.style.color = "#fff";
        } else if (num == 64) {
            this.newDiv.style.backgroundColor = '#fe4e25';
            this.newDiv.style.color = "#fff";
        } else if (num == 128) {
            this.newDiv.style.backgroundColor = '#fbd864';
            this.newDiv.style.color = "#fff";
        } else if (num > 128) {
            this.newDiv.style.backgroundColor = '#efbf2c';
            this.newDiv.style.color = "#fff";
        }
    }
    var scene = document.getElementById("scene");
    scene.appendChild(this.newDiv);

}

//随机数生成
function randerNum() {
    var r = Math.ceil(Math.random() * 2);
    //console.log(array);
    return r * 2;
}
var divArrEmpty=[];
var divArrNum=[];
//随机块对象生成
function randerObject() {
    var p=Math.floor(Math.random() * 16);
    var divObject=divArrEmpty[p];
    divArrNum.push(divObject);
    divArrEmpty.splice(p,1);
    return divObject;
}

//生成画布
function sence(x, y) {
    for (var i = 0; i < x; i++) {
        for (var j = 0; j < y; j++) {
            var className = 'x' + (i + 1) +'y'+  (j + 1);
            divArrEmpty.push(new DivBlcok('', className));
        }
    }
}

//初始化
function init(n) {
    sence(4, 4);
    console.log(divArrEmpty);
    for (var j = 0; j < n; j++) {
        var divObject = randerObject();
        divObject.changeNumAndColor(randerNum());
        console.log(divObject);
    }
}


init(2);