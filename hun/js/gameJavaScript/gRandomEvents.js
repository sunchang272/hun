var gRandomEvents = {
		
	gRandomEventDescribe : ["0_NOT_USED"
		, "有位商人告诉你，天下最好赚的，还是 女人的钱"
		, "汴京朋友借钱"
		, "收到信，“今夜子时北山子街口”"
		, "卖花小女孩"
		, "晚上做百里家马车，发现马车左转右转"
		, "卖菩萨手串"
		, "兜售刺激书籍，看了脸红心跳"
		, "发现朝廷海捕文书中通缉犯，要出手吗"
		, "乞丐劝你和他一起乞讨"
		, "发小邋遢大王追求村花翠翠"
		, "大妈每日莺歌燕舞，严重扰民"
		, "京中老人范先生临终前出售古书"
		, "大相国寺烧香求财"
		, "巷子口遇僧人，呈交善款"
		, "风尘仆仆中年人找你，说父母有难，急需用钱"
		, "乞丐声称有绝世武功秘籍"
	],
	
	gRandomEventChoice1 : ["0_NOT_USED"
		, "那就琢磨一下"
		, "借"
		, "去"
		, "买"
		, "跳车自救"
		, "不买"
		, "要"
		, "要"
		, "试试吧"
		, "说缺点"
		, "支持正义"
		, "买"
		, "去"
		, "花钱保平安"
		, "尝试寻找破绽"
		, "索要秘笈"
	],
	
	gRandomEventChoice2 : ["0_NOT_USED"
		, "不考虑"
		, "不借"
		, "不去"
		, "不买"
		, "看看再说"
		, "买"
		, "不要"
		, "不要"
		, "拒绝"
		, "说好话"
		, "不关我事"
		, "不买"
		, "不去"
		, "骗子"
		, "相信他"
		, "严词拒绝"
	],
	
	gRandomEventResult : [[[[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]]
		, [
			[[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
			, [[0, 0, 0, 0, 0, 0, 0, 0], [0, -7, 52222, 0, 0, 0, -2, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
			, [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
		]
		, [
			[[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
			, [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, -2000, 0, 4, -1, 0, -1], [0, 0, 0, 0, 0, 0, 0, 0]]
			, [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 3, -1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
		]
		, [
			[[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
			, [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, -0.1, 0, 0, -10, 0, 0], [0, 0, 19999, 0, 0, 10, 0, 0]]
			, [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 5, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
		]
		, [
			[[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
			, [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, -100, 0, 0, 5, 0, 2], [0, 3, -100, 0, -12, 0, 0, 0]]
			, [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
		]
		, [
			[[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
			, [[0, 0, 0, 0, 0, 0, 0, 0], [0, -1, 0, 0, 2, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
			, [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, -3333, 0, 2, -1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
		]
		, [
			[[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
			, [[0, 0, 0, 0, 0, 0, 0, 0], [0, -3, 0, 0, 0, -2, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
			, [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
		]
		, [
			[[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
			, [[0, 0, 0, 0, 0, 0, 0, 0], [0, -3, -100, 0, 0, 0, -5, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
			, [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 2, 0, 5, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
		]
		, [
			[[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
			, [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 40000, 0, 0, 6, 0, 0], [0, -5, 0, 0, 0, -5, 0, 0]]
			, [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, -5, 0], [0, 0, 0, 0, +6, 0, 0, 0]]
		]
		, [
			[[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
			, [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 66666, 0, 6, 0, -6, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
			, [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 3, 0, 7, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
		]
		, [
			[[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
			, [[0, 0, 0, 0, 0, 0, 0, 0], [0, -5, 0, 0, 0, 0, 3, -10], [0, 0, 0, 0, 0, 0, 0, 0]]
			, [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 3, 0, -1, -1], [0, 0, 0, 0, 0, 0, 0, 0]]
		]
		, [
			[[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
			, [[0, 0, 0, 0, 0, 0, 0, 0], [0, -5, 0, 0, 0, 10, 0, 0], [0, 0, 0, 0, 0, 10, 10, 0]]
			, [[0, 0, 0, 0, 0, 0, 0, 0], [0, -10, 0, 0, 0, -10, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
		]
		, [
			[[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
			, [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, -999, 0, 0, -2, 6, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
			, [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, -50, -10, 0, -10, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
		]	
		, [
			[[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
			, [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 25000, 0, 5, 5, -5, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
			, [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
		]
		, [
			[[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
			, [[0, 0, 0, 0, 0, 0, 0, 0], [0, -2, 0, 0, 3, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
			, [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, -444, 0, 4, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
		]
		, [
			[[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
			, [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 14000, 0, 0, 4, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
			, [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
		]
		, [
			[[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
			, [[0, 0, 0, 0, 0, 0, 0, 0], [0, -5, 0, 0, 0, 0, 0, 0], [0, 10, -5000, 10, 0, 0, 0, 0]]
			, [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
		]
	],
	
	gRandomEventThreshold : [[[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], false, false]
		, [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], false, false]
		, [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], false, false]
		, [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], true, false]
		, [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], true, false]
		, [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], false, false]
	 	, [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], false, false]
	 	, [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], false, false]	
		, [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], true, true]
		, [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], false, false]
		, [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], false, false]
		, [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], true, false]
		, [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], false, false]
		, [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], false, false]
		, [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], false, false]
		, [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], false, false]
		, [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], true, false]
	],
	
	gGenerateEventIndex : function(){
		
		var gEventIndex = 0;
		
		var gEventNumber = this.gRandomEventDescribe.length - 1;
		
		gEventIndex = Math.floor(Math.random() * gEventNumber) + 1;
		
		return gEventIndex;
		
	},
	
	gGenerateEventUI : function(){
			
		var gEventDescribeUI = $('#gEventDescribeUI');
		var gEventBtn1 = $('#gEventBtn1');
		var gEventBtn2 = $('#gEventBtn2');
		
		var gEventUI = $('#modal-container-000009');
			
		gEventDescribeUI.html(this.gRandomEventDescribe[gCurThread.gCurDay.gRandomEventIndex]);
		gEventBtn1.html(this.gRandomEventChoice1[gCurThread.gCurDay.gRandomEventIndex]);
		gEventBtn2.html(this.gRandomEventChoice2[gCurThread.gCurDay.gRandomEventIndex]);
		
		gEventUI.modal();
		
	},
	
	gEventSelect : function(gEventSelectNum){
		
		var gEventUI = $('#modal-container-000009');
			
		gEventUI.modal('hide');
		
		var gEventResultIndex = 2;
		
		if(this.gRandomEventThreshold[gCurThread.gCurDay.gRandomEventIndex][gEventSelectNum + 2]){
			
			if(Math.random() < 0.5){
				gEventResultIndex = 1;
			}
			
		}else{
			
			if(gCurThread.gCurHuner.gHealth > this.gRandomEventThreshold[gCurThread.gCurDay.gRandomEventIndex][gEventSelectNum][1]
			&& gCurThread.gCurHuner.gMoney > this.gRandomEventThreshold[gCurThread.gCurDay.gRandomEventIndex][gEventSelectNum][2]
			&& gCurThread.gCurHuner.gAbility > this.gRandomEventThreshold[gCurThread.gCurDay.gRandomEventIndex][gEventSelectNum][3]
			&& gCurThread.gCurHuner.gExperience > this.gRandomEventThreshold[gCurThread.gCurDay.gRandomEventIndex][gEventSelectNum][4]
			&& gCurThread.gCurHuner.gHappiness > this.gRandomEventThreshold[gCurThread.gCurDay.gRandomEventIndex][gEventSelectNum][5]
			&& gCurThread.gCurHuner.gRighteousness > this.gRandomEventThreshold[gCurThread.gCurDay.gRandomEventIndex][gEventSelectNum][6]
			&& gCurThread.gCurHuner.gRepute > this.gRandomEventThreshold[gCurThread.gCurDay.gRandomEventIndex][gEventSelectNum][7]){
				
				gEventResultIndex = 1;
		
			}
			
		}
		
		var gMoneyChange = this.gRandomEventResult[gCurThread.gCurDay.gRandomEventIndex][gEventSelectNum][gEventResultIndex][2];
		
		if(Math.abs(this.gRandomEventResult[gCurThread.gCurDay.gRandomEventIndex][gEventSelectNum][gEventResultIndex][2]) < 1){
			gMoneyChange = gCurThread.gCurHuner.gMoney * this.gRandomEventResult[gCurThread.gCurDay.gRandomEventIndex][gEventSelectNum][gEventResultIndex][2] * 10;
		}
		
		var gEventInfo = "属性变化：\n"
		            	+"健康： " + this.gRandomEventResult[gCurThread.gCurDay.gRandomEventIndex][gEventSelectNum][gEventResultIndex][1].toString() + "\n"
		            	+"金钱： " + gMoneyChange.toString() + "\n"
		            	+"能力才干： " + this.gRandomEventResult[gCurThread.gCurDay.gRandomEventIndex][gEventSelectNum][gEventResultIndex][3].toString() + "\n"
		            	+"江湖经验： " + this.gRandomEventResult[gCurThread.gCurDay.gRandomEventIndex][gEventSelectNum][gEventResultIndex][4].toString() + "\n"
		            	+"快乐： " + this.gRandomEventResult[gCurThread.gCurDay.gRandomEventIndex][gEventSelectNum][gEventResultIndex][5].toString() + "\n"
		            	+"正气： " + this.gRandomEventResult[gCurThread.gCurDay.gRandomEventIndex][gEventSelectNum][gEventResultIndex][6].toString() + "\n"
		            	+"人脉： " + this.gRandomEventResult[gCurThread.gCurDay.gRandomEventIndex][gEventSelectNum][gEventResultIndex][7].toString();
		
		gCurThread.gCurHuner.gHealth += this.gRandomEventResult[gCurThread.gCurDay.gRandomEventIndex][gEventSelectNum][gEventResultIndex][1];
		gCurThread.gCurHuner.gMoney += gMoneyChange;
		gCurThread.gCurHuner.gAbility += this.gRandomEventResult[gCurThread.gCurDay.gRandomEventIndex][gEventSelectNum][gEventResultIndex][3];
		gCurThread.gCurHuner.gExperience += this.gRandomEventResult[gCurThread.gCurDay.gRandomEventIndex][gEventSelectNum][gEventResultIndex][4];
		gCurThread.gCurHuner.gHappiness += this.gRandomEventResult[gCurThread.gCurDay.gRandomEventIndex][gEventSelectNum][gEventResultIndex][5];
		gCurThread.gCurHuner.gRighteousness += this.gRandomEventResult[gCurThread.gCurDay.gRandomEventIndex][gEventSelectNum][gEventResultIndex][6];
		gCurThread.gCurHuner.gRepute += this.gRandomEventResult[gCurThread.gCurDay.gRandomEventIndex][gEventSelectNum][gEventResultIndex][7];
		
		gUpdateUI();
		
		alert(gEventInfo);
		
	}
	
}