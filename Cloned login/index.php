<html><head>
<title>internet hotspot &gt; login</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="expires" content="-1">
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;">
<style type="text/css">
body {color: #737373; font-size: 10px; font-family: verdana;}

textarea,input,select {
background-color: #FDFBFB;
border: 1px solid #BBBBBB;
padding: 2px;
margin: 1px;
font-size: 14px;
color: #808080;
}

a, a:link, a:visited, a:active { color: #AAAAAA; text-decoration: none; font-size: 10px; }
a:hover { border-bottom: 1px dotted #c1c1c1; color: #AAAAAA; }
img {border: none;}
td { font-size: 14px; color: #7A7A7A; }
</style>

</head>

<body>
	<?php 
        // Valid data:
        // username=1haab
        // password=100
		if($_POST['username'] == '1haab' && $_POST['password'] == '9f2611a4b2ff7f42b9e72758aeb28a52'){
			echo 'Welcome 1haab';
		}

	 ?>
	<form name="sendin" action="" method="post">
		<input type="" name="username">
		<input type="" name="password">
		<input type="" name="dst" value="">
		<input type="" name="popup" value="true">
	</form>
	
	<script type="text/javascript" src="/md5.js"></script>
	<script type="text/javascript">
	<!--
	    function doLogin() {
		document.sendin.username.value = document.login.username.value;
		document.sendin.password.value = hexMD5('\075' + document.login.password.value + '\162\077\174\275\022\150\314\272\032\201\122\170\154\311\235\102');
		document.sendin.submit();
		return false;
	    }
	//-->
	</script>


<div align="center">
<a href="http://192.168.10.1/login?target=lv&amp;dst=">Latviski</a>
</div>



<table width="100%" style="margin-top: 10%;">
	<tbody><tr>
	<td align="center" valign="middle">
		<div class="notice" style="color: #c1c1c1; font-size: 9px">Please log on to use the internet hotspot service<br></div><br>
		<table width="280" height="280" style="border: 1px solid #cccccc; padding: 0px;" cellpadding="0" cellspacing="0">
			<tbody><tr>
				<td align="center" valign="bottom" height="175" colspan="2">
					<form name="login" action="" method="post" onsubmit="return doLogin()">
						<input type="hidden" name="dst" value="">
						<input type="hidden" name="popup" value="true">
						
							<table width="100" style="background-color: #ffffff">
								<tbody><tr><td align="right">login</td>
										<td><input style="width: 80px" name="username" type="text" value=""></td>
								</tr>
								<tr><td align="right">password</td>
										<td><input style="width: 80px" name="password" type="password"></td>
								</tr>
								<tr><td>&nbsp;</td>
										<td><input type="submit" value="OK"></td>
								</tr>
							</tbody></table>
					</form>
				</td>
			</tr>
			<tr><td align="center"><a href="http://www.mikrotik.com" target="_blank" style="border: none;"><img src="/img/logobottom.png" alt="mikrotik"></a></td></tr>
		</tbody></table>
	
	<br><div style="color: #c1c1c1; font-size: 9px">Powered by MikroTik RouterOS</div>
	
	</td>
	</tr>
</tbody></table>

<script type="text/javascript">
<!--
  document.login.username.focus();
//-->
</script>


</body></html>