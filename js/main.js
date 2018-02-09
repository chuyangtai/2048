
// 生成二维数组
var a = new Array();
for(var i=0;i<4;i++){
  a[i] = new Array();
  for(var j=0;j<4;j++){
    a[i][j] = 0;
  }
}

//随机选择队列
var b = [[0,0],[0,1],[0,2],[0,3],[1,0],[1,1],[1,2],[1,3],[2,0],[2,1],[2,2],
  [2,3],[3,0],[3,1],[3,2],[3,3]]

//初始化
init()


function init(){
  showNumber();
  showNumber();
}


//向上
function up() {
  for(var i=0;i<4; i++){
    var ctrStack = [];
    for(var j=0;j<4;j++){
      if(a[i][j] != 0 ){
        ctrStack.push(a[i][j]);
      }
    }
    // if(ctrStack.length > 0){
    //   if(ctrStack == )
    // }

  }

  showNumber();
}


// 数字相加
function add(arr){
  if(arr.length >2){
    if(arr[0] == arr[1]){
    }
  }
}


// 将位置与数组对接，并在页面显示文字
function showNumber(){
  var getPos = randomPosition();
  if(getPos == 0){
    return false;
  }else{
    a[getPos[0]][getPos[1]] = randomValue();
    console.log(a[getPos[0]][getPos[1]]);
    str = '.block-'+getPos[0]+'-'+getPos[1];
    $(str).append(a[getPos[0]][getPos[1]])
    var index = getPos[2];
    b.splice(index,1);
    return true;
  }
}


//随机生成位置
function randomPosition(){
  if(b.length > 0){
    var index = Math.floor(Math.random()*b.length)
    b[index].push(index);
    return b[index];
  }else{
    return 0;
  }
}


// 随机生成2，4 值
function randomValue(){
  var values = [2,4];
  var item = values[Math.round(Math.random())];
  return item
}

