
var gEnjoy = {
		
		gEnjoyCost : [0, -5000, 150, 200, 300, 600, 800, 900, 1500, 3000, 1],
		gEnjoyGet : [[0, 0, 0, 0, 0, 0],
					 [0, -5, 2, 0, -5, 0, 0],
					 [0, 0, 1, 2, 2, 0, 2],
					 [0, 0, 4, 2, -1, 0, 0],
					 [0, 3, 1, 0, 1, 0, 0],
					 [0, 0, 0, 4, 3, 0, 6],
					 [0, -2, 0, 4, 6, 0, 3],
					 [0, 0, 2, 0, 1, 9, 0],
					 [0, -3, 10, 10, 0, 0, 3],
					 [0, -6, 0, 15, 15, -7, 0],
					 [0, 3, -1, 0, 0, 1, 0, 0]],
		gEnjoyInfo : ["0_NOT_USED",
					  "健康-5，能力才干+2，快乐-5， 获得5000钱",
					  "能力才干+1， 江湖经验+2， 快乐+2，人脉+2， 消耗150钱",
					  "能力才干+4， 江湖经验+2， 快乐-1， 消耗200钱",
					  "健康+3， 能力才干+1， 快乐+1， 消耗300钱",
					  "江湖经验+4， 快乐+3， 人脉+6， 消耗600钱",
					  "健康-2， 江湖经验+4， 快乐+6， 人脉+3， 消耗800钱",
					  "能力才干+2， 快乐+1， 正气+9， 消耗900钱",
					  "健康-3， 能力才干+10， 江湖经验+10， 人脉+3， 消耗1500钱",
					  "健康-6， 江湖经验+15， 快乐+15， 正气-7， 消耗3000钱",
					  "健康+3， 快乐+1， 消耗1钱"],
					 
		gStartEnjoy : function(gEnjoyNum){
			
			var gEnjoyFinished = "今日时间已经耗尽。";
			var gEnjoyReject = "钱不够";
				
			if(gCurThread.gCurDay.gCurHour < 1){
				alert(gEnjoyFinished);
			}else if(gCurThread.gCurHuner.gMoney - this.gEnjoyCost[gEnjoyNum] < 0){
				alert(gEnjoyReject);
			}else{
				gCurThread.gCurDay.gCurHour -= 1;
				gCurThread.gCurHuner.gMoney -= this.gEnjoyCost[gEnjoyNum];
				gCurThread.gCurHuner.gHealth += this.gEnjoyGet[gEnjoyNum][1];
				gCurThread.gCurHuner.gAbility += this.gEnjoyGet[gEnjoyNum][2];
				gCurThread.gCurHuner.gExperience += this.gEnjoyGet[gEnjoyNum][3];
				gCurThread.gCurHuner.gHappiness += this.gEnjoyGet[gEnjoyNum][4];
				gCurThread.gCurHuner.gRighteousness += this.gEnjoyGet[gEnjoyNum][5];
				gCurThread.gCurHuner.gRepute += this.gEnjoyGet[gEnjoyNum][6];
				alert(this.gEnjoyInfo[gEnjoyNum]);
				gUpdateUI();
				gCheckStatus();
			}
		}
		
}