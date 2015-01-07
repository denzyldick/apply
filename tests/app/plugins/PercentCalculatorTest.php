<?php

class PercentCalculatorTest extends UnitTestCase{
    public function __construct()
    {
        $this->setUp(\Phalcon\DI\FactoryDefault::getDefault());
    }
    public function testGetPercent()
    {


        $percentCalculator =  new Bundle();
        $percentCalculator->setDI($this->di);
        $result  = $percentCalculator->getPercent();
        $this->assertEquals(10,$result);

    }
    public function testPushAndPop()
    {
        $stack = array();
        $this->assertEquals(0, count($stack));

        array_push($stack, 'foo');
        $this->assertEquals('foo', $stack[count($stack)-1]);
        $this->assertEquals(1, count($stack));

        $this->assertEquals('foo', array_pop($stack));
        $this->assertEquals(0, count($stack));
    }
}