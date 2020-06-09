<?php 
	if (strpos($_SERVER['HTTP_USER_AGENT'], 'Edg') !== FALSE) { 
?>

<h3>Está usando Internet Explorer</h3>


<?php }else{ ?>

<h3>No está usando Internet Explorer</h3> 

<?php } ?>