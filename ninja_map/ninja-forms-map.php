<?php if ( ! defined( 'ABSPATH' ) ) exit;
  /**
  * Plugin Name: Google Ninja Forms Map
  * Description: This grabs the google map api and adds it to ninja forms inputs
  * Version: 1.0
  * Author: James Kinler
  */

    include plugin_dir_path(__FILE__) . '/includes/Nfmap.php';
    include plugin_dir_path(__FILE__) . '/includes/Nfmap_input.php';
    include plugin_dir_path(__FILE__) . '/includes/Nfmap_lat_input.php';
    include plugin_dir_path(__FILE__) . '/includes/Nfmap_lng_input.php';


    final class NF_GM_JK_PLUGIN{
    public function __construct(){
      add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ));
      add_action('wp_enqueue_scripts', array($this, 'enqueue_styles'));
      // this adds a hook to add a new section to ninja forms admin page
      add_filter( 'ninja_forms_field_type_sections', array( $this, 'add_section' ));


      add_filter('ninja_forms_register_fields', function($fields){
      $fields['nfMap'] = new NfMap();
      return $fields;
      });

      add_filter('ninja_forms_register_fields', function($fields){
      $fields['nfMap_input'] = new NfMap_input();
      return $fields;
      });

      add_filter('ninja_forms_register_fields', function($fields){
      $fields['nfMap_lat_input'] = new NfMap_lat_input();
      return $fields;
      });

      add_filter('ninja_forms_register_fields', function($fields){
      $fields['nfMap_lng_input'] = new NfMap_lng_input();
      return $fields;
      });



      add_filter( 'ninja_forms_field_template_file_paths', 'custom_field_file_path' );
      function custom_field_file_path( $paths ){
      // looks for the templates file in the includes templates
      $paths[] =  plugin_dir_path(__FILE__) . '/includes/Templates/';
      return $paths;
      }
    }

    public function add_section( $sections )
   {
       $sections[ 'google-map' ] = array(
           'id' => 'google-map',
           'nicename' => __( 'Google Map API', 'ninja-forms-ua' ),
           'fieldTypes' => array(),
       );
       return $sections;
   }

  public function enqueue_styles(){
    wp_enqueue_style('styles_css', plugin_dir_url(__FILE__). '/css/styles.css');
  }

  public function enqueue_scripts(){
    wp_enqueue_script( 'alert-js', 'https://unpkg.com/sweetalert/dist/sweetalert.min.js', array( 'nf-front-end'),true);
    wp_enqueue_script( 'maps-js', plugin_dir_url( __FILE__ ) . 'js/maps.js', array( 'nf-front-end', 'jquery-core', 'jquery' ),true);
    wp_enqueue_script( 'init-js', plugin_dir_url( __FILE__ ) . 'js/init.js', array( 'nf-front-end', 'jquery-core', 'jquery' ),true);
    wp_enqueue_script( 'data-js', plugin_dir_url( __FILE__ ) . 'js/data.js', array( 'nf-front-end', 'jquery-core', 'jquery' ),true);
  }

  }

  new NF_GM_JK_PLUGIN();
?>
