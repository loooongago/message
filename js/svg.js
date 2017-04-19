  for(var i=0;i<100;i++){
    var c = document.createElementNS
    ('http://www.w3.org/2000/svg','circle');
    c.setAttribute("r",rn(10,100));
    c.setAttribute("cx",rn(0,1900));
    c.setAttribute("cy",rn(0,1900));
    c.setAttribute("fill",rc(0,255));
    c.setAttribute("fill-opacity",Math.random());
    s1.appendChild(c);
    c.onclick = function(){
      var self = this;
      self.onclick = null;
      //2.6
      var timer = setInterval(function(){
        //修改r  fill-opacity
        //当前元素变大 r  *1.1
        var r = self.getAttribute("r");
        r = parseFloat(r);
        r *= 1.1;
        self.setAttribute("r",r);
        //法前元素变淡 fill-opacity  *0.9
        var o = self.getAttribute("fill-opacity");
        o = parseFloat(o);
        o *= 0.8;
        self.setAttribute("fill-opacity",o);
        if(o<=0.1){
          s1.removeChild(self);
          clearInterval(timer);
        }

      },40);

    }
  }



var data="欢迎来到我的留言板";
        var i=-1;
  	s1.onclick = function(e){
      	var x=e.offsetX;
      	var y=e.offsetY;
//      var c = document.createElementNS('http://www.w3.org/2000/svg','circle');
//      c.setAttribute('r', rn(10, 100));
//      c.setAttribute('fill', rc(0, 255));
//      c.setAttribute('fill-opacity', Math.random());
//      c.setAttribute('cx', x);
//      c.setAttribute('cy', y);
//      s1.appendChild(c);
        
        var d = document.createElementNS('http://www.w3.org/2000/svg','text');
        d.setAttribute('font-size', rn(70, 100));
        d.setAttribute('x',x);
        d.setAttribute('y',y);
        d.setAttribute('fill',rc(0, 255));
        d.setAttribute('fill-opacity', Math.random());
        if(i<data.length-1)
        {i++}else{location.href="board.html";}
        d.innerHTML=data[i];
        s1.appendChild(d);
//      
//       var timer2 = setInterval(function(){
//        var s = d.getAttribute('font-size');
//        s = parseFloat(s);
//        s *= 1.05;
//        d.setAttribute('font-size', s);
//        //修改透明度
//        var p = d.getAttribute('fill-opacity');
//        p = parseFloat(p);
//        p *= 0.8;
//        d.setAttribute('fill-opacity', p);
//        //若足够透明，则删除该元素
//        if(p<0.3){
//          clearInterval(timer2);
//          s1.removeChild(d);
//        }
//      },250)
    
        
         
//      var timer1 = setInterval(function(){
//       console.log(c);//window
//        var r = c.getAttribute('r');
//        r = parseFloat(r);
//        r *= 1.05;
//        c.setAttribute('r', r);
//        //修改透明度
//        var p = c.getAttribute('fill-opacity');
//        p = parseFloat(p);
//        p *= 0.8;
//        c.setAttribute('fill-opacity', p);
//        //若足够透明，则删除该元素
//        if(p<0.01){
//          clearInterval(timer1);
//          s1.removeChild(c);
//        }
//      },50)
      }
    


    /*random number：返回指定范围内的随机整数*/
    function rn(min, max){
      return Math.floor( Math.random()*(max-min) + min );
    }

    /*random color：返回指定范围内的随机颜色*/
    function rc(min, max){
      var r = Math.floor(Math.random()*(max-min)+min);
      var g = Math.floor(Math.random()*(max-min)+min);
      var b = Math.floor(Math.random()*(max-min)+min);
      return `rgb(${r}, ${g}, ${b})`;
    }