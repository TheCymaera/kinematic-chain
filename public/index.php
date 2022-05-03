<?php
$url = strtok("$_SERVER[REQUEST_SCHEME]://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]", "\?|#");

// page basic settings
$page_title 		= "Double Pendulum";
$page_description 	= "Double Pendulum.";
$page_author		= "Morgan";
$page_keywords		= "Heledron, Cymaera";

// page open graph settings
$page_og_title 			= $page_title;
$page_og_description 	= $page_description;
$page_og_url 			= $url;
$page_og_image 			= $page_og_url . "thumbnail.png";
$page_og_type 			= "website";
?>
<!DOCTYPE html>
<html class="full-window-document">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

	<!-- title & favicon -->
	<title><?php echo $page_title;?></title>
    <link rel="icon" href="/favicon.png" type="image/png"/>
	
	<!-- info -->
    <meta name="author" content="<?php echo $page_author;?>"/>
    <meta name="description" content="<?php echo $page_description;?>"/>
    <meta name="keywords" content="<?php echo $page_keywords;?>"/>
	
	<!-- sharing -->
    <meta property="og:title" content="<?php echo $page_og_title;?>"/>
    <meta property="og:description" content="<?php echo $page_og_description;?>"/>
    <meta property="og:url"   content="<?php echo $page_og_url;?>"/>
    <meta property="og:image" content="<?php echo $page_og_image;?>"/>
    <meta property="og:type"  content="<?php echo $page_og_type;?>"/>

	<!-- styles -->
	<link rel="stylesheet" type="text/css" href="/shared/helion/v1/dst/index.css"/>
	<link rel="stylesheet" type="text/css" href="/shared/fontawesome-free-5.13.1-web/css/all.min.css"/>
	<link rel="stylesheet" type="text/css" href="./dst/main.css"/>

	<!-- scripts -->
	<script type="module" src="/shared/helion/v1/dst/index.js"></script>
	<script type="module" src="./dst/main.js"></script>
</head>
<body class="stack">
	<canvas class="fill-window"></canvas>
	<div class="layout action-buttons">
		<button class="circle-button" title="Info" id="openDialog">
			<i class="fa fa-info"></i>
		</button>
		<button class="circle-button" title="Share" id="share">
			<i class="fa fa-share"></i>
		</button>
		<span style="flex: 1;"></span>
		<a class="circle-button" title="Home" href="/">
			<i class="fa fa-home"></i>
		</a>
	</div>
	<panel- style="overflow: auto;">
		<div style="margin: auto; max-width: 800px; width: 100%; padding: 1em;">
			<?php include "./info.html"; ?>
			<div style="height: 300px;"></div>
		</div>

		<div class="layout fill-window action-buttons">
			<button class="circle-button" title="Close" id="closeDialog"> 
				<i class="fa fa-times"></i>
			</button>
		</div>
	</panel->
</body>
</html>
