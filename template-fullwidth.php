<?php
/* 
Template Name: Fullwidth page
*/
?>

<?php get_header(); ?>
<!-- ------------------------------------- -->
<!-- Insert template specific scripts here -->



<!-- ---------- -->
<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<div class="page-wrap">
<!-- -------------------------------------------- -->
<?php include "includes/navigation.php";?>
<!-- ------------------------------------------ -->



<div class="Content-entry">

	<?php if ( have_posts() ) :?>
	<?php while ( have_posts() ) : the_post(); ?>

	<div class="container">	
		<h2 class="pagetitle"><?php the_title(); ?>.</h2> 
			
		<div class="row">
			<div class="col-md-12">			
				<?php the_content(); ?>
			</div><!-- col12 -->				
		</div><!-- row -->
		
	</div><!-- container -->

</div><!-- C-entry -->


<?php endwhile; endif; ?>
<?php get_footer(); ?>