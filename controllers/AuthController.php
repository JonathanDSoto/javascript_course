<?php 
	include "config.php";

	if (isset($_POST['action'])) {
		switch ($_POST['action']) {
			case 'login':
				login();
				break;
			
			default:
				# code...
				break;
		}
	}

	function login(){

		if (isset($_POST['token']) && $_POST['token'] == $_SESSION['token']) {

			echo $_POST['email'];
			echo "<hr>";
			echo $_POST['password'];
			echo "<hr>";
		}else{
			echo $_SESSION['token'];
		}

		
	}
	

?>