<?php
/**
 * Endpoints REST para formularios de la SPA.
 *
 * @package Aplus_Gastromarketing
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Registra las rutas de la API.
 */
function aplus_register_rest_routes(): void
{
    register_rest_route('aplus/v1', '/contact', [
        'methods' => 'POST',
        'callback' => 'aplus_handle_contact_submission',
        'permission_callback' => 'aplus_rest_permission_check',
        'args' => [
            'name' => [
                'required' => true,
                'type' => 'string',
                'sanitize_callback' => 'sanitize_text_field',
            ],
            'email' => [
                'required' => true,
                'type' => 'string',
                'sanitize_callback' => 'sanitize_email',
            ],
            'message' => [
                'required' => false,
                'type' => 'string',
                'sanitize_callback' => 'sanitize_textarea_field',
            ],
            'category' => [
                'required' => false,
                'type' => 'string',
                'sanitize_callback' => 'sanitize_text_field',
            ],
        ],
    ]);

    register_rest_route('aplus/v1', '/newsletter', [
        'methods' => 'POST',
        'callback' => 'aplus_handle_newsletter_submission',
        'permission_callback' => 'aplus_rest_permission_check',
        'args' => [
            'email' => [
                'required' => true,
                'type' => 'string',
                'sanitize_callback' => 'sanitize_email',
            ],
        ],
    ]);
}
add_action('rest_api_init', 'aplus_register_rest_routes');

/**
 * Verifica nonce y limita el acceso a peticiones autenticadas por REST.
 */
function aplus_rest_permission_check(WP_REST_Request $request): bool|WP_Error
{
    $nonce = $request->get_header('X-WP-Nonce');

    if (!$nonce || !wp_verify_nonce($nonce, 'wp_rest')) {
        return new WP_Error(
            'aplus_invalid_nonce',
            __('Solicitud no autorizada.', 'aplus-gastromarketing'),
            ['status' => 403]
        );
    }

    return true;
}

/**
 * Procesa el formulario de contacto / reto.
 */
function aplus_handle_contact_submission(WP_REST_Request $request): WP_REST_Response|WP_Error
{
    $name = (string) $request->get_param('name');
    $email = (string) $request->get_param('email');
    $message = (string) $request->get_param('message');
    $category = (string) $request->get_param('category');

    if ($name === '' || $email === '' || !is_email($email)) {
        return new WP_Error(
            'aplus_invalid_contact',
            __('Completa nombre y un email válido.', 'aplus-gastromarketing'),
            ['status' => 400]
        );
    }

    $admin_email = get_option('admin_email');
    $subject = sprintf(
        /* translators: %s: sender name */
        __('[Aplus] Nuevo contacto de %s', 'aplus-gastromarketing'),
        $name
    );

    $body = "Nombre: {$name}\n";
    $body .= "Email: {$email}\n";
    if ($category !== '') {
        $body .= "Categoría: {$category}\n";
    }
    $body .= "\nMensaje:\n{$message}\n";

    $headers = [
        'Content-Type: text/plain; charset=UTF-8',
        'Reply-To: ' . $name . ' <' . $email . '>',
    ];

    $sent = wp_mail($admin_email, $subject, $body, $headers);

    if (!$sent) {
        return new WP_Error(
            'aplus_mail_failed',
            __('No se pudo enviar el mensaje. Inténtalo más tarde.', 'aplus-gastromarketing'),
            ['status' => 500]
        );
    }

    return new WP_REST_Response([
        'success' => true,
        'message' => __('Mensaje enviado correctamente.', 'aplus-gastromarketing'),
    ], 200);
}

/**
 * Procesa la suscripción al newsletter.
 */
function aplus_handle_newsletter_submission(WP_REST_Request $request): WP_REST_Response|WP_Error
{
    $email = (string) $request->get_param('email');

    if ($email === '' || !is_email($email)) {
        return new WP_Error(
            'aplus_invalid_email',
            __('Indica un correo electrónico válido.', 'aplus-gastromarketing'),
            ['status' => 400]
        );
    }

  /**
   * Hook para integrar con plugins de newsletter (Mailchimp, FluentCRM, etc.).
   *
   * @param string $email Email del suscriptor.
   */
    do_action('aplus_newsletter_subscribe', $email);

    $admin_email = get_option('admin_email');
    $subject = __('[Aplus] Nueva suscripción al newsletter', 'aplus-gastromarketing');
    $body = "Nueva suscripción:\n{$email}\n";

    wp_mail($admin_email, $subject, $body, ['Content-Type: text/plain; charset=UTF-8']);

    return new WP_REST_Response([
        'success' => true,
        'message' => __('Suscripción registrada correctamente.', 'aplus-gastromarketing'),
    ], 200);
}
