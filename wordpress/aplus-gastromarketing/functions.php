<?php
/**
 * Aplus Gastromarketing — funciones del tema.
 *
 * @package Aplus_Gastromarketing
 */

if (!defined('ABSPATH')) {
    exit;
}

define('APLUS_THEME_VERSION', '1.0.0');
define('APLUS_THEME_DIR', get_template_directory());
define('APLUS_THEME_URI', get_template_directory_uri());

require_once APLUS_THEME_DIR . '/inc/enqueue.php';
require_once APLUS_THEME_DIR . '/inc/rest-api.php';

/**
 * Configuración básica del tema.
 */
function aplus_theme_setup(): void
{
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', ['search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script']);

    register_nav_menus([
        'primary' => __('Menú principal', 'aplus-gastromarketing'),
    ]);
}
add_action('after_setup_theme', 'aplus_theme_setup');

/**
 * Reduce estilos por defecto de WordPress que no usa la SPA.
 */
function aplus_dequeue_default_styles(): void
{
    wp_dequeue_style('wp-block-library');
    wp_dequeue_style('wp-block-library-theme');
    wp_dequeue_style('wc-blocks-style');
    wp_dequeue_style('global-styles');
}
add_action('wp_enqueue_scripts', 'aplus_dequeue_default_styles', 100);

/**
 * Aviso en el admin si faltan los assets compilados.
 */
function aplus_missing_build_notice(): void
{
    $manifest_path = APLUS_THEME_DIR . '/dist/.vite/manifest.json';

    if (file_exists($manifest_path)) {
        return;
    }

    echo '<div class="notice notice-warning"><p>';
    echo esc_html__(
        'Aplus Gastromarketing: ejecuta "npm run build" en el proyecto para generar los assets del tema.',
        'aplus-gastromarketing'
    );
    echo '</p></div>';
}
add_action('admin_notices', 'aplus_missing_build_notice');
