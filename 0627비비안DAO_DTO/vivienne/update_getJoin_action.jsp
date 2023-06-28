<%@ page
    language="java"
    contentType="application/json; charset=UTF-8"
    pageEncoding="UTF-8"
%>
<%@ page import="vivienne.UserDAO" %>
<%@ page import="vivienne.UserDTO" %>

<%
    response.setHeader("Access-Control-Allow-Origin", "*");
    request.setCharacterEncoding("UTF-8");

    String user_email = request.getParameter("user_email");

    UserDAO userDAO = new UserDAO();
    UserDTO userDTO = userDAO.getJoin(user_email);

    String jsonData =  "{ \"result\": {"
    + "\"이메일\": \"" + userDTO.getUser_email() + "\","
    + "\"이름\": \"" + userDTO.getUser_name() + "\","
    + "\"비밀번호\": \"" + userDTO.getUser_pw() + "\","
    + "\"성별\": \"" + userDTO.getUser_gender() + "\","
    + "\"휴대폰\": \"" + userDTO.getUser_hp() + "\","
    + "\"약관동의\": \"" + userDTO.getUser_service() + "\","
    + "\"생년월일\": \"" + userDTO.getUser_birth() + "\""
    + "} }";
     response.getWriter().write(jsonData);
%>
