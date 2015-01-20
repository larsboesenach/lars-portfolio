<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package Underscores
 */
?>
</div><!-- page-wrap -->


<footer id="colophon" class="site-footer" role="contentinfo">
	<div class="site-info">
		<div class="container">
			

		</div>
	</div><!-- .site-info -->
</footer><!-- #colophon -->




<?php wp_footer(); 
// This fxn allows plugins to insert themselves/scripts/css/files (right here) into the footer of your website. 
// Removing this fxn call will disable all kinds of plugins. 
// Move it if you like, but keep it around.
?>



<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/js/custom-js.js"></script>


</body>
</html>