
function startOrReloadGame(){
	
	gCurThread = new gThread();
	gCurThread.gStart();
	
}

function gUpdateUI(){
	
	var gHealthUI = $('#gHealth');
	var gMoneyUI = $('#gMoney');
	var gInvestUI = $('#gInvest');
	var gAbilityUI = $('#gAbility');
	var gExperienceUI = $('#gExperience');
	var gHappinessUI = $('#gHappiness');
	var gRighteousnessUI = $('#gRighteousness');
	var gReputeUI = $('#gRepute');

	var gHorseUI = $('#gHorse');
	var gHouseUI = $('#gHouse');
	var gGirlUI = $('#gGirl');
	var gJobUI = $('#gJob');

	var gDayNumUI = $('#gDayNum');
	var gHourUI = $('#gHour');
	
	var gInvest1 = $('#gInvest1');
	var gInvest2 = $('#gInvest2');
	var gInvest3 = $('#gInvest3');
	
	var gInvestRate1 = $('#gInvestRate1');
	var gInvestRate2 = $('#gInvestRate2');
	var gInvestRate3 = $('#gInvestRate3');
	
	gHealthUI.html(gCurThread.gCurHuner.gHealth);
	gMoneyUI.html(gCurThread.gCurHuner.gMoney);
	gInvestUI.html(gCurThread.gCurHuner.gInvest);
	gAbilityUI.html(gCurThread.gCurHuner.gAbility);
	gExperienceUI.html(gCurThread.gCurHuner.gExperience);
	gHappinessUI.html(gCurThread.gCurHuner.gHappiness);
	gRighteousnessUI.html(gCurThread.gCurHuner.gRighteousness);
	gReputeUI.html(gCurThread.gCurHuner.gRepute);
	
	gHorseUI.html(gCurThread.gCurHuner.gHorse);
	gHouseUI.html(gCurThread.gCurHuner.gHouse);
	gGirlUI.html(gCurThread.gCurHuner.gGirl);
	gJobUI.html(gCurThread.gCurHuner.gJob);
	
	gDayNumUI.html(gCurThread.gDayNum);
	gHourUI.html(gCurThread.gCurDay.gCurHour);
	
	gInvest1.html(gCurThread.gCurHuner.gInvests[1]);
	gInvest2.html(gCurThread.gCurHuner.gInvests[2]);
	gInvest3.html(gCurThread.gCurHuner.gInvests[3]);
		
	gInvestRate1.html(gCurThread.gCurDay.gCurStockRate[1]);
	gInvestRate2.html(gCurThread.gCurDay.gCurStockRate[2]);
	gInvestRate3.html(gCurThread.gCurDay.gCurStockRate[3]);
	
}

function gUpdateBtnUI(){
	
	var gBtnNextDay = $('#gBtnNextDay');
	
	var gBtnJob = $('#gBtnJob');
	var gBtnFun = $('#gBtnFun');
	var gBtnInvest = $('#gBtnInvest');
	var gBtnBet = $('#gBtnBet');
	var gBtnBuyHouse = $('#gBtnBuyHouse');
	var gBtnBuyHorse = $('#gBtnBuyHorse');
	var gBtnBuyGirl = $('#gBtnBuyGirl');
		
}

function gCheckStatus(){
	
	var gThreadFinished = "游戏结束";
	var gHunerIll = "你的健康低于20，处于亚健康状态";
	var gBtnNextDayUI = $('#gBtnNextDayUI');
	
	var gGameFinished = false;
	
	if(gCurThread.gDayNum == 0){
		gBtnNextDayUI.html("完成");
		//alert(gBtnNextDayUI.html());
	}
	
	if(gCurThread.gCurHuner.gHealth <= 0 || gCurThread.gDayNum < 0){
		alert(gThreadFinished);
		gScore.gCalculateScore();
		gCurThread = null;
		gGameFinished = true;
	}else if(gCurThread.gCurHuner.gHealth < 20){
		alert(gHunerIll);
	}

	return gGameFinished;
}