<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link https://fr.wordpress.org/support/article/editing-wp-config-php/ Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define('WP_CACHE', true);
define( 'WPCACHEHOME', 'C:\MAMP\htdocs\chic-dressing\wp-content\plugins\wp-super-cache/' );
define( 'DB_NAME', 'chic_dressing' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', 'root' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'NEE.0*0VE!bN$0bsp9I?DH3HS|YDF_d4X2dqzzjIak=txNKexA-5-86h/OX?i=M7' );
define( 'SECURE_AUTH_KEY',  '#.qVLUOsd84AYxQ6*Uq399C]3K.*N&C!Q~sQjxVSu_]?tp OwLu[LH6{P u[Ya,4' );
define( 'LOGGED_IN_KEY',    'O6Jck/<,0P};J-P3.+VLj1zvJ`f!w3)n+IBJ(s0H>:Q.1}v-Ijniu1GU-uHiK,qU' );
define( 'NONCE_KEY',        'p@f,gPCHX:d8HUV69B!P6=|Y;}U,dBLHB/&{v8U-_kX9a!~{|:<p^O|wYLdVs|S}' );
define( 'AUTH_SALT',        '}p+F`8:_e{#-ZLrAX7<_kgY4Y~Zh~H)8-25JW_f>x&C+)<0>ryX_(Pu#*YSfP_CL' );
define( 'SECURE_AUTH_SALT', 'e#Ly~__DKA?bJO%X <t:;}DX 7U&l7!&4Q5LDG(I`9>W_&lrDm>43ow Aq)6oo=@' );
define( 'LOGGED_IN_SALT',   'FFTyWjvwVU=;N9[-vO4j-lUM#]r.+!^bID|L9T`g3=+9SwfdXAB7Cs-Y~%Z9G-dS' );
define( 'NONCE_SALT',       '#zfoLYOs=%|k^]x4ZnYdN`((fNadld)5,=yaWDJ{?*^5QvO)d}T-)^hG^K{-[i,#' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs et développeuses : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs et développeuses d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur la documentation.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
