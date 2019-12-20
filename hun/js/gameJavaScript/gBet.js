
var gBet = {
		
	gBetCategory : ["0_NOT_USED", "押大小", "玩牌九", "打麻将"],
	gBetCost : [0, 20, 200, 2000],
	gBetGet : [0, 18888, 99999, 288888],
	gBetProbability : [0, 0.75, 0.55, 0.35],
	
	gStartBet : function(gBetNum){
		
		var gBetFinished = "今天赌博次数已经上限。";
		var gBetReject = "钱不够赌。";
		var gBetSuccess = "恭喜你，这一次获得了：" + this.gBetGet[gBetNum] + "钱!";
		var gBetFailed = "运气不好啊，多做好事。";
					
		if(gCurThread.gCurDay.gBetTimes < 1){
			alert(gBetFinished);
		}else if(gCurThread.gCurHuner.gMoney - this.gBetCost[gBetNum] < 0){
			alert(gBetReject);
		}else{
			gCurThread.gCurHuner.gMoney -= this.gBetCost[gBetNum];
			gUpdateUI();			
			if(Math.random() < this.gBetProbability[gBetNum]){
				gCurThread.gCurHuner.gMoney = gCurThread.gCurHuner.gMoney + this.gBetGet[gBetNum];
				gCurThread.gCurDay.gBetTimes -= 1;
				gUpdateUI();
				alert(gBetSuccess);
			}else{
				gCurThread.gCurDay.gBetTimes -= 1;
				alert(gBetFailed);
			}
		}
	}

}