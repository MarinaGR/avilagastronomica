-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 28-05-2014 a las 08:29:11
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `avgastronomica`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `h_accounts_items`
--

CREATE TABLE IF NOT EXISTS `h_accounts_items` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `c1` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c2` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c3` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c4` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c5` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c6` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c7` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c8` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c9` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c10` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c11` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c12` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c13` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c14` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c15` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c16` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c17` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c18` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c19` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c20` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c41` datetime DEFAULT NULL,
  `c42` datetime DEFAULT NULL,
  `c43` datetime DEFAULT NULL,
  `c44` datetime DEFAULT NULL,
  `c45` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=14 ;

--
-- Volcado de datos para la tabla `h_accounts_items`
--

INSERT INTO `h_accounts_items` (`id`, `c1`, `c2`, `c3`, `c4`, `c5`, `c6`, `c7`, `c8`, `c9`, `c10`, `c11`, `c12`, `c13`, `c14`, `c15`, `c16`, `c17`, `c18`, `c19`, `c20`, `c41`, `c42`, `c43`, `c44`, `c45`) VALUES
(1, 'account_1', '1400487475', '1400487475', '1', 'h_accounts_items', '920223344', 'mi%40email.es', 'Clara', 'Garc%C3%ADa', 'mipassw', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(6, 'este%40correo.es', '1400495928', '1400495928', '1', 'h_accounts_items', '920+55+66+88', NULL, 'Marina', 'GR', '123', '123', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(11, 'estees%40micorreo.com', '1400496896', '1400496896', '1', 'h_accounts_items', '925+32+78+92', NULL, 'Juan+Jos%C3%A9', 'Garc%C3%ADa+Herr%C3%A1ez', '12345', '12345', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(13, 'este%40micorreo.es', '1400497324', '1400497324', '1', 'h_accounts_items', '652+33+55+68', NULL, 'Elena', 'Rodr%C3%ADguez', '123', '123', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `h_bookings_items`
--

CREATE TABLE IF NOT EXISTS `h_bookings_items` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `c1` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c2` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c3` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c4` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c5` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c6` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c7` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c8` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c9` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c10` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c11` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c12` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c13` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c14` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c15` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c16` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c17` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c18` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c19` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c20` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c41` datetime DEFAULT NULL,
  `c42` datetime DEFAULT NULL,
  `c43` datetime DEFAULT NULL,
  `c44` datetime DEFAULT NULL,
  `c45` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=4 ;

--
-- Volcado de datos para la tabla `h_bookings_items`
--

INSERT INTO `h_bookings_items` (`id`, `c1`, `c2`, `c3`, `c4`, `c5`, `c6`, `c7`, `c8`, `c9`, `c10`, `c11`, `c12`, `c13`, `c14`, `c15`, `c16`, `c17`, `c18`, `c19`, `c20`, `c41`, `c42`, `c43`, `c44`, `c45`) VALUES
(1, 'booking_1', '1400491291', '1400491291', '1', 'h_bookings_items', 'restaurant_1', 'este%40correo.es', '12-08-2014', '14%3A30', '', '', '1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, '1400585855', '1400585855', '1400585855', '1', 'h_bookings_items', 'false', '0', '2014-05-22', '12%3A30', '20%3A00', '3', '1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, '1400585900', '1400585900', '1400585900', '1', 'h_bookings_items', 'false', '0', '2014-05-24', '14%3A00', '', '3', '1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `h_menus_items`
--

CREATE TABLE IF NOT EXISTS `h_menus_items` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `c1` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c2` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c3` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c4` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c5` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c6` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c7` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c8` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c9` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c10` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c11` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c12` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c13` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c14` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c15` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c16` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c17` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c18` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c19` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c20` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c41` datetime DEFAULT NULL,
  `c42` datetime DEFAULT NULL,
  `c43` datetime DEFAULT NULL,
  `c44` datetime DEFAULT NULL,
  `c45` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=2 ;

--
-- Volcado de datos para la tabla `h_menus_items`
--

INSERT INTO `h_menus_items` (`id`, `c1`, `c2`, `c3`, `c4`, `c5`, `c6`, `c7`, `c8`, `c9`, `c10`, `c11`, `c12`, `c13`, `c14`, `c15`, `c16`, `c17`, `c18`, `c19`, `c20`, `c41`, `c42`, `c43`, `c44`, `c45`) VALUES
(1, 'menu_1', '1400572869', '1400572869', '1', 'h_menus_items', 'restaurant_2', 'es%2Aov%2AEnsalada%2As_ov%2Aen%2Aov%2ASalad', 'es%2Aov%2ALechuga+y+tomates%2As_ov%2Aen%2Aov%2ALettuce+and+tomatoes', 'es%2Aov%2AEntrante%2As_ov%2Aen%2Aov%2AEntrees', 'interior%2Aov%2A3%2As_ov%2Aexterior%2Aov%2A3.5', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `h_restaurants_items`
--

CREATE TABLE IF NOT EXISTS `h_restaurants_items` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `c1` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c2` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c3` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c4` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c5` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c6` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c7` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c8` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c9` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c10` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c11` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c12` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c13` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c14` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c15` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c16` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c17` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c18` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c19` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c20` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `c41` datetime DEFAULT NULL,
  `c42` datetime DEFAULT NULL,
  `c43` datetime DEFAULT NULL,
  `c44` datetime DEFAULT NULL,
  `c45` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=12 ;

--
-- Volcado de datos para la tabla `h_restaurants_items`
--

INSERT INTO `h_restaurants_items` (`id`, `c1`, `c2`, `c3`, `c4`, `c5`, `c6`, `c7`, `c8`, `c9`, `c10`, `c11`, `c12`, `c13`, `c14`, `c15`, `c16`, `c17`, `c18`, `c19`, `c20`, `c41`, `c42`, `c43`, `c44`, `c45`) VALUES
(7, 'restaurant_1', '1399968387', '1399968387', '1', 'h_restaurants_items', '920223344', 'Teso+del+Hospital+Viejo%2C+10', '05002', '%C3%81vila', '%C3%81vila', 'Espa%C3%B1a', 'Restaurante+de+prueba', 'Descripci%C3%B3n+del+restaurante+de+prueba', '40.654688%2C-4.700982', './resources/html/restaurantes/restaurant_1_es.html', NULL, '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(8, 'restaurant_2', '1399968387', '1399968387', '1', 'h_restaurants_items', '920556677', 'Avenida+de+Portugal%2C+2', '05004', '%C3%81vila', '%C3%81vila', 'Espa%C3%B1a', 'Restaurante+segundo', 'Descripci%C3%B3n+del+segundo+restaurante', '40.654570%2C-4.703428', NULL, NULL, '1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(9, 'restaurant_3', '1399968387', '1399968387', '1', 'h_restaurants_items', '920996633', 'Traves%C3%ADa+nueva%2C+35', '05003', '%C3%81vila', '%C3%81vila', 'Espa%C3%B1a', 'es%2Aov%2ATercer+restaurante%2As_ov%2Aen%2Aov%2AThird+restaurant', 'es%2Aov%2ADescripci%C3%B3n+del+tercer+restaurante%2As_ov%2Aen%2Aov%2ADescription+third+restaurant', '40.658457%2C-4.698364', NULL, NULL, '1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(10, 'restaurant_4', '1399968387', '1399968387', '1', 'h_restaurants_items', '920557733', 'Traves%C3%ADa+vieja%2C+12', '05001', '%C3%81vila', '%C3%81vila', 'Espa%C3%B1a', 'es%2Aov%2ACuarto+restaurante%2As_ov%2Aen%2Aov%2AFourth+restaurant', 'es%2Aov%2ADescripci%C3%B3n+del+cuarto+restaurante%2As_ov%2Aen%2Aov%2ADescription+fourth+restaurant', '40.666785%2C-4.685272', NULL, NULL, '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(11, 'restaurant_5', '1399968387', '1399968387', '1', 'h_restaurants_items', '920987654', 'Cuarta+avenida%2C+1', '05002', '%C3%81vila', '%C3%81vila', 'Espa%C3%B1a', 'es%2Aov%2AQuinto+restaurante%2As_ov%2Aen%2Aov%2AFifth+restaurant', 'es%2Aov%2ADescripci%C3%B3n+del+quinto+restaurante%2As_ov%2Aen%2Aov%2ADescription+fifth+restaurant', '40.651742%2C-4.702709', NULL, NULL, '1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
