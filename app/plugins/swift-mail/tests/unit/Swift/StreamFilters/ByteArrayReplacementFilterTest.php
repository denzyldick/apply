<?php

require_once 'Swift/Tests/SwiftUnitTestCase.php';
require_once 'Swift/StreamFilters/ByteArrayReplacementFilter.php';

class Swift_StreamFilters_ByteArrayReplacementFilterTest
    extends Swift_Tests_SwiftUnitTestCase
{
    public function testBasicReplacementsAreMade()
    {
        $filter = $this->_createFilter(array(0x61, 0x62), array(0x63, 0x64));
        $this->assertEqual(
            array(0x59, 0x60, 0x63, 0x64, 0x65),
            $filter->filter(array(0x59, 0x60, 0x61, 0x62, 0x65))
        );
    }

    private function _createFilter($search, $replace)
    {
        return new Swift_StreamFilters_ByteArrayReplacementFilter($search, $replace);
    }

    public function testShouldBufferReturnsTrueIfPartialMatchAtEndOfBuffer()
    {
        $filter = $this->_createFilter(array(0x61, 0x62), array(0x63, 0x64));
        $this->assertTrue($filter->shouldBuffer(array(0x59, 0x60, 0x61)),
            '%s: Filter should buffer since 0x61 0x62 is the needle and the ending ' .
            '0x61 could be from 0x61 0x62'
        );
    }

    public function testFilterCanMakeMultipleReplacements()
    {
        $filter = $this->_createFilter(array(array(0x61), array(0x62)), array(0x63));
        $this->assertEqual(
            array(0x60, 0x63, 0x60, 0x63, 0x60),
            $filter->filter(array(0x60, 0x61, 0x60, 0x62, 0x60))
        );
    }

    public function testMultipleReplacementsCanBeDifferent()
    {
        $filter = $this->_createFilter(array(array(0x61), array(0x62)), array(array(0x63), array(0x64)));
        $this->assertEqual(
            array(0x60, 0x63, 0x60, 0x64, 0x60),
            $filter->filter(array(0x60, 0x61, 0x60, 0x62, 0x60))
        );
    }

    public function testShouldBufferReturnsFalseIfPartialMatchNotAtEndOfString()
    {
        $filter = $this->_createFilter(array(0x0D, 0x0A), array(0x0A));
        $this->assertFalse($filter->shouldBuffer(array(0x61, 0x62, 0x0D, 0x0A, 0x63)),
            '%s: Filter should not buffer since x0Dx0A is the needle and is not at EOF'
        );
    }

    public function testShouldBufferReturnsTrueIfAnyOfMultipleMatchesAtEndOfString()
    {
        $filter = $this->_createFilter(array(array(0x61, 0x62), array(0x63)), array(0x64));
        $this->assertTrue($filter->shouldBuffer(array(0x59, 0x60, 0x61)),
            '%s: Filter should buffer since 0x61 0x62 is a needle and the ending ' .
            '0x61 could be from 0x61 0x62'
        );
    }

    public function testConvertingAllLineEndingsToCRLFWhenInputIsLF()
    {
        $filter = $this->_createFilter(
            array(array(0x0D, 0x0A), array(0x0D), array(0x0A)),
            array(array(0x0A), array(0x0A), array(0x0D, 0x0A))
        );

        $this->assertEqual(
            array(0x60, 0x0D, 0x0A, 0x61, 0x0D, 0x0A, 0x62, 0x0D, 0x0A, 0x63),
            $filter->filter(array(0x60, 0x0A, 0x61, 0x0A, 0x62, 0x0A, 0x63))
        );
    }

    public function testConvertingAllLineEndingsToCRLFWhenInputIsCR()
    {
        $filter = $this->_createFilter(
            array(array(0x0D, 0x0A), array(0x0D), array(0x0A)),
            array(array(0x0A), array(0x0A), array(0x0D, 0x0A))
        );

        $this->assertEqual(
            array(0x60, 0x0D, 0x0A, 0x61, 0x0D, 0x0A, 0x62, 0x0D, 0x0A, 0x63),
            $filter->filter(array(0x60, 0x0D, 0x61, 0x0D, 0x62, 0x0D, 0x63))
        );
    }

    public function testConvertingAllLineEndingsToCRLFWhenInputIsCRLF()
    {
        $filter = $this->_createFilter(
            array(array(0x0D, 0x0A), array(0x0D), array(0x0A)),
            array(array(0x0A), array(0x0A), array(0x0D, 0x0A))
        );

        $this->assertEqual(
            array(0x60, 0x0D, 0x0A, 0x61, 0x0D, 0x0A, 0x62, 0x0D, 0x0A, 0x63),
            $filter->filter(array(0x60, 0x0D, 0x0A, 0x61, 0x0D, 0x0A, 0x62, 0x0D, 0x0A, 0x63))
        );
    }

    public function testConvertingAllLineEndingsToCRLFWhenInputIsLFCR()
    {
        $filter = $this->_createFilter(
            array(array(0x0D, 0x0A), array(0x0D), array(0x0A)),
            array(array(0x0A), array(0x0A), array(0x0D, 0x0A))
        );

        $this->assertEqual(
            array(0x60, 0x0D, 0x0A, 0x0D, 0x0A, 0x61, 0x0D, 0x0A, 0x0D, 0x0A, 0x62, 0x0D, 0x0A, 0x0D, 0x0A, 0x63),
            $filter->filter(array(0x60, 0x0A, 0x0D, 0x61, 0x0A, 0x0D, 0x62, 0x0A, 0x0D, 0x63))
        );
    }

    // -- Creation methods

    public function testConvertingAllLineEndingsToCRLFWhenInputContainsLFLF()
    {
        //Lighthouse Bug #23

        $filter = $this->_createFilter(
            array(array(0x0D, 0x0A), array(0x0D), array(0x0A)),
            array(array(0x0A), array(0x0A), array(0x0D, 0x0A))
        );

        $this->assertEqual(
            array(0x60, 0x0D, 0x0A, 0x0D, 0x0A, 0x61, 0x0D, 0x0A, 0x0D, 0x0A, 0x62, 0x0D, 0x0A, 0x0D, 0x0A, 0x63),
            $filter->filter(array(0x60, 0x0A, 0x0A, 0x61, 0x0A, 0x0A, 0x62, 0x0A, 0x0A, 0x63))
        );
    }
}
