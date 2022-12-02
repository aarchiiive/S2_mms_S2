<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%> 
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>JSP 게시판 웹 사이트</title>	
</head>

	<script language='javascript'>
	function test(){
		alaert("버튼을 클릭하셨습니다");
		
	}
	</script>
<body>
<h1>
<form>
   <input type='button' value="로그인" onclick="location.href='login.jsp'"style="WIDTH: 100pt; HEIGHT: 20pt" >
   
</form>
<form>
   <input type='button' value="회원가입" onclick="location.href='join.jsp'" style="WIDTH: 100pt; HEIGHT: 20pt" >
   
</form>
</h1>
</body>
</html>