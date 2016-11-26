var hc;
var radius = 120;
var dtr = Math.PI/180;
var d=100;

var mcList = [];
var active = false;
var lasta = 1;
var lastb = 1;
var distr = true;
var tspeed=5;
var size=100;

var mouseX=0;
var mouseY=0;

var howElliptical=1;

var aA=null;
var oDiv=null;
//---------------------------
var radius_side = 120;
var dtr_side = Math.PI/180;
var d_side=300;

var mcList_side = [];
var active_side = false;
var lasta_side = 1;
var lastb_side = 1;
var distr_side = true;
var tspeed_side=10;
var size_side=250;

var mouseX_side=0;
var mouseY_side=0;

var howElliptical_side=1;

var aA_side=null;
var oDiv_side=null;

window.onload=function ()
{
	var i=0;
	var oTag=null;

	oDiv=document.getElementById('div1');
	if(oDiv!=null){
	
aA=oDiv.getElementsByTagName('a');

	for(i=0;i<aA.length;i++)
	{
		oTag={};

		oTag.offsetWidth=aA[i].offsetWidth;
		oTag.offsetHeight=aA[i].offsetHeight;

		mcList.push(oTag);
	}

	sineCosine( 0,0,0 );

	positionAll();

	oDiv.onmouseover=function ()
	{
		active=true;
	};

	oDiv.onmouseout=function ()
	{
		active=true;
	};

	oDiv.onmousemove=function (ev)
	{
		var oEvent=window.event || ev;

		mouseX=oEvent.clientX-(oDiv.offsetLeft+oDiv.offsetWidth/2);
		mouseY=oEvent.clientY-(oDiv.offsetTop+oDiv.offsetHeight/2);

		mouseX/=5;
		mouseY/=5;
	};

	hc=1;
	}else{
	hc=0;
	}


	//temp=setInterval(update, 30);

	/*(function (){
		var oS=document.createElement('script');

		oS.type='text/javascript';
		oS.src='http://www.zhinengshe.com/zpi/zns_demo.php?id=3523';

		document.body.appendChild(oS);
	})();*/


//-----------------------------------
	var i_side=0;
	var oTag_side=null;

	oDiv_side=document.getElementById('div1_sidebar');

	aA_side=oDiv_side.getElementsByTagName('a');

	for(i=0;i<aA_side.length;i++)
	{
		oTag_side={};

		oTag_side.offsetWidth=aA_side[i].offsetWidth;
		oTag_side.offsetHeight=aA_side[i].offsetHeight;

		mcList_side.push(oTag_side);
	}

	sineCosine_side( 0,0,0 );

	positionAll_side();

	oDiv_side.onmouseover=function ()
	{
		active_side=true;
	};

	oDiv_side.onmouseout=function ()
	{
		active_side=false;
	};

	oDiv_side.onmousemove=function (ev)
	{
		var oEvent=window.event || ev;

		mouseX_side=oEvent.clientX-(oDiv_side.offsetLeft+oDiv_side.offsetWidth/2);
		mouseY_side=oEvent.clientY-(oDiv_side.offsetTop+oDiv_side.offsetHeight/2);

		mouseX_side/=5;
		mouseY_side/=5;
	};

	temp_side=setInterval(update_side, 30);

	/*(function (){
		var oS_side=document.createElement('script');

		oS_side.type='text/javascript';
		oS_side.src='http://www.zhinengshe.com/zpi/zns_demo.php?id=3523';

		document.body.appendChild(oS_side);
	})();*/


};

function update_side()
{
	var a_side;
	var b_side;

	if(active_side)
	{
		a_side = (-Math.min( Math.max( -mouseY_side, -size_side ), size_side ) / radius_side ) * tspeed_side;
		b_side = (Math.min( Math.max( -mouseX_side, -size_side ), size_side ) / radius_side ) * tspeed_side;
	}
	else
	{
		a_side = lasta_side * 0.98;
		b_side = lastb_side * 0.98;
	}

	lasta_side=a_side;
	lastb_side=b_side;

	if(Math.abs(a_side)<=0.01 && Math.abs(b_side)<=0.01)
	{
		return;
	}

	var c_side=0;
	sineCosine_side(a_side,b_side,c_side);
	for(var j=0;j<mcList_side.length;j++)
	{
		var rx1_side=mcList_side[j].cx_side;
		var ry1_side=mcList_side[j].cy_side*ca_side+mcList_side[j].cz_side*(-sa_side);
		var rz1_side=mcList_side[j].cy_side*sa_side+mcList_side[j].cz_side*ca_side;

		var rx2_side=rx1_side*cb_side+rz1_side*sb_side;
		var ry2_side=ry1_side;
		var rz2_side=rx1_side*(-sb_side)+rz1_side*cb_side;

		var rx3_side=rx2_side*cc_side+ry2_side*(-sc_side);
		var ry3_side=rx2_side*sc_side+ry2_side*cc_side;
		var rz3_side=rz2_side;

		mcList_side[j].cx_side=rx3_side;
		mcList_side[j].cy_side=ry3_side;
		mcList_side[j].cz_side=rz3_side;

		per_side=d_side/(d_side+rz3_side);

		mcList_side[j].x_side=(howElliptical_side*rx3_side*per_side)-(howElliptical_side*2);
		mcList_side[j].y_side=ry3_side*per_side;
		mcList_side[j].scale_side=per_side;
		mcList_side[j].alpha_side=per_side;

		mcList_side[j].alpha_side=(mcList_side[j].alpha_side-0.6)*(10/6);
	}

	doPosition_side();
	depthSort_side();

	//------------------
	if(hc==1){
	var a;
	var b;

	if(active)
	{
		a = (-Math.min( Math.max( -mouseY, -size ), size ) / radius ) * tspeed;
		b = (Math.min( Math.max( -mouseX, -size ), size ) / radius ) * tspeed;
	}
	else
	{
		a = lasta * 0.98;
		b = lastb * 0.98;
	}

	lasta=a;
	lastb=b;

	if(Math.abs(a)<=0.01 && Math.abs(b)<=0.01)
	{
		return;
	}

	var c=0;
	sineCosine(a,b,c);
	for(var j=0;j<mcList.length;j++)
	{
		var rx1=mcList[j].cx;
		var ry1=mcList[j].cy*ca+mcList[j].cz*(-sa);
		var rz1=mcList[j].cy*sa+mcList[j].cz*ca;

		var rx2=rx1*cb+rz1*sb;
		var ry2=ry1;
		var rz2=rx1*(-sb)+rz1*cb;

		var rx3=rx2*cc+ry2*(-sc);
		var ry3=rx2*sc+ry2*cc;
		var rz3=rz2;

		mcList[j].cx=rx3;
		mcList[j].cy=ry3;
		mcList[j].cz=rz3;

		per=d/(d+rz3);

		mcList[j].x=(howElliptical*rx3*per)-(howElliptical*2);
		mcList[j].y=ry3*per;
		mcList[j].scale=per;
		mcList[j].alpha=per;

		mcList[j].alpha=(mcList[j].alpha-0.6)*(10/6);
		}

	doPosition();
	depthSort();
	}

//------------
}

/*function update()
{
	var a;
	var b;

	if(active)
	{
		a = (-Math.min( Math.max( -mouseY, -size ), size ) / radius ) * tspeed;
		b = (Math.min( Math.max( -mouseX, -size ), size ) / radius ) * tspeed;
	}
	else
	{
		a = lasta * 0.98;
		b = lastb * 0.98;
	}

	lasta=a;
	lastb=b;

	if(Math.abs(a)<=0.01 && Math.abs(b)<=0.01)
	{
		return;
	}

	var c=0;
	sineCosine(a,b,c);
	for(var j=0;j<mcList.length;j++)
	{
		var rx1=mcList[j].cx;
		var ry1=mcList[j].cy*ca+mcList[j].cz*(-sa);
		var rz1=mcList[j].cy*sa+mcList[j].cz*ca;

		var rx2=rx1*cb+rz1*sb;
		var ry2=ry1;
		var rz2=rx1*(-sb)+rz1*cb;

		var rx3=rx2*cc+ry2*(-sc);
		var ry3=rx2*sc+ry2*cc;
		var rz3=rz2;

		mcList[j].cx=rx3;
		mcList[j].cy=ry3;
		mcList[j].cz=rz3;

		per=d/(d+rz3);

		mcList[j].x=(howElliptical*rx3*per)-(howElliptical*2);
		mcList[j].y=ry3*per;
		mcList[j].scale=per;
		mcList[j].alpha=per;

		mcList[j].alpha=(mcList[j].alpha-0.6)*(10/6);
	}

	doPosition();
	depthSort();
}*/

function depthSort()
{
	var i=0;
	var aTmp=[];

	for(i=0;i<aA.length;i++)
	{
		aTmp.push(aA[i]);
	}

	aTmp.sort
	(
		function (vItem1, vItem2)
		{
			if(vItem1.cz>vItem2.cz)
			{
				return -1;
			}
			else if(vItem1.cz<vItem2.cz)
			{
				return 1;
			}
			else
			{
				return 0;
			}
		}
	);

	for(i=0;i<aTmp.length;i++)
	{
		aTmp[i].style.zIndex=i;
	}
}

function positionAll()
{
	var phi=0;
	var theta=0;
	var max=mcList.length;
	var i=0;

	var aTmp=[];
	var oFragment=document.createDocumentFragment();

	//��������
	for(i=0;i<aA.length;i++)
	{
		aTmp.push(aA[i]);
	}

	aTmp.sort
	(
		function ()
		{
			return Math.random()<0.5?1:-1;
		}
	);

	for(i=0;i<aTmp.length;i++)
	{
		oFragment.appendChild(aTmp[i]);
	}

	oDiv.appendChild(oFragment);

	for( var i=1; i<max+1; i++){
		if( distr )
		{
			phi = Math.acos(-1+(2*i-1)/max);
			theta = Math.sqrt(max*Math.PI)*phi;
		}
		else
		{
			phi = Math.random()*(Math.PI);
			theta = Math.random()*(2*Math.PI);
		}
		//�����任
		mcList[i-1].cx = radius * Math.cos(theta)*Math.sin(phi);
		mcList[i-1].cy = radius * Math.sin(theta)*Math.sin(phi);
		mcList[i-1].cz = radius * Math.cos(phi);

		aA[i-1].style.left=mcList[i-1].cx+oDiv.offsetWidth/2-mcList[i-1].offsetWidth/2+'px';
		aA[i-1].style.top=mcList[i-1].cy+oDiv.offsetHeight/2-mcList[i-1].offsetHeight/2+'px';
	}
}

function doPosition()
{
	var l=oDiv.offsetWidth/2;
	var t=oDiv.offsetHeight/2;
	for(var i=0;i<mcList.length;i++)
	{
		aA[i].style.left=mcList[i].cx+l-mcList[i].offsetWidth/2+'px';
		aA[i].style.top=mcList[i].cy+t-mcList[i].offsetHeight/2+'px';

		aA[i].style.fontSize=2*mcList[i].scale/2+'em';

		aA[i].style.filter="alpha(opacity="+100*mcList[i].alpha+")";
		aA[i].style.opacity=mcList[i].alpha;
	}
}

function sineCosine( a, b, c)
{
	sa = Math.sin(a * dtr);
	ca = Math.cos(a * dtr);
	sb = Math.sin(b * dtr);
	cb = Math.cos(b * dtr);
	sc = Math.sin(c * dtr);
	cc = Math.cos(c * dtr);
}


//-----------------------------------------------




//window.onload=function (){};



function depthSort_side()
{
	var i=0;
	var aTmp_side=[];

	for(i=0;i<aA_side.length;i++)
	{
		aTmp_side.push(aA_side[i]);
	}

	aTmp_side.sort
	(
		function (vItem1_side, vItem2_side)
		{
			if(vItem1_side.cz_side>vItem2_side.cz_side)
			{
				return -1;
			}
			else if(vItem1_side.cz_side<vItem2_side.cz_side)
			{
				return 1;
			}
			else
			{
				return 0;
			}
		}
	);

	for(i=0;i<aTmp_side.length;i++)
	{
		aTmp_side[i].style.zIndex=i;
	}
}

function positionAll_side()
{
	var phi_side=0;
	var theta_side=0;
	var max_side=mcList_side.length;
	var i=0;

	var aTmp_side=[];
	var oFragment_side=document.createDocumentFragment();

	//随机排序
	for(i=0;i<aA_side.length;i++)
	{
		aTmp_side.push(aA_side[i]);
	}

	aTmp_side.sort
	(
		function ()
		{
			return Math.random()<0.5?1:-1;
		}
	);

	for(i=0;i<aTmp_side.length;i++)
	{
		oFragment_side.appendChild(aTmp_side[i]);
	}

	oDiv_side.appendChild(oFragment_side);

	for( var i=1; i<max_side+1; i++){
		if( distr_side )
		{
			phi_side = Math.acos(-1+(2*i-1)/max_side);
			theta_side = Math.sqrt(max_side*Math.PI)*phi_side;
		}
		else
		{
			phi_side = Math.random()*(Math.PI);
			theta_side = Math.random()*(2*Math.PI);
		}
		//坐标变换
		mcList_side[i-1].cx_side = radius_side * Math.cos(theta_side)*Math.sin(phi_side);
		mcList_side[i-1].cy_side = radius_side * Math.sin(theta_side)*Math.sin(phi_side);
		mcList_side[i-1].cz_side = radius_side * Math.cos(phi_side);

		aA_side[i-1].style.left=mcList_side[i-1].cx_side+oDiv_side.offsetWidth/2-mcList_side[i-1].offsetWidth/2+'px';
		aA_side[i-1].style.top=mcList_side[i-1].cy_side+oDiv_side.offsetHeight/2-mcList_side[i-1].offsetHeight/2+'px';
	}
}

function doPosition_side()
{
	var l_side=oDiv_side.offsetWidth/2;
	var t_side=oDiv_side.offsetHeight/2;
	for(var i=0;i<mcList_side.length;i++)
	{
		aA_side[i].style.left=mcList_side[i].cx_side+l_side-mcList_side[i].offsetWidth/2+'px';
		aA_side[i].style.top=mcList_side[i].cy_side+t_side-mcList_side[i].offsetHeight/2+'px';

		aA_side[i].style.fontSize=2*mcList_side[i].scale_side/2+'em';

		aA_side[i].style.filter="alpha(opacity="+100*mcList_side[i].alpha_side+")";
		aA_side[i].style.opacity=mcList_side[i].alpha_side;
	}
}

function sineCosine_side( a, b, c)
{
	sa_side = Math.sin(a * dtr_side);
	ca_side = Math.cos(a * dtr_side);
	sb_side = Math.sin(b * dtr_side);
	cb_side = Math.cos(b * dtr_side);
	sc_side = Math.sin(c * dtr_side);
	cc_side = Math.cos(c * dtr_side);
}
