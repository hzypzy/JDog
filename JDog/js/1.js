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
}