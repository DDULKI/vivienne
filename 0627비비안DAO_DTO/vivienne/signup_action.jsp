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

<jsp:useBean id="userDTO" class="vivienne.UserDTO" scope="page"/>
<jsp:setProperty name="userDTO" property="user_email"/>
<jsp:setProperty name="userDTO" property="user_name"/>
<jsp:setProperty name="userDTO" property="user_pw"/>
<jsp:setProperty name="userDTO" property="user_gender"/>
<jsp:setProperty name="userDTO" property="user_hp"/>
<jsp:setProperty name="userDTO" property="user_service"/>
<jsp:setProperty name="userDTO" property="user_birth"/>

<%
    UserDAO userDAO = new UserDAO();
    int result = userDAO.signup(userDTO);
%>

{"AJAX실행 DTO & DAO 결과" : "<%=result%>"}