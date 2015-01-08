<?php
include("../app/plugins/PercentCalculator.php");

class PercentCalculatorTest extends UnitTestCase
{
    public function __construct()
    {
        $this->setUp(\Phalcon\DI\FactoryDefault::getDefault());
    }

    /**
     * @expectedException Exception
     */
    public function testIsVacancyThrowsExceptionGetPercent()
    {
        $percentCalculator = new PercentCalculator();
        $result = $percentCalculator->getPercent();
        $this->assertEquals(null, $result);
    }

    /**
     * @expectedException Exception
     */
    public function testIfUserIsNullAndThrowsExceptionIfEmpty()
    {
        $percentCalculator = new PercentCalculator();
        $result = $percentCalculator->getPercent();
        $this->assertsEquals(null, $result);
    }
}