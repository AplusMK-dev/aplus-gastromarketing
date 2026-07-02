<?php
/**
 * Encolado de assets compilados por Vite.
 *
 * @package Aplus_Gastromarketing
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Lee el manifest de Vite.
 *
 * @return array<string, mixed>|null
 */
function aplus_get_vite_manifest(): ?array
{
    static $manifest = null;

    if ($manifest !== null) {
        return $manifest;
    }

    $paths = [
        APLUS_THEME_DIR . '/dist/.vite/manifest.json',
        APLUS_THEME_DIR . '/dist/manifest.json',
    ];

    foreach ($paths as $path) {
        if (!file_exists($path)) {
            continue;
        }

        $decoded = json_decode((string) file_get_contents($path), true);
        if (is_array($decoded)) {
            $manifest = $decoded;
            return $manifest;
        }
    }

    return null;
}

/**
 * Encola JS y CSS de la aplicación React.
 */
function aplus_enqueue_assets(): void
{
    $manifest = aplus_get_vite_manifest();
    if ($manifest === null) {
        return;
    }

    $entry = null;
    foreach ($manifest as $asset) {
        if (!empty($asset['isEntry'])) {
            $entry = $asset;
            break;
        }
    }

    if ($entry === null || empty($entry['file'])) {
        return;
    }

    wp_enqueue_script(
        'aplus-app',
        APLUS_THEME_URI . '/dist/' . ltrim($entry['file'], '/'),
        [],
        APLUS_THEME_VERSION,
        ['in_footer' => true, 'strategy' => 'defer']
    );

    if (!empty($entry['css']) && is_array($entry['css'])) {
        foreach ($entry['css'] as $index => $css_file) {
            wp_enqueue_style(
                'aplus-app-style-' . $index,
                APLUS_THEME_URI . '/dist/' . ltrim($css_file, '/'),
                [],
                APLUS_THEME_VERSION
            );
        }
    }

    wp_localize_script('aplus-app', 'aplusConfig', [
        'apiUrl' => esc_url_raw(rest_url('aplus/v1')),
        'nonce' => wp_create_nonce('wp_rest'),
        'siteUrl' => esc_url_raw(home_url('/')),
        'isWordPress' => true,
    ]);
}
add_action('wp_enqueue_scripts', 'aplus_enqueue_assets');
