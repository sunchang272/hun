function gDay(){
		
	this.gCurHour = 6;
	this.gJobTimes = 1;
	this.gBetTimes = 1;
	this.gStockTimes = 1;
	this.gHouseTimes = 1;
	this.gHorseTimes = 1;
	this.gGirlTimes = 1;
	
	this.gCurStockRate = [0, -1, -1, -1];
	
	this.gRandomEventIndex = gRandomEvents.gGenerateEventIndex();
				
}