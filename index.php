<?php
	include "controllers/config.php";
?>
<!DOCTYPE html>
<html lang="es">
<head>
	<title></title>
	<meta name="" charset="utf-8">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
</head>
<body >
	<div class="container">
		
		<div class="row">
			<div class="col-4">
				
			</div>
			<div class="col-4">
						<div class="row"> 
							<div class="col">
								<center>
									<img class="mb-4" src="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
								</center>
							</div> 
						</div>
						<div class="row">
							<div class="col">
								<form action="<?= BASE_PATH."controllers/AuthController.php" ?>" method="POST">

								  <div class="form-group">
								    <label for="exampleInputEmail1">Email address</label>
								    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" required="">
								    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
								  </div>

								  <div class="form-group">
								    <label for="exampleInputPassword1">Password</label>
								    <input type="password" class="form-control" id="exampleInputPassword1" required name="password">
								  </div>

								  <div class="form-group form-check">
								    <input type="checkbox" class="form-check-input" id="exampleCheck1">
								    <label class="form-check-label" for="exampleCheck1">Check me out</label>
								  </div>

								  <button type="submit" class="btn btn-primary">Submit</button>
								  <input type="hidden" value="login" name="action">
								  <input type="hidden" name="token" value="<?= $_SESSION['token'] ?>">
								</form>
							</div>
						</div>
			</div>
		</div>


	</div>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
</body>
</html>