
var gJob = {
	
	gJobs : ["0_NOT_USED", "码头搬货小工", "御街天桥下卖艺人", "三合楼厨工", "神威镖局库管", "六扇门藏机阁阁主", "万象楼副楼主"],
	gPays : [0, 300, 600, 1200, 2000, 3200, 5000],
	gRequirements : [0, 100, 150, 200, 250, 300, 400],
	
	gApply : function (gJobNum){
		
		var gApplySuccess = "你获得了新工作：" + this.gJobs[gJobNum];
		var gApplyFailed = "能力才干或江湖经验不够。"
		var gApplyFinished = "今天已经应聘过。";
		
		if(gCurThread.gCurDay.gJobTimes < 1){
			alert(gApplyFinished);
		}else if(gCurThread.gCurHuner.gAbility >= this.gRequirements[gJobNum] && gCurThread.gCurHuner.gExperience >= this.gRequirements[gJobNum]){
			gCurThread.gCurHuner.gJob = this.gJobs[gJobNum];
			gCurThread.gCurHuner.gJobNumber = gJobNum;
			gCurThread.gCurDay.gJobTimes -= 1;
			gUpdateUI();
			alert(gApplySuccess);
		}else{
			gCurThread.gCurDay.gJobTimes -= 1;
			alert(gApplyFailed);
		}
		
	},

	gPayEveryDay : function(){
		
		gCurThread.gCurHuner.gMoney += this.gPays[gCurThread.gCurHuner.gJobNumber];
		gUpdateUI();
	}
}