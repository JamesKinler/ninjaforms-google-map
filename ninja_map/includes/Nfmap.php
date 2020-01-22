<?php

if (!class_exists('NF_Abstracts_List')) {
    return;
}

class NfMap extends NF_Abstracts_Field
{
    protected $_name = 'nfMap';

    protected $_type = 'nfMap';

    // protected $_aliases = array( 'input' );

    protected $_section = 'google-map';

    protected $_icon = 'map-marker';

    protected $_templates = 'nfMap';

    // protected $_test_value = 'Lorem ipsum';

    protected $_settings = array(
      'disable_browser_autocomplete',
      'label',
      'label_pos',
      'required',
      'placeholder',
      'default',
    );

    public function __construct()
    {

        parent::__construct();
        $this->_nicename = __( 'Google Map', 'ninja-forms' );
    }

}
