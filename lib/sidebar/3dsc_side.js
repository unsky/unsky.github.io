var radius_side = 100;
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
	var i_side=0;
	var oTag_side=null;

	oDiv_side=document.getElementById('div_sidebar');

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

	setInterval(update_side, 30);

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
}

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

	//��������
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
		//�����任
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
