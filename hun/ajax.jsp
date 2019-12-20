<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ page import="pers.sunch.factory.*"%>
<%@ page import="pers.sunch.bean.*"%>
<%@ page import="pers.sunch.bean.*"%> 
<%@ page import="java.text.SimpleDateFormat"%>
<%@ page import="java.util.Date"%>

<%
	Integer method = Integer.parseInt(request.getParameter("method"));
	
	if (method == 1) {
		
		String gHunerName =  request.getParameter("gHunerName");
		Integer gTotalScore = Integer.parseInt(request.getParameter("gTotalScore"));
		
		Huner gCurHuner = new Huner();
		
		//格式化日期
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
		
		String gPlayDate = sdf.format(new Date());
		
		gCurHuner.setgHunerName(gHunerName);
		gCurHuner.setgTotalScore(gTotalScore);
		gCurHuner.setgPlayDate(gPlayDate);
		
		DAOFactory.getHunerDAOInstance().saveScore(gCurHuner);
	
		out.println("提交成绩成功");
	
	}else if(method == 2){

		out.println(DAOFactory.getHunerDAOInstance().getRankList());
		
	}

%>