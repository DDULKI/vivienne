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
<jsp:setProperty name="userDTO" property="user_pw"/>
<jsp:setProperty name="userDTO" property="user_email"/>

<%
    UserDAO userDAO = new UserDAO();
    int result = userDAO.signin(userDTO.getUser_email(), userDTO.getUser_pw());
%>

<%
    String jsonData = "{ \"result\": \"" + result + "\"" + "}";

    response.getWriter().write(jsonData);
%>