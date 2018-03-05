<?php

namespace VWP;

class Enqueues {

	public function init() {
		$this->attach_hooks();
        add_action( 'init', array( $this, 'add_w_rewrite_rules' ) );
	}
    public function add_w_rewrite_rules() {
//        add_rewrite_rule('^/?massnahmen/.+/?', 'massnahmen', 'top');
        add_rewrite_rule('^/?massnahmen/.+/?', 'index.php?pagename=massnahmen', 'top');
    }

    public function attach_hooks() {
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue' ) );
	}

	public function enqueue() {
		wp_enqueue_script( 'VWP', plugin_dir_url( dirname( __FILE__ ) ) . 'dist/js/bundle.js' );
    }

}
