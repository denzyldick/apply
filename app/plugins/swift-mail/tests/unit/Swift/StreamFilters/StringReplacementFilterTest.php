<?php

require_once 'Swift/Tests/SwiftUnitTestCase.php';
require_once 'Swift/StreamFilters/StringReplacementFilter.php';

class Swift_StreamFilters_StringReplacementFilterTest
    extends Swift_Tests_SwiftUnitTestCase
{
    public function testBasicReplacementsAreMade()
    {
        $filter = $this->_createFilter('foo', 'bar');
        $this->assertEqual('XbarYbarZ', $filter->filter('XfooYfooZ'));
    }

    private function _createFilter($search, $replace)
    {
        return new Swift_StreamFilters_StringReplacementFilter($search, $replace);
    }

    public function testShouldBufferReturnsTrueIfPartialMatchAtEndOfBuffer()
    {
        $filter = $this->_createFilter('foo', 'bar');
        $this->assertTrue($filter->shouldBuffer('XfooYf'),
            '%s: Filter should buffer since "foo" is the needle and the ending ' .
            '"f" could be from "foo"'
        );
    }

    public function testFilterCanMakeMultipleReplacements()
    {
        $filter = $this->_createFilter(array('a', 'b'), 'foo');
        $this->assertEqual('XfooYfooZ', $filter->filter('XaYbZ'));
    }

    public function testMultipleReplacementsCanBeDifferent()
    {
        $filter = $this->_createFilter(array('a', 'b'), array('foo', 'zip'));
        $this->assertEqual('XfooYzipZ', $filter->filter('XaYbZ'));
    }

    public function testShouldBufferReturnsFalseIfPartialMatchNotAtEndOfString()
    {
        $filter = $this->_createFilter("\r\n", "\n");
        $this->assertFalse($filter->shouldBuffer("foo\r\nbar"),
            '%s: Filter should not buffer since x0Dx0A is the needle and is not at EOF'
        );
    }

    // -- Creation methods

    public function testShouldBufferReturnsTrueIfAnyOfMultipleMatchesAtEndOfString()
    {
        $filter = $this->_createFilter(array('foo', 'zip'), 'bar');
        $this->assertTrue($filter->shouldBuffer('XfooYzi'),
            '%s: Filter should buffer since "zip" is a needle and the ending ' .
            '"zi" could be from "zip"'
        );
    }
}
