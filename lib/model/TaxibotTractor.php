<?php
require 'lib/model/om/BaseTaxibotTractor.php';

/**
 * Skeleton subclass for representing a row from the 'taxibot_tractor' table.
 *
 * Table of taxibot tractors
 *
 * This class was autogenerated by Propel 1.4.2 on:
 *
 * Fri Feb 8 10:02:57 2013
 *
 * You should add additional methods to this class to meet the
 * application requirements. This class will only be generated as
 * long as it does not already exist in the output directory.
 *
 * @package lib.model
 */
class TaxibotTractor extends BaseTaxibotTractor {
	
	/**
	 * Initializes internal state of TaxibotTractor object.
	 * 
	 * @see parent::__construct()
	 */
	public function __construct() {
		// Make sure that parent constructor is always invoked, since that
		// is where any default values for this object are set.
		parent::__construct ();
	}
	public function __toString() {
		return (($this->getName () == null) ? '' : $this->getName ());
	}
} // TaxibotTractor
