var TongZhi=[
	["https://mp.weixin.qq.com/s/90yjsY93ZP9H312TKm9LLw","招募疫情防控志愿者啦……"],
	["https://mp.weixin.qq.com/s/8aS9xt_LMceBf0eWubEOdw","庆党生日 共赏紫荆 爱我中国"],
	["https://mp.weixin.qq.com/s/swr2pIlAsgqqMsrOItmt0w","爱心联动 共同战“疫”"],
	["https://mp.weixin.qq.com/s/FvsE9gp9kHCSF_zCy2G_TA","【疫情防控 我们一直都在】--特殊2的表达--"],
	["https://mp.weixin.qq.com/s/WRoKvZ9K9FTQ7JUz1tu_Vw","新春送温暖暨筑梦行动"]
	];
function setyw(){
	var a=0;
	for(;a<=TongZhi.length;a++)
	{
		document.getElementById("yw_text").innerHTML+="<div><a target='_blank' href='"+TongZhi[a][0]+"'>"+TongZhi[a][1]+"</a></div>";
	}
}