
var gScore = {
		
	gCalculateScore : function(){
		
		var gTotalScore = 0;
		
		gTotalScore = gCurThread.gCurHuner.gHealth * 1000
		+ gCurThread.gCurHuner.gMoney
		+ gCurThread.gCurHuner.gInvest
		+ gCurThread.gCurHuner.gAbility * 1000
		+ gCurThread.gCurHuner.gExperience * 1000
		+ gCurThread.gCurHuner.gHappiness * 1000
		+ gCurThread.gCurHuner.gRighteousness * 1000
		+ gCurThread.gCurHuner.gRepute * 1000
		+ gJob.gPays[gCurThread.gCurHuner.gJobNumber] * 100
		+ gHorseHouse.gHHPriceSell[gCurThread.gCurHuner.gHorseNumber]
		+ gHorseHouse.gHHPriceSell[gCurThread.gCurHuner.gHouseNumber]
		+ (gCurThread.gCurHuner.gGirlNumber != 0 ? 200000:0);
		
		var gTotalScoreInfo = gCurThread.gCurHuner.gHunerName + "\n你本次游戏得分: " + gTotalScore.toString();
		
		this.gSubmitScore(gTotalScore);
		
		alert(gTotalScoreInfo);
				
	},

	gSubmitScore : function(gTotalScore){
		
		$.ajax({
			type : "post",
			url : "ajax.jsp",
			data : "method=1&gHunerName="
					+ gCurThread.gCurHuner.gHunerName
					+ "&gTotalScore="
					+ gTotalScore,
			beforeSend : function() {},
			success : function(data) {
				alert(data);
			}

		});
		
	},
	
	gGetRankList : function(){
		
		$.ajax({
			type : "post",
			url : "ajax.jsp",
			data : "method=2",
			beforeSend : function() {},
			success : function(data) {
				
				var gRankListUI = $('#gRankListUI');
				var gRankListModalUI = $('#modal-container-0000010');
				gRankListUI.html(data);
				gRankListModalUI.modal();
			}

		});
		
	}
		
}