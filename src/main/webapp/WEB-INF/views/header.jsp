<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<c:set var="cpath" value="${ pageContext.request.contextPath }"/>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>ToDo list</title>
<link rel="stylesheet" type="text/css" href="${ cpath }/resources/css/style.css">
</head>
<body>

<script>
	const cpath = '${ cpath }'
</script>
<script src="${ cpath }/resources/js/function.js"></script>

<header>
	<h1><a href="${ cpath }">todo List</a></h1>
</header>

