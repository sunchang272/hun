
var gStock = {
		
	gStockUpRate : [0, 0.8, 0.5, 0.3],
	gStockUpAmplitude : [0, 0.2, 0.4, 0.6],
	
	gGenerateStockRate : function(){
		
		var gStockRate = ["0_NOT_USED", -1, -1, -1];
		
		if(Math.random() < this.gStockUpRate[3]){
			gStockRate[1] *= -1;
			gStockRate[2] *= -1;
			gStockRate[3] *= -1;
		}else if(Math.random() < this.gStockUpRate[2]){
			gStockRate[1] *= -1;
			gStockRate[2] *= -1;			
		}else if(Math.random() < this.gStockUpRate[1]){
			gStockRate[1] *= -1;
		}
		
		for(var gStockIndex = 1; gStockIndex <= 3; gStockIndex ++){
			gStockRate[gStockIndex] *= (Math.random() * this.gStockUpAmplitude[gStockIndex]);
			gStockRate[gStockIndex] = gStockRate[gStockIndex].toFixed(2);
		}
		
		gCurThread.gCurDay.gCurStockRate = gStockRate;
		
		return gStockRate;
			
	},

	gCalculateStock : function(){
		
		gCurThread.gCurHuner.gInvest = 0;
		
		for(var gStockIndex = 1; gStockIndex <= 3; gStockIndex ++){
			gCurThread.gCurHuner.gInvests[gStockIndex] += Math.round((gCurThread.gCurHuner.gInvests[gStockIndex] * gCurThread.gCurDay.gCurStockRate[gStockIndex]));
			gCurThread.gCurHuner.gInvest += gCurThread.gCurHuner.gInvests[gStockIndex];
		}

	},
	
	gStockNewDay : function(){
		
		this.gGenerateStockRate();
		this.gCalculateStock();
		gUpdateUI();
		
	},
	
	gBuyOrSellStock : function(gBuyOrSellFlag, gStockIndex){
		
		var gNumStock = parseInt($('#gNumStock' + gStockIndex).val());
		var gStockNumReject = "买入和卖出的值无效！";
		var gStockFinished = "今天已经进行过股票交易！";
		var gMoneyIsNotEnough = "你的钱不够买。";
		var gInvestIsNotEnough = "你没有这么多投资。";
		var gStockDealSuccess = "成功完成股票交易";
		
		if(gCurThread.gCurDay.gStockTimes < 1){
			alert(gStockFinished);
		}else if(gNumStock == null ||  gNumStock <= 0){
			alert(gStockNumReject);
		}else{
			if(gBuyOrSellFlag == 1){
				
				if(gNumStock > gCurThread.gCurHuner.gMoney){
					alert(gMoneyIsNotEnough);
				}else{
					gCurThread.gCurHuner.gMoney -= gNumStock;
					gCurThread.gCurHuner.gInvests[gStockIndex] += gNumStock;
					gCurThread.gCurDay.gStockTimes -= 1;
					gCurThread.gCurHuner.gInvest = 0;
					for(var gStockIndex = 1; gStockIndex <= 3; gStockIndex ++){
						gCurThread.gCurHuner.gInvest += gCurThread.gCurHuner.gInvests[gStockIndex];
					}
					gUpdateUI();
					alert(gStockDealSuccess);
				}
				
				
			}else if(gBuyOrSellFlag == 2){
				
				if(gNumStock > gCurThread.gCurHuner.gInvests[gStockIndex]){
					alert(gInvestIsNotEnough);
				}else{
					gCurThread.gCurHuner.gMoney += gNumStock;
					gCurThread.gCurHuner.gInvests[gStockIndex] -= gNumStock;
					gCurThread.gCurDay.gStockTimes -= 1;
					gCurThread.gCurHuner.gInvest = 0;
					for(var gStockIndex = 1; gStockIndex <= 3; gStockIndex ++){
						gCurThread.gCurHuner.gInvest += gCurThread.gCurHuner.gInvests[gStockIndex];
					}					
					gUpdateUI();
					alert(gStockDealSuccess);
				}
				
			}
		}
		
	}
		
}