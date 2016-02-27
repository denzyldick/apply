<?php

require_once 'Swift/Tests/SwiftUnitTestCase.php';
require_once 'Swift/Events/EventObject.php';

class Swift_Events_EventObjectTest extends Swift_Tests_SwiftUnitTestCase
{
    public function testEventSourceCanBeReturnedViaGetter()
    {
        $source = new stdClass();
        $evt = $this->_createEvent($source);
        $ref = $evt->getSource();
        $this->assertReference($source, $ref);
    }

    private function _createEvent($source)
    {
        return new Swift_Events_EventObject($source);
    }

    public function testEventDoesNotHaveCancelledBubbleWhenNew()
    {
        $source = new stdClass();
        $evt = $this->_createEvent($source);
        $this->assertFalse($evt->bubbleCancelled());
    }

    // -- Creation Methods

    public function testBubbleCanBeCancelledInEvent()
    {
        $source = new stdClass();
        $evt = $this->_createEvent($source);
        $evt->cancelBubble();
        $this->assertTrue($evt->bubbleCancelled());
    }
}
