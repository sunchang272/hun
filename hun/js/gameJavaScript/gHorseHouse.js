var gHorseHouse = {
	
	gHHName : ["0_NOT_USED", "低端入门小毛驴", "经济适用国产马", "舒适进阶西域马", "高端商务双人轿", "极致奢华四轮车", "草屋一间，水田一亩", "竹林小筑，春色满园", "农家小院，十亩良田", "气派大院，幽深雅致", "豪宅华邸，贵气冲天"],
	gHHPrice : [0, 3606, 8656, 43283, 108208, 252486, 31669, 88673, 190015, 443369, 886739],
	gHHPriceSell : [0, 2524, 6059, 30298, 75745, 176740, 28502, 79806, 171013, 399032, 798065],
	gHHCost : [0, 50, 100, 500, 1000, 2000, 10, 50, 100, 300, 1000],
	gHHGet : [[0, 0, 0],
			  [0, 1, 2],
			  [0, 2, 4],
			  [0, 3, 6],
			  [0, 4, 8],
			  [0, 5, 10],
			  [0, 2, 3],
			  [0, 3, 5],
			  [0, 4, 7],
			  [0, 5, 9],
			  [0, 6, 11]],
	
	gBuyOrSellHH : function(gBuyOrSellFlag, gHHIndex){
		
		var gHouseBuyFinished = "今天已经进行过房屋交易.";
		var gHorseBuyFinished = "今天已经进行过车马交易.";
		var gMoneyIsNotEnough = "你的钱不够买.";
		var gHorseIsExist = "你已经有车马了，必须先卖掉当前，才可以购买新的车马。";
		var gHouseIsExist = "你已经有房屋了，必须先卖掉当前，才可以购买新的房屋。";
		var gHHBuySuccess = "获得" + this.gHHName[gHHIndex];
		var gHHNotExist = "未拥有" + this.gHHName[gHHIndex];
		var gHHSellSuccess = "售出" + this.gHHName[gHHIndex];
		
		if(gHHIndex < 6 && gCurThread.gCurDay.gHorseTimes < 1){
			alert(gHorseBuyFinished);
		}else if(gHHIndex > 5 && gCurThread.gCurDay.gHouseTimes < 1){
			alert(gHouseBuyFinished);
		}else{
			
			if(gBuyOrSellFlag == 1){
				
				if(gHHIndex < 6 && gCurThread.gCurHuner.gHorseNumber > 0){
					alert(gHorseIsExist);
				}else if(gHHIndex > 5 && gCurThread.gCurHuner.gHouseNumber > 0){
					alert(gHouseIsExist);
				}else{
					
					if(gCurThread.gCurHuner.gMoney < this.gHHPrice[gHHIndex]){
						alert(gMoneyIsNotEnough);
					}else{
						gCurThread.gCurHuner.gMoney -= this.gHHPrice[gHHIndex];
						if(gHHIndex < 6){
							gCurThread.gCurHuner.gHorse = this.gHHName[gHHIndex];
							gCurThread.gCurHuner.gHorseNumber = gHHIndex;
							gCurThread.gCurDay.gHorseTimes -= 1;
						}else if(gHHIndex > 5){
							gCurThread.gCurHuner.gHouse = this.gHHName[gHHIndex];
							gCurThread.gCurHuner.gHouseNumber = gHHIndex;
							gCurThread.gCurDay.gHouseTimes -= 1;
						}
						gUpdateUI();
						alert(gHHBuySuccess);
					}
					
				}
	
			}else if(gBuyOrSellFlag == 2){
				
				if((gHHIndex < 6 && gCurThread.gCurHuner.gHorseNumber != gHHIndex) || (gHHIndex > 5 && gCurThread.gCurHuner.gHouseNumber != gHHIndex)){
					alert(gHHNotExist);
				}else{
					
					gCurThread.gCurHuner.gMoney += this.gHHPriceSell[gHHIndex];
					if(gHHIndex < 6){
						gCurThread.gCurHuner.gHorse = null;
						gCurThread.gCurHuner.gHorseNumber = 0;
						gCurThread.gCurDay.gHorseTimes -= 1;
					}else if(gHHIndex > 5){
						gCurThread.gCurHuner.gHouse = null;
						gCurThread.gCurHuner.gHouseNumber = 0;
						gCurThread.gCurDay.gHouseTimes -= 1;
					}
					gUpdateUI();
					alert(gHHSellSuccess);		
				}
				
			}
				
		}
				
	},

	gHHCalculate : function(){
		
		if(gCurThread.gCurHuner.gHorseNumber + gCurThread.gCurHuner.gHouseNumber > 0){
			
			var gHHInfo = "维护费用：\n"
			+ this.gHHName[gCurThread.gCurHuner.gHorseNumber].toString() + "： -" + this.gHHCost[gCurThread.gCurHuner.gHorseNumber].toString() + "\n"
			+ this.gHHName[gCurThread.gCurHuner.gHouseNumber].toString() + "： -" + this.gHHCost[gCurThread.gCurHuner.gHouseNumber].toString() + "\n"
			+ "属性增加：\n"
			+ "快乐： +" + (this.gHHGet[gCurThread.gCurHuner.gHorseNumber][1] + this.gHHGet[gCurThread.gCurHuner.gHouseNumber][1]).toString() + "\n"
			+ "人脉： +" + (this.gHHGet[gCurThread.gCurHuner.gHorseNumber][2] + this.gHHGet[gCurThread.gCurHuner.gHouseNumber][2]).toString();
			
			gCurThread.gCurHuner.gMoney -= (this.gHHCost[gCurThread.gCurHuner.gHorseNumber] + this.gHHCost[gCurThread.gCurHuner.gHouseNumber]);
			gCurThread.gCurHuner.gHappiness += (this.gHHGet[gCurThread.gCurHuner.gHorseNumber][1] + this.gHHGet[gCurThread.gCurHuner.gHouseNumber][1]);
			gCurThread.gCurHuner.gRepute += (this.gHHGet[gCurThread.gCurHuner.gHorseNumber][2] + this.gHHGet[gCurThread.gCurHuner.gHouseNumber][2]);
			
			gUpdateUI();
			alert(gHHInfo);	
			
		}
	}
	
}