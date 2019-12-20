
var gGirl = {
		
	gGirlName : ["0_NOT_USED", "茗霞", "步摇", "闻笛", "雨桐", "箫昳"],
	
	gMeetGirl : function(gGirlNum){
		
		var gMeetSuccess = "成功。";
		var gMeetFailed = "你是个好人.";
		var gMeetFinished = "明天再来吧。";
		
		var gBtnGirl = $('#gBtnGirl' + gGirlNum);
		
		var gMeedFlag = false;
		
		if(gCurThread.gCurDay.gGirlTimes < 1){
			alert(gMeetFinished);
		}else{
			
			gCurThread.gCurDay.gGirlTimes -= 1;
			
			switch(gGirlNum){	
				case 1:if(gCurThread.gCurHuner.gHealth > 150) gMeedFlag = true;break;
				case 2:if(gCurThread.gCurHuner.gRighteousness > 200) gMeedFlag = true;break;
				case 3:if(gCurThread.gCurHuner.gRepute > 200) gMeedFlag = true;break;
				case 4:if(gCurThread.gCurHuner.gMoney > 2000000) gMeedFlag = true;break;
				case 5:if(gCurThread.gCurHuner.gHouseNumber > 9) gMeedFlag = true;break;
				default:gMeedFlag = false;break;
			}
			
			if(gMeedFlag){
				
				gCurThread.gCurHuner.gGirl = this.gGirlName[gGirlNum];
				gCurThread.gCurHuner.gGirlNumber = gGirlNum;

				gBtnGirl.html("断绝关系");
				gBtnGirl.attr("onclick","gGirl.gLeaveGirl(" + gGirlNum + ")");
				
				gUpdateUI();
				
				alert(gMeetSuccess);
		
			}else{
				alert(gMeetFailed);
			}
			
		}
				
	},
	
	gLeaveGirl : function(gGirlNum){
		
		var gMeetFinished = "明天再来吧。";
		var gLeaveSuccess = "呸，渣男。";
		
		var gBtnGirl = $('#gBtnGirl' + gGirlNum);
		
		if(gCurThread.gCurDay.gGirlTimes < 1){
			alert(gMeetFinished);
		}else{
			
			gCurThread.gCurDay.gGirlTimes -= 1;
			
			gCurThread.gCurHuner.gGirl = null;
			gCurThread.gCurHuner.gGirlNumber = 0;

			gBtnGirl.html("我想认识你一下");
			gBtnGirl.attr("onclick","gGirl.gMeetGirl(" + gGirlNum + ")");
			
			gUpdateUI();
			
			alert(gLeaveSuccess);
			
		}

	}
}