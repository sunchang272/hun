var gFile = {

	gSaveScore : function(gHunerName, gScore){
		
		var gFileObject;
		
		try { 
			fso=new ActiveXObject("Scripting.FileSystemObject"); 
		} catch (e) { 
			alert("当前浏览器不支持");
			return;
		} 
		
		var gScoreFile = gFileObject.createtextfile("./gScoreFile.txt",true);
		
		gScoreFile.writeLine(gHunerName + " " + gScore.toString());
		
	}
		
}