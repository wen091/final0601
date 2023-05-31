//南瓜的葉子
let points1 =[[2, 15], [3, 14], [6, 14],[9, 12],[7, 12],[8, 10],[4, 12],[3, 10],[1, 12],[-2, 9],[-3, 12],[-7, 10],[-5, 13],[-10, 12],[-7, 14],[-6, 14],[-4, 15],[-2, 15],[-1, 16]];
//南瓜的蒂
let points2 = [[-1, 16],[-3, 22],[0,23],[2, 15],[3,13],[2,14],[1,13],[0,14],[-1,13],[-1,14],[-2,14],[-1,16]];
//南瓜的眼睛
let points3 = [[-4,1],[-7,1],[-4,6],[-4,1]]  //左眼
let points4 = [[5,1],[7,3],[4,6],[5,1]];  //右眼
//南瓜的鼻子
let points5 = [[-2,-4],[0,1],[2,-4],[-2,-4]];
//南瓜的嘴巴
let points6 = [[2,-7],[4,-11],[6,-7],[8,-9],[11,-7],[9,-11],[6,-17],[3,-14],[0,-19],[-4,-14],[-6,-16],[-9,-10],[-10,-5],[-7,-9],[-6,-8],[-5,-11],[-3,-8],[0,-11],[2,-7]];
//南瓜的頭
let points7 = [[9,12],[12,8],[14,3],[15,-2],[15,-8],[13,-14],[11,-17],[9,-20],[5,-22],[0,-23],[-4,-22],[-7,-21],[-9,-20],[-12,-18],[-14,-15],[-15,-12],[-16,-6],[-15,1],[-14,5],[-12,9],[-10,12]];
// 宣告子彈物件

//+++++++++++++設定南瓜每個部位會"填滿的顏色"+++++++++++++
var fill_colors1 = "064789-427aa1-ebf2fa-679436-a5be00".split("-").map(a=>"#"+a)  //充滿顏色時會有的顏色選項
var fill_colors2 = "d2ff96-edff7a-e8d33f-d17b0f".split("-").map(a=>"#"+a)  //充滿顏色時會有的顏色選項
var fill_colors3 = "502419-c7cb85-e7a977-ebbe9b".split("-").map(a=>"#"+a)  //充滿顏色時會有的顏色選項
var fill_colors4 = "502419-c7cb85-e7a977-ebbe9b".split("-").map(a=>"#"+a)  //充滿顏色時會有的顏色選項
var fill_colors5 = "fa7921-fe9920-b9a44c-566e3d-0c4767".split("-").map(a=>"#"+a)  //充滿顏色時會有的顏色選項
var fill_colors6 = "fa7921-fe9920-b9a44c-566e3d-0c4767".split("-").map(a=>"#"+a)  //充滿顏色時會有的顏色選項
var fill_colors7 = "ef476f-ffd166-06d6a0-118ab2-073b4c".split("-").map(a=>"#"+a)  //充滿顏色時會有的顏色選項
//+++++++++++++設定南瓜每個部位"邊框(線)的顏色"+++++++++++++
var line_colors1 = "044389-fcff4b-ffad05-7cafc4-5995ed".split("-").map(a=>"#"+a)  //南瓜葉子的顏色選項
var line_colors2 = "cdb4db-ffc8dd-ffafcc-bde0fe-a2d2ff".split("-").map(a=>"#"+a)  //南瓜蒂的顏色選項
var line_colors3 = "22223b-432818-132a13".split("-").map(a=>"#"+a)  //南瓜左眼的顏色選項
var line_colors4 = "22223b-432818-132a13".split("-").map(a=>"#"+a)  //南瓜右眼的顏色選項
var line_colors5 = "03071e-212529".split("-").map(a=>"#"+a)  //南瓜鼻子的顏色選項
var line_colors6 = "463f3a-8a817c-bcb8b1-f4f3ee-e0afa0".split("-").map(a=>"#"+a)  //南瓜嘴巴的顏色選項
var line_colors7 = "ccd5ae-e9edc9-fefae0-faedcd-d4a373".split("-").map(a=>"#"+a)  //南瓜頭的顏色選項


//++++++畫points(南瓜)所有"點"的物件變數++++++
var ball  //"目前要處理"的元件，暫時放在ball裡面
var balls = []  //把產生的"所有"的物件，為物件的倉庫，所有物件的資料都在裡面

//++++++設定飛彈物件的變數+++++++++
var bullet   //"目前要處理"的元件，暫時放在bullet裡面
var bullets = []  //把產生的"所有"的物件，為物件的倉庫，所有物件的資料都在裡面
//+++++++++++++++++++++++++++++++++

//++++++設定毛毛蟲物件的變數+++++++++
var caterpillar   //"目前要處理"的元件，暫時放在caterpillar裡面
var caterpillars = []  //把產生的"所有"的物件，為物件的倉庫，所有物件的資料都在裡面
//+++++++++++++++++++++++++++++++++

//++++++++++++設定砲台的位置
var starP
//+++++++++++++++

var score = 0

//宣告陣列
function setup() {
  createCanvas(windowWidth, windowHeight);
  starP= createVector(width/2,height/2) //預設砲台的位置為(width/2,height/2)
  for (var i=0 ; i<10 ; i=i+1){  //i=0、1，2，3，4....8，9 //迴圈繞30次
    ball = new Obj({})  //產生一個Obj class元件
    balls.push(ball)  //把ball裡面的所有物件放入到ball陣列內
  }
  for(var i=0;i<20;i=i+1){
    caterpillar = new Caterpillar({})
    caterpillars.push(caterpillar) //把caterpillar的物件放入到caterpillars的陣列內
  }
}
function draw() {
  background("#caffbf");  //有背景顏色，才不會有暫留
  //for (var j = 0 ; j < balls.length ; j =  j+1 ){
  //  ball = balls[j]
  //  ball.draw()  //呼叫物件畫圖
  //  ball.update()  //呼叫物件移動
  //}
 
  if(keyIsPressed){
    if(key=="ArrowLeft"|| key=="a"){ //按下鍵盤的往左鍵
      starP.x=starP.x-5
    }
    if(key=="ArrowRight"|| key=="d"){//按下鍵盤的右鍵
      starP.x=starP.x+5
    }
    if(key=="ArrowUp"|| key=="w"){//按下鍵盤的往上鍵
      starP.y=starP.y-5
    }
    if(key=="ArrowDown"|| key=="s"){//按下鍵盤的往下鍵
      starP.y=starP.y+5
    }

  }

//南瓜的顯示(產生)
  for (let ball of balls)  //只要是陣列的方式，都可以利用此方式
  {  
    ball.draw()  //繪製南瓜
    ball.update()  //更新南瓜位置
    for(let bullet of bullets){  //檢查每一個飛彈物件
      if(ball.isBallInRanger(bullet.p.x,bullet.p.y)){   //飛彈物件有沒有接觸現在的ball//如果ball.isBallInRanger()為"真"
        balls.splice(balls.indexOf(ball,1))  //從倉庫balls取出被滑鼠按到的"物件編號(balls.indexOf(ball))"，來選擇1個刪除的物件
        bullets.splice(bullets.indexOf(bullet,1))
        score = score + 1
      }
    }
  }
//飛彈的顯示(產生)
  for (let bullet of bullets)  //只要是陣列的方式，都可以利用此方式
  {  
    bullet.draw()  //繪製子彈
    bullet.update()  //更新子彈位置
  }
  // if(Bullet){
  //   Bullet.draw();  //繪製子彈
  //   Bullet.update();  //更新子彈位置
  // }

  //毛毛蟲的顯示(產生)
  for(let caterpillar of caterpillars)//只要是陣列的方式，都可以利用此方式處理
   {
    if(caterpillar.dead==true && caterpillar.timenum>40000000){
      caterpillar.splice(caterpillars.index0f(caterpillar),1)//從倉庫monsters取出，只取一個
    }
    caterpillar.draw()
    caterpillar.update()
    for(let bullet of bullets){  //檢查每一個飛彈物件
      if(caterpillar.isBallInRanger(bullet.p.x,bullet.p.y)){ //飛彈物件有沒有接觸現在的ball現在的ball
        //caterpillars.splice(caterpillars.indexOf(caterpillar),1)//從倉庫balls取出被滑鼠按到的物件編號(balls.indexOf(ball))只取一個
        bullets.splice(bullets.indexOf(bullet),1)
        score = score + 1
        caterpillar.dead =true //代表該物件死掉
      } 
    }
   }


  textSize(100)  //文字(分數)大小
  text(score,100,100)  //在座標為(100,100)上，顯示score分數內容
  push()  //重新規劃原點(0,0)，在視窗的中間
    //++++++++計算角度+++++++++
    let dx = mouseX - width/2
    let dy = mouseY - height/2
    let angle = atan2(dy,dx)  
    translate(starP.x,starP.y) //設定原點(砲台的中心點)放置在視窗中間
    strokeWeight(3) //設定線條粗細
    fill("#E3D8E8")  //設定下面圖形填滿的顏色
    rotate(angle)
    beginShape()  //設定星星(發射球的發射器) 
      curveVertex(72,24)
      curveVertex(54,72)
      curveVertex(5,81)
      curveVertex(51,106)
      curveVertex(44,154)
      curveVertex(56,112)
      curveVertex(102,154)
      curveVertex(88,96)
      curveVertex(128,82)
      curveVertex(82,72)
    endShape(CLOSE)
  pop()  //恢復原本的設定，原點(0,0)在視窗的左上角
}

function mousePressed(){  

  //+++++在滑鼠按下的時候產生一個物件(南瓜)+++++
  //ball = new Obj({
  //  p:{x:mouseX,y:mouseY}  //p代表位置(x-->滑鼠的x座標，y-->滑鼠的y座標)
  //})  //在滑鼠按下的地方，產生一個新的Obj class元件
  //balls.push(ball)  //把ball裡面的所有物件放入到ball陣列內(丟到倉庫)

  //+++++在物件上按下滑鼠，一個物件(南瓜)消失，分數加1分+++++
//   for(let ball of balls){  //檢查每一個物件
//     if(ball.isBallInRanger(mouseX,mouseY)){   //如果ball.isBallInRanger()為"真"
//       balls.splice(balls.indexOf(ball,1))  //從倉庫balls取出被滑鼠按到的"物件編號(balls.indexOf(ball))"，來選擇1個刪除的物件
//       score = score + 1
//     }
//   }

  //+++++++++++++按一下產生一個飛彈+++++++++++++
  bullet = new Bullet({
    r:20,
    color:"#FFFFFF",
  })  //在滑鼠按下的地方，產生一個新的Bullet class元件-->產生一個飛彈
  bullets.push(bullet)  //把bullet的物件放到bullet陣列中(丟到倉庫))
}
function keyPressed(){
  if(key==" "){ //按下空白建，發射飛彈，其實跟按下滑鼠一樣
    bullet = new Bullet({})
    bullets.push(bullet)
  }
}