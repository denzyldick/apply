<?php

require_once 'Swift/CharacterReader/GenericFixedWidthReader.php';

class Swift_CharacterReader_GenericFixedWidthReaderTest
    extends UnitTestCase
{
    public function testInitialByteSizeMatchesWidth()
    {
        $reader = new Swift_CharacterReader_GenericFixedWidthReader(1);
        $this->assertIdentical(1, $reader->getInitialByteSize());

        $reader = new Swift_CharacterReader_GenericFixedWidthReader(4);
        $this->assertIdentical(4, $reader->getInitialByteSize());
    }

    public function testValidationValueIsBasedOnOctetCount()
    {
        $reader = new Swift_CharacterReader_GenericFixedWidthReader(4);

        $this->assertIdentical(
            1, $reader->validateByteSequence(array(0x01, 0x02, 0x03), 3)
        ); //3 octets

        $this->assertIdentical(
            2, $reader->validateByteSequence(array(0x01, 0x0A), 2)
        ); //2 octets

        $this->assertIdentical(
            3, $reader->validateByteSequence(array(0xFE), 1)
        ); //1 octet

        $this->assertIdentical(
            0, $reader->validateByteSequence(array(0xFE, 0x03, 0x67, 0x9A), 4)
        ); //All 4 octets
    }

    public function testValidationFailsIfTooManyOctets()
    {
        $reader = new Swift_CharacterReader_GenericFixedWidthReader(6);

        $this->assertIdentical(-1, $reader->validateByteSequence(
            array(0xFE, 0x03, 0x67, 0x9A, 0x10, 0x09, 0x85), 7
        )); //7 octets
    }
}
