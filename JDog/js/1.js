onload=function(){
	lunBo();
}
	function lunBo(){
	var oUl=document.querySelector('.ulu');
	var oLi=document.querySelector('.ulu').getElementsByTagName('li');
	//小圆点
	var oNum=document.querySelector('.number').querySelectorAll('li');
	oUl.innerHTML+=oUl.innerHTML;
//	console.log(oLi.length);
	var oLicount=oLi.length;
	var oNum=document.querySelector('.number').querySelectorAll('.circle')
	oUl.style.width=(oLicount*100)+'%';
	for (var i = 0; i < oLi.length; i++) {
		oLi[i].style.width=(100/oLicount)+'%';
	}
	var count=0;
		oNum[count].className="circle fl_l black"
	var Timer=setInterval(function(){
		oUl.style.transition='margin-left 0.3s linear';
		count++;//console.log(count)
		if(count>oLicount/2){
			oUl.style.transition='none';
			count=0;
		}
		oUl.style.marginLeft=(-100*count)+'%';
		if(count<oLicount/2){
			for(var j=0;j<oNum.length;j++){
				oNum[j].className="circle fl_l "
			}
			oNum[count].className="circle fl_l black"
		}else{
			for(var j=0;j<oNum.length;j++){
				oNum[j].className="circle fl_l "
			}
			oNum[0].className="circle fl_l black"
		}
	},1000)
	//倒计时
	var oT=document.querySelector('.handKill').querySelectorAll('li');
//	console.log(typeof(oT[0].innerHTML))
//--
	var seconds=parseInt(oT[oT.length-1].innerHTML)
	var second=parseInt(oT[oT.length-2].innerHTML)
	var minutes=parseInt(oT[oT.length-4].innerHTML)
	var minute=parseInt(oT[oT.length-5].innerHTML)
	var hours=parseInt(oT[oT.length-7].innerHTML)
	var hour=parseInt(oT[oT.length-8].innerHTML)
	
	var Timee=setInterval(function(){
		seconds--;
		if(seconds<0){
			seconds=9;
			second--;
			oT[oT.length-2].innerHTML=second;
			if(second<0){
				second=5;
				oT[oT.length-2].innerHTML=second;
				minutes--;
				if(minutes<0){
					minutes=9
					minute--;
					oT[oT.length-5].innerHTML=minute;
					if(minute<0){
						minute=5;
						oT[oT.length-5].innerHTML=minute;
						hours--;
						oT[oT.length-7].innerHTML=hours;
						if(hours<0){
							hours=9;
							hour--;
							if(hour<0){
								alert('折扣优惠活动结束，你买不到了哦~')
							}
							oT[oT.length-8].innerHTML=hour;
						}
						oT[oT.length-7].innerHTML=hours;
					}
				}
				oT[oT.length-4].innerHTML=minutes;
			};
		}
		oT[oT.length-1].innerHTML=seconds;
	},1000)
	
	
}