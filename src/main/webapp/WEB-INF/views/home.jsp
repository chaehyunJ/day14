<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="header.jsp" %>


<section id="form">
	<form method="POST">
		<p><input name="title" placeholder="제목" required autofocus></p>
		<p><input name="content" placeholder="내용" required ></p>
		<p><input type="date" name="tdate" required></p>
		<p><input type="submit"></p>
	</form>
</section>

<section id="list">

</section>

<button id="btn"></button>

<script>
//  이벤트 처리
// 	const section = document.querySelector('section')
// 	console.log(section)
	const form = document.forms[0]
	console.log(form)
	const list = document.querySelector('#list')
	console.log(list)
	
	form.onsubmit = submitHandler

	window.onload = loadHandler
	
	
	const btn = document.getElementById('btn')
	console.log({btn : btn})
// 	const items = document.querySelectorAll('.items')
// 	console.log('items',items)
</script>
</body>
</html>