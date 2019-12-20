
function gThread() {
		
	this.gDayNum = 10;
	this.gCurDay = null;
	this.gCurHuner = null;
	
	this.gStart = function(){
		
		var gCurHunerName = $('#gCurHunerName').val();
				
		var gCurHunerNameNull = "名字不能为空";
		
		var gBtnNextDay = $('#gBtnNextDay');
		
		gBtnNextDay.html("进入下一天");

		if(gCurHunerName != ""){
			
			//创建新角色
			this.gCurHuner = new gHuner(gCurHunerName);
			//第一天
			this.gCurDay = new gDay();
			//减掉第一天
			this.gDayNum -= 1;
			//计算股票
			gStock.gStockNewDay();
			
			//界面更新
			gUpdateUI();
			
		}else{
			alert(gCurHunerNameNull);
		}
		

		
	};
	
	this.gNextDay = function(){
		
		var gNextDayReject = "本日剩余时辰大于3，不能进入下一天。";
		
		if(this.gCurDay.gCurHour > 3){
			alert(gNextDayReject);
		}else{
			
			//日期更替
			this.gCurDay = new gDay();
			this.gDayNum -= 1;
			
			if(!gCheckStatus()){
				
				//工资发放
				gJob.gPayEveryDay();
				
				//计算股票
				gStock.gStockNewDay();
				
				//计算房屋车马
				gHorseHouse.gHHCalculate();
						
				//界面更新
				gUpdateUI();
				
				//随机事件
				gRandomEvents.gGenerateEventUI();
				
				//界面更新
				gUpdateUI();			
			}

		}
	}
		
} 