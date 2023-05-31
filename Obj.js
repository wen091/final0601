//class:類別、例子
class Obj{  //宣告一個類別，針對畫的圖案(南瓜)
    constructor(args){  //預設值，基本資料(物件的顏色、移動速度、大小、初始顯示位置)
      //this.p = args.p || {x:random(50,width) , y:random(50,height)} //描述該物件的"初始位置"，||(or)，當產生一個物件時，傳給位置參數，則使用該參數，如果沒有傳該參數，就已||(or)後面設定產出
                                                                    //x軸:寬度、y軸:高度  //由(x=50、y=50)位置開始顯示
      this.p = args.p || createVector(random(50,width) , random(50,height))  //把原本的{x:...,y:...}，改用"向量"呈現
      //this.v = {x:random(2,-2) , y:random(2,-2)}  //設定一個物件的"移動速度"  //移動速度為x(2~-2)，y(2~-2)之間
      this.v = createVector(random(2,-2) , random(2,-2))  //把原本的{x:...,y:...}，改用"向量"呈現
      this.size = random(0.5,10)  //一個物件的放大倍率  //放大倍率為(0.5~10)
      
      this.color1= random(fill_colors1)  //充滿顏色
      this.color2= random(fill_colors2)  //充滿顏色
      this.color3= random(fill_colors3)  //充滿顏色
      this.color4= random(fill_colors4)  //充滿顏色
      this.color5= random(fill_colors5)  //充滿顏色
      this.color6= random(fill_colors6)  //充滿顏色
      this.color7= random(fill_colors7)  //充滿顏色
  
      this.stroke1 = random(line_colors1)  //葉子外框線條顏色
      this.stroke2 = random(line_colors2)  //蒂外框線條顏色
      this.stroke3 = random(line_colors3)  //左眼外框線條顏色
      this.stroke4 = random(line_colors4)  //右眼外框線條顏色
      this.stroke5 = random(line_colors5)  //鼻子外框線條顏色
      this.stroke6 = random(line_colors6)  //嘴巴外框線條顏色
      this.stroke7 = random(line_colors7)  //頭外框線條顏色
    }
    draw(){  //劃出單一個物件形狀
      push()  //執行push()後，依照我的設定，設定原點(0,0)的位置。
        translate(this.p.x,this.p.y)  //以該物件位置為原點
        scale(this.v.x<0?1:-1,-1) //x軸的放大倍率，如果this.v.x<0條件成立，值為1，否則為-1，y軸的-1，為上下翻轉
        fill(this.color1)  //填滿顏色
        fill(this.color2)
        fill(this.color3)
        fill(this.color4)
        fill(this.color5)
        fill(this.color6)
        fill(this.color7)
  
        stroke(this.stroke1) //線條顏色  
        stroke(this.stroke2) 
        stroke(this.stroke3) 
        stroke(this.stroke4) 
        stroke(this.stroke5) 
        stroke(this.stroke6) 
        stroke(this.stroke7) 
  
        strokeWeight(4)  //線條粗細 
        beginShape()
          //  scale(1, -1);  //上下翻轉
          for(var k=0 ; k < points1.length ; k=k+1){
            //line(points[k][0]*this.size,points[k][1]*this.size,points[k][2]*this.size) 
            //vertex(points[k][0]*this.size,points[k][1]*this.size)  //只要設定一個點，當指令到ends
            curveVertex(points1[k][0]*this.size,points1[k][1]*this.size)  //畫線為圓弧方式畫圓
          }
          for(var k=0 ; k<points2.length ; k=k+1){
            curveVertex(points2[k][0]*this.size,points2[k][1]*this.size)  //畫線為圓弧方式畫圓
          }
          for(var k=0 ; k<points3.length ; k=k+1){
            curveVertex(points3[k][0]*this.size,points3[k][1]*this.size)  //畫線為圓弧方式畫圓
          }
          for(var k=0 ; k<points3.length ; k=k+1){
            curveVertex(points3[k][0]*this.size,points3[k][1]*this.size)  //畫線為圓弧方式畫圓
          }
          for(var k=0 ; k<points4.length ; k=k+1){
            curveVertex(points4[k][0]*this.size,points4[k][1]*this.size)  //畫線為圓弧方式畫圓
          }
          for(var k=0 ; k<points5.length ; k=k+1){
            curveVertex(points5[k][0]*this.size,points5[k][1]*this.size)  //畫線為圓弧方式畫圓
          }
          for(var k=0 ; k<points6.length ; k=k+1){
            curveVertex(points6[k][0]*this.size,points6[k][1]*this.size)  //畫線為圓弧方式畫圓
          }
          for(var k=0 ; k<points7.length ; k=k+1){
            curveVertex(points7[k][0]*this.size,points7[k][1]*this.size)  //畫線為圓弧方式畫圓
          }
        endShape()
      pop()  //執行pop()，原點(0,0)設定回到視窗左上角
    }
    update(){  //移動的程式碼
      //this.p.x = this.p.x + this.v.x  //x軸目前位置(this.p.x)加上x軸的移動速度(this.v.x)-->變成新的位置
      //this.p.y = this.p.y + this.v.y  //y軸目前位置(this.p.y)加上y軸的移動速度(this.v.y)-->變成新的位置
      this.p.add(this.v)  //設定好向量後，使用add，就可以與上面兩行指令一樣的效果
      //向量sub==>減號
  
      //知道滑鼠的位置，並建立一個滑鼠的向量
      // let mouseV = createVector(mouseX,mouseY)  //把滑鼠的位置轉換成一個向量值
      // let delta = mouseV.sub(this.p).limit(this.v.mag()*2)  //sub計算出滑鼠所在位置向量(mouseV)到物件向量(this.p)的距離，每次以3為單位移動靠近
      //this.v.mag()代表該物件的速度大小(一個向量有大小與方向)
      // this.p.add(delta)  //設定好向量後，使用add，就可以與上面兩行指令有相同效果
      
      //++++++(下面的if程式碼)用來控制所有的物件(南瓜)位置不會跑出螢幕外++++++
      if(this.p.x<=0 || this.p.x>=width)  //當物件碰到左右邊界，彈回(改變方向)  //x軸碰到左邊(<=)，或是碰到右邊(>=width)
      {
        this.v.x = -this.v.x  //把x軸方向，速度方向改變(用-來做到效果)
      }
      if(this.p.y<=0 || this.p.y>=height) //當物件碰到上下邊界，彈回(改變方向)  //y軸碰到上邊(<=)，或是碰到下邊(>=height)
      {
        this.v.y = -this.v.y  //把y軸方向，速度方向改變(用-來做到效果)
      }
    }
    isBallInRanger(x,y){  //功能:判斷滑鼠按下的位置是否在物件範圍內，如果是:物件要消失，如果不是:物件還是存在
      let d = dist(x,y,this.p.x,this.p.y)  //計算兩點(滑鼠按下的點、物件的中心點)之間的距離，放到d變數內
      if(d<16.25*this.size){  //計算碰到物件的大小-->用上下左右的平均值再乘以放大倍率(this.size)
        return true  //滑鼠與物件的距離小於物件的寬度，代表碰到物件，則傳回true的值
      }  
      else{
        return false  //滑鼠與物件的距離大於物件的寬度，代表沒有碰到物件，則傳回false的值
      }
    }
  }