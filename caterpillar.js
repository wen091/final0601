var caterpillar_colors = "f4effa-2f184b-532b88-9b72cf-c8b1e4".split("-").map(a=>"#"+a)

class Caterpillar{ //宣告一個怪物類別，名稱為Monster
    constructor(args){
        this.r = random(50,150) //設計怪物的主題，如果有傳參數args.r來設定怪物大小，沒有傳參數就以100為主
        this.p = args.p || createVector(random(width),random(height)) //建立一個向量，{x:width/2,y:height/2}
        this.v = args.v || createVector(random(-1,1,random))//一定的速度，如果沒有傳args參數，就會利用亂數抽出x,y軸的移動速度
        this.color = args.color || random(caterpillar_colors)
        this.mode = random(["big","small"])
        this.dead = false //死亡為"否"-->代表活著
        this.timenum = 0 //延長時間讓它顯示死亡後的畫面
    }
    draw(){ //畫出元件
        if(this.dead==false){
            push() //重新設定圓點位置
                translate(this.p.x,this.p.y) //把原點(0,0)座標移動到物件中心位置
                fill(this.color)
                noStroke()
                //+++++++++++畫出毛毛蟲++++++++++
                beginShape()
                    // ellipse(this.p.x/2+210, this.p.y/2+10, 72, 60)
                    // ellipse(this.p.x/2+190, this.p.y/2+30, 78, 66)
                    ellipse(this.p.x/2+165, this.p.y/2+70, 90, 84)
                    ellipse(this.p.x/2+120, this.p.y/2+90, 108, 96)
                    ellipse(this.p.x/2+70, this.p.y/2+70, 120, 108)
                    ellipse(this.p.x/2+20, this.p.y/2+30, 120, 108)
                    ellipse(this.p.x/2+10, this.p.y/2-15, 200, 180)
                    
                endShape();
                //+++++++++++++++++++++++++
                if(this.mode=="big"){
                    fill("black")
                    ellipse(this.p.x/2+10, this.p.y/2-15,this.r)
                    fill("red")
                    ellipse(this.p.x/2+10, this.p.y/2-15,this.r/2)
                }else{
                    fill("#fae0e4")
                    arc(this.p.x/2+10, this.p.y/2-15,this.r/2,this.r/2,0,PI)
                    fill("#766153")
                    arc(this.p.x/2+10, this.p.y/2-15,this.r/3,this.r/3,0,PI)
                } 

            pop() //恢復原點到整個視窗的左上角
        }
        else{ //怪物死亡的畫面
            this.timenum=this.timenum+1
            push()
                translate(this.p.x,this.p.y) //把原點(0,0)座標移動到物件中心位置
                fill("white")  //填滿this.color其中一個顏色
                //ellipse(0,0,this.r)
                strokeWeight(4)  //線條粗細
                noFill()  //不填滿
                //++++++變成五條虛線++++++
                for(var j=0;j<5;j++){
                    rotate(PI/4)
                    beginShape()
                        for(var i=0;i<this.r/3;i++){
                            vertex(this.r/3+i,sin(i/4+frameCount/7)*5)
                        }
                    endShape()
                }
            pop()
        }
    }

    update(){ //計算出移動元件後的位置
        this.p.add(this.v)
        //+++++++++++碰道牆壁彈回++++++++++
        if(this.p.x<=0 || this.p.x>=width){//x軸碰到左邊(<=0)，或是碰到右邊(>=width)
            this.v.x = -this.v.x //把速度方向改變
          }
          if(this.p.y<=0 || this.p.y>=height){//y軸碰到上邊(<=0)，或是碰到下邊(>=height)
            this.v.y = -this.v.y //把y軸方縣，速度方向改變
      
      
          }

    }
    isBallInRanger(x,y){//功能:判斷滑鼠按下的位置是否在物件的範圍內
        let d = dist(x,y,this.p.x,this.p.y) //計算兩點(滑鼠按下與物件中心點)之間的距離，放到d變數內
        if(d<this.r/2){
          return true //滑鼠與物件的距離小於物件的寬度，代表碰觸了，則傳回true的值
        }else{
          return false//滑鼠與物件的距離大於物件的寬度，代表沒有碰觸，則傳回false的值(未碰觸)
        } 
       }
    }
    