<?php

require_once 'Swift/Tests/SwiftUnitTestCase.php';
require_once 'Swift/CharacterStream/ArrayCharacterStream.php';
require_once 'Swift/CharacterReaderFactory.php';
require_once 'Swift/CharacterReader.php';
require_once 'Swift/OutputByteStream.php';

class Swift_CharacterStream_ArrayCharacterStreamTest
    extends Swift_Tests_SwiftUnitTestCase
{
    public function testValidatorAlgorithmOnImportString()
    {
        $reader = $this->_getReader();
        $factory = $this->_getFactory($reader);

        $stream = new Swift_CharacterStream_ArrayCharacterStream($factory, 'utf-8');

        $seq = $this->_mockery()->sequence('read-sequence');
        $this->_checking(Expectations::create()
                ->ignoring($reader)->getInitialByteSize()->returns(1)
                ->one($reader)->validateByteSequence(array(0xD0), 1)->inSequence($seq)->returns(1)
                ->one($reader)->validateByteSequence(array(0xD0), 1)->inSequence($seq)->returns(1)
                ->one($reader)->validateByteSequence(array(0xD0), 1)->inSequence($seq)->returns(1)
                ->one($reader)->validateByteSequence(array(0xD1), 1)->inSequence($seq)->returns(1)
                ->one($reader)->validateByteSequence(array(0xD0), 1)->inSequence($seq)->returns(1)
                ->one($reader)->validateByteSequence(array(0xD0), 1)->inSequence($seq)->returns(1)
        );

        $stream->importString(pack('C*',
                0xD0, 0x94,
                0xD0, 0xB6,
                0xD0, 0xBE,
                0xD1, 0x8D,
                0xD0, 0xBB,
                0xD0, 0xB0
            )
        );
    }

    private function _getReader()
    {
        return $this->_mock('Swift_CharacterReader');
    }

    private function _getFactory($reader)
    {
        $factory = $this->_mock('Swift_CharacterReaderFactory');
        $this->_checking(Expectations::create()
                ->allowing($factory)->getReaderFor('utf-8')->returns($reader)
        );

        return $factory;
    }

    public function testCharactersWrittenUseValidator()
    {
        $reader = $this->_getReader();
        $factory = $this->_getFactory($reader);

        $stream = new Swift_CharacterStream_ArrayCharacterStream($factory, 'utf-8');

        $seq = $this->_mockery()->sequence('read-sequence');
        $this->_checking(Expectations::create()
                ->ignoring($reader)->getInitialByteSize()->returns(1)
                ->one($reader)->validateByteSequence(array(0xD0), 1)->inSequence($seq)->returns(1)
                ->one($reader)->validateByteSequence(array(0xD0), 1)->inSequence($seq)->returns(1)
                ->one($reader)->validateByteSequence(array(0xD0), 1)->inSequence($seq)->returns(1)
                ->one($reader)->validateByteSequence(array(0xD0), 1)->inSequence($seq)->returns(1)
                ->one($reader)->validateByteSequence(array(0xD1), 1)->inSequence($seq)->returns(1)
                ->one($reader)->validateByteSequence(array(0xD0), 1)->inSequence($seq)->returns(1)
                ->one($reader)->validateByteSequence(array(0xD1), 1)->inSequence($seq)->returns(1)
                ->one($reader)->validateByteSequence(array(0xD1), 1)->inSequence($seq)->returns(1)
        );

        $stream->importString(pack('C*', 0xD0, 0x94, 0xD0, 0xB6, 0xD0, 0xBE));

        $stream->write(pack('C*',
                0xD0, 0xBB,
                0xD1, 0x8E,
                0xD0, 0xB1,
                0xD1, 0x8B,
                0xD1, 0x85
            )
        );
    }

    public function testReadCharactersAreInTact()
    {
        $reader = $this->_getReader();
        $factory = $this->_getFactory($reader);

        $stream = new Swift_CharacterStream_ArrayCharacterStream($factory, 'utf-8');

        $seq = $this->_mockery()->sequence('read-sequence');
        $this->_checking(Expectations::create()
                ->ignoring($reader)->getInitialByteSize()->returns(1)
                //String
                ->one($reader)->validateByteSequence(array(0xD0), 1)->inSequence($seq)->returns(1)
                ->one($reader)->validateByteSequence(array(0xD0), 1)->inSequence($seq)->returns(1)
                ->one($reader)->validateByteSequence(array(0xD0), 1)->inSequence($seq)->returns(1)
                //Stream
                ->one($reader)->validateByteSequence(array(0xD0), 1)->inSequence($seq)->returns(1)
                ->one($reader)->validateByteSequence(array(0xD1), 1)->inSequence($seq)->returns(1)
                ->one($reader)->validateByteSequence(array(0xD0), 1)->inSequence($seq)->returns(1)
                ->one($reader)->validateByteSequence(array(0xD1), 1)->inSequence($seq)->returns(1)
                ->one($reader)->validateByteSequence(array(0xD1), 1)->inSequence($seq)->returns(1)
        );

        $stream->importString(pack('C*', 0xD0, 0x94, 0xD0, 0xB6, 0xD0, 0xBE));

        $stream->write(pack('C*',
                0xD0, 0xBB,
                0xD1, 0x8E,
                0xD0, 0xB1,
                0xD1, 0x8B,
                0xD1, 0x85
            )
        );

        $this->assertIdenticalBinary(pack('C*', 0xD0, 0x94), $stream->read(1));
        $this->assertIdenticalBinary(
            pack('C*', 0xD0, 0xB6, 0xD0, 0xBE), $stream->read(2)
        );
        $this->assertIdenticalBinary(pack('C*', 0xD0, 0xBB), $stream->read(1));
        $this->assertIdenticalBinary(
            pack('C*', 0xD1, 0x8E, 0xD0, 0xB1, 0xD1, 0x8B), $stream->read(3)
        );
        $this->assertIdenticalBinary(pack('C*', 0xD1, 0x85), $stream->read(1));

        $this->assertIdentical(false, $stream->read(1));
    }

    public function testCharactersCanBeReadAsByteArrays()
    {
        $reader = $this->_getReader();
        $factory = $this->_getFactory($reader);

        $stream = new Swift_CharacterStream_ArrayCharacterStream($factory, 'utf-8');

        $seq = $this->_mockery()->sequence('read-sequence');
        $this->_checking(Expectations::create()
                ->ignoring($reader)->getInitialByteSize()->returns(1)
                //String
                ->one($reader)->validateByteSequence(array(0xD0), 1)->inSequence($seq)->returns(1)
                ->one($reader)->validateByteSequence(array(0xD0), 1)->inSequence($seq)->returns(1)
                ->one($reader)->validateByteSequence(array(0xD0), 1)->inSequence($seq)->returns(1)
                //Stream
                ->one($reader)->validateByteSequence(array(0xD0), 1)->inSequence($seq)->returns(1)
                ->one($reader)->validateByteSequence(array(0xD1), 1)->inSequence($seq)->returns(1)
                ->one($reader)->validateByteSequence(array(0xD0), 1)->inSequence($seq)->returns(1)
                ->one($reader)->validateByteSequence(array(0xD1), 1)->inSequence($seq)->returns(1)
                ->one($reader)->validateByteSequence(array(0xD1), 1)->inSequence($seq)->returns(1)
        );

        $stream->importString(pack('C*', 0xD0, 0x94, 0xD0, 0xB6, 0xD0, 0xBE));

        $stream->write(pack('C*',
                0xD0, 0xBB,
                0xD1, 0x8E,
                0xD0, 0xB1,
                0xD1, 0x8B,
                0xD1, 0x85
            )
        );

        $this->assertEqual(array(0xD0, 0x94), $stream->readBytes(1));
        $this->assertEqual(array(0xD0, 0xB6, 0xD0, 0xBE), $stream->readBytes(2));
        $this->assertEqual(array(0xD0, 0xBB), $stream->readBytes(1));
        $this->assertEqual(
            array(0xD1, 0x8E, 0xD0, 0xB1, 0xD1, 0x8B), $stream->readBytes(3)
        );
        $this->assertEqual(array(0xD1, 0x85), $stream->readBytes(1));

        $this->assertIdentical(false, $stream->readBytes(1));
    }

    public function testRequestingLargeCharCountPastEndOfStream()
    {
        $reader = $this->_getReader();
        $factory = $this->_getFactory($reader);

        $stream = new Swift_CharacterStream_ArrayCharacterStream($factory, 'utf-8');

        $seq = $this->_mockery()->sequence('read-sequence');
        $this->_checking(Expectations::create()
                ->ignoring($reader)->getInitialByteSize()->returns(1)
                ->one($reader)->validateByteSequence(array(0xD0), 1)->inSequence($seq)->returns(1)
                ->one($reader)->validateByteSequence(array(0xD0), 1)->inSequence($seq)->returns(1)
                ->one($reader)->validateByteSequence(array(0xD0), 1)->inSequence($seq)->returns(1)
        );

        $stream->importString(pack('C*', 0xD0, 0x94, 0xD0, 0xB6, 0xD0, 0xBE));

        $this->assertIdenticalBinary(pack('C*', 0xD0, 0x94, 0xD0, 0xB6, 0xD0, 0xBE),
            $stream->read(100)
        );

        $this->assertIdentical(false, $stream->read(1));
    }

    public function testRequestingByteArrayCountPastEndOfStream()
    {
        $reader = $this->_getReader();
        $factory = $this->_getFactory($reader);

        $stream = new Swift_CharacterStream_ArrayCharacterStream($factory, 'utf-8');

        $seq = $this->_mockery()->sequence('read-sequence');
        $this->_checking(Expectations::create()
                ->ignoring($reader)->getInitialByteSize()->returns(1)
                ->one($reader)->validateByteSequence(array(0xD0), 1)->inSequence($seq)->returns(1)
                ->one($reader)->validateByteSequence(array(0xD0), 1)->inSequence($seq)->returns(1)
                ->one($reader)->validateByteSequence(array(0xD0), 1)->inSequence($seq)->returns(1)
        );

        $stream->importString(pack('C*', 0xD0, 0x94, 0xD0, 0xB6, 0xD0, 0xBE));

        $this->assertEqual(array(0xD0, 0x94, 0xD0, 0xB6, 0xD0, 0xBE),
            $stream->readBytes(100)
        );

        $this->assertIdentical(false, $stream->readBytes(1));
    }

    public function testPointerOffsetCanBeSet()
    {
        $reader = $this->_getReader();
        $factory = $this->_getFactory($reader);

        $stream = new Swift_CharacterStream_ArrayCharacterStream($factory, 'utf-8');

        $seq = $this->_mockery()->sequence('read-sequence');
        $this->_checking(Expectations::create()
                ->ignoring($reader)->getInitialByteSize()->returns(1)
                ->one($reader)->validateByteSequence(array(0xD0), 1)->inSequence($seq)->returns(1)
                ->one($reader)->validateByteSequence(array(0xD0), 1)->inSequence($seq)->returns(1)
                ->one($reader)->validateByteSequence(array(0xD0), 1)->inSequence($seq)->returns(1)
        );

        $stream->importString(pack('C*', 0xD0, 0x94, 0xD0, 0xB6, 0xD0, 0xBE));

        $this->assertIdenticalBinary(pack('C*', 0xD0, 0x94), $stream->read(1));

        $stream->setPointer(0);

        $this->assertIdenticalBinary(pack('C*', 0xD0, 0x94), $stream->read(1));

        $stream->setPointer(2);

        $this->assertIdenticalBinary(pack('C*', 0xD0, 0xBE), $stream->read(1));
    }

    public function testContentsCanBeFlushed()
    {
        $reader = $this->_getReader();
        $factory = $this->_getFactory($reader);

        $stream = new Swift_CharacterStream_ArrayCharacterStream($factory, 'utf-8');

        $seq = $this->_mockery()->sequence('read-sequence');
        $this->_checking(Expectations::create()
                ->ignoring($reader)->getInitialByteSize()->returns(1)
                ->one($reader)->validateByteSequence(array(0xD0), 1)->inSequence($seq)->returns(1)
                ->one($reader)->validateByteSequence(array(0xD0), 1)->inSequence($seq)->returns(1)
                ->one($reader)->validateByteSequence(array(0xD0), 1)->inSequence($seq)->returns(1)
        );

        $stream->importString(pack('C*', 0xD0, 0x94, 0xD0, 0xB6, 0xD0, 0xBE));

        $stream->flushContents();

        $this->assertIdentical(false, $stream->read(1));
    }

    public function testByteStreamCanBeImportingUsesValidator()
    {
        $reader = $this->_getReader();
        $factory = $this->_getFactory($reader);
        $os = $this->_getByteStream();

        $stream = new Swift_CharacterStream_ArrayCharacterStream($factory, 'utf-8');

        $seq = $this->_mockery()->sequence('read-stream');
        $this->_checking(Expectations::create()
                ->between(0, 1)->of($os)->setReadPointer(0)
                ->one($os)->read(any())->inSequence($seq)->returns(pack('C*', 0xD0))
                ->one($os)->read(any())->inSequence($seq)->returns(pack('C*', 0x94))
                ->one($os)->read(any())->inSequence($seq)->returns(pack('C*', 0xD0))
                ->one($os)->read(any())->inSequence($seq)->returns(pack('C*', 0xB6))
                ->one($os)->read(any())->inSequence($seq)->returns(pack('C*', 0xD0))
                ->one($os)->read(any())->inSequence($seq)->returns(pack('C*', 0xBE))
                ->ignoring($os)->read(any())->returns(false)
        );

        $seq = $this->_mockery()->sequence('read-chars');
        $this->_checking(Expectations::create()
                ->ignoring($reader)->getInitialByteSize()->returns(1)
                ->one($reader)->validateByteSequence(array(0xD0), 1)->inSequence($seq)->returns(1)
                ->one($reader)->validateByteSequence(array(0xD0), 1)->inSequence($seq)->returns(1)
                ->one($reader)->validateByteSequence(array(0xD0), 1)->inSequence($seq)->returns(1)
        );

        $stream->importByteStream($os);
    }

    // -- Creation methods

    private function _getByteStream()
    {
        return $this->_mock('Swift_OutputByteStream');
    }

    public function testImportingStreamProducesCorrectCharArray()
    {
        $reader = $this->_getReader();
        $factory = $this->_getFactory($reader);
        $os = $this->_getByteStream();

        $stream = new Swift_CharacterStream_ArrayCharacterStream($factory, 'utf-8');

        $seq = $this->_mockery()->sequence('read-stream');
        $this->_checking(Expectations::create()
                ->between(0, 1)->of($os)->setReadPointer(0)
                ->one($os)->read(any())->inSequence($seq)->returns(pack('C*', 0xD0))
                ->one($os)->read(any())->inSequence($seq)->returns(pack('C*', 0x94))
                ->one($os)->read(any())->inSequence($seq)->returns(pack('C*', 0xD0))
                ->one($os)->read(any())->inSequence($seq)->returns(pack('C*', 0xB6))
                ->one($os)->read(any())->inSequence($seq)->returns(pack('C*', 0xD0))
                ->one($os)->read(any())->inSequence($seq)->returns(pack('C*', 0xBE))
                ->ignoring($os)->read(any())->returns(false)
        );

        $seq = $this->_mockery()->sequence('read-chars');
        $this->_checking(Expectations::create()
                ->ignoring($reader)->getInitialByteSize()->returns(1)
                ->one($reader)->validateByteSequence(array(0xD0), 1)->inSequence($seq)->returns(1)
                ->one($reader)->validateByteSequence(array(0xD0), 1)->inSequence($seq)->returns(1)
                ->one($reader)->validateByteSequence(array(0xD0), 1)->inSequence($seq)->returns(1)
        );

        $stream->importByteStream($os);

        $this->assertIdenticalBinary(pack('C*', 0xD0, 0x94), $stream->read(1));
        $this->assertIdenticalBinary(pack('C*', 0xD0, 0xB6), $stream->read(1));
        $this->assertIdenticalBinary(pack('C*', 0xD0, 0xBE), $stream->read(1));

        $this->assertIdentical(false, $stream->read(1));
    }

    public function testAlgorithmWithFixedWidthCharsets()
    {
        $reader = $this->_getReader();
        $factory = $this->_getFactory($reader);

        $seq = $this->_mockery()->sequence('read-chars');
        $this->_checking(Expectations::create()
                ->ignoring($reader)->getInitialByteSize()->returns(2)
                ->one($reader)->validateByteSequence(array(0xD1, 0x8D), 2)->inSequence($seq)
                ->one($reader)->validateByteSequence(array(0xD0, 0xBB), 2)->inSequence($seq)
                ->one($reader)->validateByteSequence(array(0xD0, 0xB0), 2)->inSequence($seq)
        );

        $stream = new Swift_CharacterStream_ArrayCharacterStream(
            $factory, 'utf-8'
        );
        $stream->importString(pack('C*', 0xD1, 0x8D, 0xD0, 0xBB, 0xD0, 0xB0));

        $this->assertIdenticalBinary(pack('C*', 0xD1, 0x8D), $stream->read(1));
        $this->assertIdenticalBinary(pack('C*', 0xD0, 0xBB), $stream->read(1));
        $this->assertIdenticalBinary(pack('C*', 0xD0, 0xB0), $stream->read(1));

        $this->assertIdentical(false, $stream->read(1));
    }
}
