<?php
/*
Plugin Name: Custom Rotative Menu Plugin
Plugin URI: 
Description: A Simple Custom Menu Plugin.
Version: 1.0.0
License: GPL2
*/

defined('ABSPATH') or exit;

if (!defined("ROTATIONAL_MENU_DIR"))
{
    define("ROTATIONAL_MENU_DIR", plugin_dir_path(__FILE__));
}

include_once ROTATIONAL_MENU_DIR . '/admin/rotational-admin-display.php';
require_once ROTATIONAL_MENU_DIR . '/admin/class-rotation.php';


function rotational_menu_on_activation(){
    // create the custom table
    global $wpdb;
    
    $table_name = $wpdb->prefix . 'rotational_menu';
    $charset_collate = $wpdb->get_charset_collate();
    
    $sql = "CREATE TABLE IF NOT EXISTS $table_name (
        id bigint(20) NOT NULL PRIMARY KEY,
        selected_menu_location varchar(50) NOT NULL default '') $charset_collate;";

    
    require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
    dbDelta( $sql );

    
    $wpdb->insert($table_name, array('id' => 1, 'selected_menu_location' => 'primary'));
}
register_activation_hook( __FILE__, 'rotational_menu_on_activation' );


/*******ADD SCRIPTS FOR ADMIN PAGE*********/
function wpb_adding_scripts()
{
    wp_register_style('rotating_menu_style', plugins_url('admin/css/style.css', __FILE__));
    wp_enqueue_style('rotating_menu_style');

    wp_register_script('custom_menu_script', plugins_url('admin/js/menu.js', __FILE__) , array(
        'jquery'
    ) , '1.1', true);
    wp_register_script('rotating_menu_script', plugins_url('admin/js/rotational_menu.js', __FILE__) , array(
        'jquery'
    ) , '1.1', true);
    wp_enqueue_script('rotating_menu_script');
    wp_enqueue_script('custom_menu_script');
}

add_action('wp_enqueue_scripts', 'wpb_adding_scripts');