<%
    response.setHeader("Access-Control-Allow-Origin","*");
%>

<%@ 
    page 
    language="java" 
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import = "vivienne.UserDAO" %>

<% 
    request.setCharacterEncoding("UTF-8");     
%>

<%
    String user_email    = request.getParameter("user_email");
    String user_name     = request.getParameter("user_name");
    String user_pw       = request.getParameter("user_pw");
    String user_gender   = request.getParameter("user_gender");
    String user_hp       = request.getParameter("user_hp");
    String user_service  = request.getParameter("user_service");
    String user_birth    = request.getParameter("user_birth");
%>

{"이메일":"<%=user_email%>", "이름":"<%=user_name%>", "비밀번호":"<%=user_pw%>", "성별":"<%=user_gender%>","휴대폰":"<%=user_hp%>","약관동의":"<%=user_service%>","생년월일":"<%=user_birth%>"}