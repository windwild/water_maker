
<?php
	if(isset($_GET['id'])){
		$id = $_GET['id'];
		header('Content-Type: image/png');
		header('Content-Disposition: attachment; filename='.$id.'.pdf');
		readfile('files/'.$id.'.pdf');
	}
