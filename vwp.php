<?php

/**
 * Plugin Name:     Werbepack Vue Plugin
 * Description:     Shows Massnahmen and lets users pick them.
 * Version: 0.0.3
 * Author: Johannes Eifert
 * Author URI: octotreat.ch
 *
 */

require_once("vwp/enqueues.php");

use VWP\Enqueues;

require __DIR__ . '/vendor/autoload.php';

$enqueues = new Enqueues();
$enqueues->init();
