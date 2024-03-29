<?php

require_once 'Swift/Mime/MimeEntity.php';
require_once 'Swift/Mime/SimpleMessage.php';
require_once 'Swift/Mime/MimePartTest.php';
require_once 'Swift/Mime/Header.php';
require_once 'Swift/Mime/ParameterizedHeader.php';
require_once 'Swift/Mime/Grammar.php';

class Swift_Mime_SimpleMessageTest extends Swift_Mime_MimePartTest
{
    public function testNestingLevelIsSubpart()
    { //Overridden
    }

    public function testNestingLevelIsTop()
    {
        $message = $this->_createMessage($this->_createHeaderSet(),
            $this->_createEncoder(), $this->_createCache()
        );
        $this->assertEqual(
            Swift_Mime_MimeEntity::LEVEL_TOP, $message->getNestingLevel()
        );
    }

    private function _createMessage($headers, $encoder, $cache)
    {
        return new Swift_Mime_SimpleMessage($headers, $encoder, $cache, new Swift_Mime_Grammar());
    }

    public function testDateIsReturnedFromHeader()
    {
        $date = $this->_createHeader('Date', 123);
        $message = $this->_createMessage(
            $this->_createHeaderSet(array('Date' => $date)),
            $this->_createEncoder(), $this->_createCache()
        );
        $this->assertEqual(123, $message->getDate());
    }

    public function testDateIsSetInHeader()
    {
        $date = $this->_createHeader('Date', 123, array(), false);
        $this->_checking(Expectations::create()
                ->one($date)->setFieldBodyModel(1234)
                ->ignoring($date)
        );
        $message = $this->_createMessage(
            $this->_createHeaderSet(array('Date' => $date)),
            $this->_createEncoder(), $this->_createCache()
        );
        $message->setDate(1234);
    }

    public function testDateHeaderIsCreatedIfNonePresent()
    {
        $headers = $this->_createHeaderSet(array(), false);
        $this->_checking(Expectations::create()
                ->one($headers)->addDateHeader('Date', 1234)
                ->ignoring($headers)
        );
        $message = $this->_createMessage($headers, $this->_createEncoder(),
            $this->_createCache()
        );
        $message->setDate(1234);
    }

    public function testDateHeaderIsAddedDuringConstruction()
    {
        $headers = $this->_createHeaderSet(array(), false);
        $this->_checking(Expectations::create()
                ->one($headers)->addDateHeader('Date', pattern('/^[0-9]+$/D'))
                ->ignoring($headers)
        );
        $message = $this->_createMessage($headers, $this->_createEncoder(),
            $this->_createCache()
        );
    }

    public function testIdIsReturnedFromHeader()
    {
        /* -- RFC 2045, 7.
        In constructing a high-level user agent, it may be desirable to allow
        one body to make reference to another.  Accordingly, bodies may be
        labelled using the "Content-ID" header field, which is syntactically
        identical to the "Message-ID" header field
        */

        $messageId = $this->_createHeader('Message-ID', 'a@b');
        $message = $this->_createMessage(
            $this->_createHeaderSet(array('Message-ID' => $messageId)),
            $this->_createEncoder(), $this->_createCache()
        );
        $this->assertEqual('a@b', $message->getId());
    }

    public function testIdIsSetInHeader()
    {
        $messageId = $this->_createHeader('Message-ID', 'a@b', array(), false);
        $this->_checking(Expectations::create()
                ->one($messageId)->setFieldBodyModel('x@y')
                ->ignoring($messageId)
        );
        $message = $this->_createMessage(
            $this->_createHeaderSet(array('Message-ID' => $messageId)),
            $this->_createEncoder(), $this->_createCache()
        );
        $message->setId('x@y');
    }

    public function testIdIsAutoGenerated()
    {
        $headers = $this->_createHeaderSet(array(), false);
        $this->_checking(Expectations::create()
                ->one($headers)->addIdHeader('Message-ID', pattern('/^.*?@.*?$/D'))
                ->ignoring($headers)
        );
        $message = $this->_createMessage($headers, $this->_createEncoder(),
            $this->_createCache()
        );
    }

    public function testSubjectIsReturnedFromHeader()
    {
        /* -- RFC 2822, 3.6.5.
     */

        $subject = $this->_createHeader('Subject', 'example subject');
        $message = $this->_createMessage(
            $this->_createHeaderSet(array('Subject' => $subject)),
            $this->_createEncoder(), $this->_createCache()
        );
        $this->assertEqual('example subject', $message->getSubject());
    }

    public function testSubjectIsSetInHeader()
    {
        $subject = $this->_createHeader('Subject', '', array(), false);
        $this->_checking(Expectations::create()
                ->one($subject)->setFieldBodyModel('foo')
                ->ignoring($subject)
        );
        $message = $this->_createMessage(
            $this->_createHeaderSet(array('Subject' => $subject)),
            $this->_createEncoder(), $this->_createCache()
        );
        $message->setSubject('foo');
    }

    public function testSubjectHeaderIsCreatedIfNotPresent()
    {
        $headers = $this->_createHeaderSet(array(), false);
        $this->_checking(Expectations::create()
                ->one($headers)->addTextHeader('Subject', 'example subject')
                ->ignoring($headers)
        );
        $message = $this->_createMessage($headers, $this->_createEncoder(),
            $this->_createCache()
        );
        $message->setSubject('example subject');
    }

    public function testReturnPathIsReturnedFromHeader()
    {
        /* -- RFC 2822, 3.6.7.
     */

        $path = $this->_createHeader('Return-Path', 'bounces@domain');
        $message = $this->_createMessage(
            $this->_createHeaderSet(array('Return-Path' => $path)),
            $this->_createEncoder(), $this->_createCache()
        );
        $this->assertEqual('bounces@domain', $message->getReturnPath());
    }

    public function testReturnPathIsSetInHeader()
    {
        $path = $this->_createHeader('Return-Path', '', array(), false);
        $this->_checking(Expectations::create()
                ->one($path)->setFieldBodyModel('bounces@domain')
                ->ignoring($path)
        );
        $message = $this->_createMessage(
            $this->_createHeaderSet(array('Return-Path' => $path)),
            $this->_createEncoder(), $this->_createCache()
        );
        $message->setReturnPath('bounces@domain');
    }

    public function testReturnPathHeaderIsAddedIfNoneSet()
    {
        $headers = $this->_createHeaderSet(array(), false);
        $this->_checking(Expectations::create()
                ->one($headers)->addPathHeader('Return-Path', 'bounces@domain')
                ->ignoring($headers)
        );
        $message = $this->_createMessage($headers, $this->_createEncoder(),
            $this->_createCache()
        );
        $message->setReturnPath('bounces@domain');
    }

    public function testSenderIsReturnedFromHeader()
    {
        /* -- RFC 2822, 3.6.2.
     */

        $sender = $this->_createHeader('Sender', array('sender@domain' => 'Name'));
        $message = $this->_createMessage(
            $this->_createHeaderSet(array('Sender' => $sender)),
            $this->_createEncoder(), $this->_createCache()
        );
        $this->assertEqual(array('sender@domain' => 'Name'), $message->getSender());
    }

    public function testSenderIsSetInHeader()
    {
        $sender = $this->_createHeader('Sender', array('sender@domain' => 'Name'),
            array(), false
        );
        $this->_checking(Expectations::create()
                ->one($sender)->setFieldBodyModel(array('other@domain' => 'Other'))
                ->ignoring($sender)
        );
        $message = $this->_createMessage(
            $this->_createHeaderSet(array('Sender' => $sender)),
            $this->_createEncoder(), $this->_createCache()
        );
        $message->setSender(array('other@domain' => 'Other'));
    }

    public function testSenderHeaderIsAddedIfNoneSet()
    {
        $headers = $this->_createHeaderSet(array(), false);
        $this->_checking(Expectations::create()
                ->one($headers)->addMailboxHeader('Sender', (array)'sender@domain')
                ->ignoring($headers)
        );
        $message = $this->_createMessage($headers, $this->_createEncoder(),
            $this->_createCache()
        );
        $message->setSender('sender@domain');
    }

    public function testNameCanBeUsedInSenderHeader()
    {
        $headers = $this->_createHeaderSet(array(), false);
        $this->_checking(Expectations::create()
                ->one($headers)->addMailboxHeader('Sender', array('sender@domain' => 'Name'))
                ->ignoring($headers)
        );
        $message = $this->_createMessage($headers, $this->_createEncoder(),
            $this->_createCache()
        );
        $message->setSender('sender@domain', 'Name');
    }

    public function testFromIsReturnedFromHeader()
    {
        /* -- RFC 2822, 3.6.2.
     */

        $from = $this->_createHeader('From', array('from@domain' => 'Name'));
        $message = $this->_createMessage(
            $this->_createHeaderSet(array('From' => $from)),
            $this->_createEncoder(), $this->_createCache()
        );
        $this->assertEqual(array('from@domain' => 'Name'), $message->getFrom());
    }

    public function testFromIsSetInHeader()
    {
        $from = $this->_createHeader('From', array('from@domain' => 'Name'),
            array(), false
        );
        $this->_checking(Expectations::create()
                ->one($from)->setFieldBodyModel(array('other@domain' => 'Other'))
                ->ignoring($from)
        );
        $message = $this->_createMessage(
            $this->_createHeaderSet(array('From' => $from)),
            $this->_createEncoder(), $this->_createCache()
        );
        $message->setFrom(array('other@domain' => 'Other'));
    }

    public function testFromIsAddedToHeadersDuringAddFrom()
    {
        $from = $this->_createHeader('From', array('from@domain' => 'Name'),
            array(), false
        );
        $this->_checking(Expectations::create()
                ->one($from)->setFieldBodyModel(array('from@domain' => 'Name', 'other@domain' => 'Other'))
                ->ignoring($from)
        );
        $message = $this->_createMessage(
            $this->_createHeaderSet(array('From' => $from)),
            $this->_createEncoder(), $this->_createCache()
        );
        $message->addFrom('other@domain', 'Other');
    }

    public function testFromHeaderIsAddedIfNoneSet()
    {
        $headers = $this->_createHeaderSet(array(), false);
        $this->_checking(Expectations::create()
                ->one($headers)->addMailboxHeader('From', (array)'from@domain')
                ->ignoring($headers)
        );
        $message = $this->_createMessage($headers, $this->_createEncoder(),
            $this->_createCache()
        );
        $message->setFrom('from@domain');
    }

    public function testPersonalNameCanBeUsedInFromAddress()
    {
        $headers = $this->_createHeaderSet(array(), false);
        $this->_checking(Expectations::create()
                ->one($headers)->addMailboxHeader('From', array('from@domain' => 'Name'))
                ->ignoring($headers)
        );
        $message = $this->_createMessage($headers, $this->_createEncoder(),
            $this->_createCache()
        );
        $message->setFrom('from@domain', 'Name');
    }

    public function testReplyToIsReturnedFromHeader()
    {
        /* -- RFC 2822, 3.6.2.
     */

        $reply = $this->_createHeader('Reply-To', array('reply@domain' => 'Name'));
        $message = $this->_createMessage(
            $this->_createHeaderSet(array('Reply-To' => $reply)),
            $this->_createEncoder(), $this->_createCache()
        );
        $this->assertEqual(array('reply@domain' => 'Name'), $message->getReplyTo());
    }

    public function testReplyToIsSetInHeader()
    {
        $reply = $this->_createHeader('Reply-To', array('reply@domain' => 'Name'),
            array(), false
        );
        $this->_checking(Expectations::create()
                ->one($reply)->setFieldBodyModel(array('other@domain' => 'Other'))
                ->ignoring($reply)
        );
        $message = $this->_createMessage(
            $this->_createHeaderSet(array('Reply-To' => $reply)),
            $this->_createEncoder(), $this->_createCache()
        );
        $message->setReplyTo(array('other@domain' => 'Other'));
    }

    public function testReplyToIsAddedToHeadersDuringAddReplyTo()
    {
        $replyTo = $this->_createHeader('Reply-To', array('from@domain' => 'Name'),
            array(), false
        );
        $this->_checking(Expectations::create()
                ->one($replyTo)->setFieldBodyModel(array('from@domain' => 'Name', 'other@domain' => 'Other'))
                ->ignoring($replyTo)
        );
        $message = $this->_createMessage(
            $this->_createHeaderSet(array('Reply-To' => $replyTo)),
            $this->_createEncoder(), $this->_createCache()
        );
        $message->addReplyTo('other@domain', 'Other');
    }

    public function testReplyToHeaderIsAddedIfNoneSet()
    {
        $headers = $this->_createHeaderSet(array(), false);
        $this->_checking(Expectations::create()
                ->one($headers)->addMailboxHeader('Reply-To', (array)'reply@domain')
                ->ignoring($headers)
        );
        $message = $this->_createMessage($headers, $this->_createEncoder(),
            $this->_createCache()
        );
        $message->setReplyTo('reply@domain');
    }

    public function testNameCanBeUsedInReplyTo()
    {
        $headers = $this->_createHeaderSet(array(), false);
        $this->_checking(Expectations::create()
                ->one($headers)->addMailboxHeader('Reply-To', array('reply@domain' => 'Name'))
                ->ignoring($headers)
        );
        $message = $this->_createMessage($headers, $this->_createEncoder(),
            $this->_createCache()
        );
        $message->setReplyTo('reply@domain', 'Name');
    }

    public function testToIsReturnedFromHeader()
    {
        /* -- RFC 2822, 3.6.3.
     */

        $to = $this->_createHeader('To', array('to@domain' => 'Name'));
        $message = $this->_createMessage(
            $this->_createHeaderSet(array('To' => $to)),
            $this->_createEncoder(), $this->_createCache()
        );
        $this->assertEqual(array('to@domain' => 'Name'), $message->getTo());
    }

    public function testToIsSetInHeader()
    {
        $to = $this->_createHeader('To', array('to@domain' => 'Name'),
            array(), false
        );
        $this->_checking(Expectations::create()
                ->one($to)->setFieldBodyModel(array('other@domain' => 'Other'))
                ->ignoring($to)
        );
        $message = $this->_createMessage(
            $this->_createHeaderSet(array('To' => $to)),
            $this->_createEncoder(), $this->_createCache()
        );
        $message->setTo(array('other@domain' => 'Other'));
    }

    public function testToIsAddedToHeadersDuringAddTo()
    {
        $to = $this->_createHeader('To', array('from@domain' => 'Name'),
            array(), false
        );
        $this->_checking(Expectations::create()
                ->one($to)->setFieldBodyModel(array('from@domain' => 'Name', 'other@domain' => 'Other'))
                ->ignoring($to)
        );
        $message = $this->_createMessage(
            $this->_createHeaderSet(array('To' => $to)),
            $this->_createEncoder(), $this->_createCache()
        );
        $message->addTo('other@domain', 'Other');
    }

    public function testToHeaderIsAddedIfNoneSet()
    {
        $headers = $this->_createHeaderSet(array(), false);
        $this->_checking(Expectations::create()
                ->one($headers)->addMailboxHeader('To', (array)'to@domain')
                ->ignoring($headers)
        );
        $message = $this->_createMessage($headers, $this->_createEncoder(),
            $this->_createCache()
        );
        $message->setTo('to@domain');
    }

    public function testNameCanBeUsedInToHeader()
    {
        $headers = $this->_createHeaderSet(array(), false);
        $this->_checking(Expectations::create()
                ->one($headers)->addMailboxHeader('To', array('to@domain' => 'Name'))
                ->ignoring($headers)
        );
        $message = $this->_createMessage($headers, $this->_createEncoder(),
            $this->_createCache()
        );
        $message->setTo('to@domain', 'Name');
    }

    public function testCcIsReturnedFromHeader()
    {
        /* -- RFC 2822, 3.6.3.
     */

        $cc = $this->_createHeader('Cc', array('cc@domain' => 'Name'));
        $message = $this->_createMessage(
            $this->_createHeaderSet(array('Cc' => $cc)),
            $this->_createEncoder(), $this->_createCache()
        );
        $this->assertEqual(array('cc@domain' => 'Name'), $message->getCc());
    }

    public function testCcIsSetInHeader()
    {
        $cc = $this->_createHeader('Cc', array('cc@domain' => 'Name'),
            array(), false
        );
        $this->_checking(Expectations::create()
                ->one($cc)->setFieldBodyModel(array('other@domain' => 'Other'))
                ->ignoring($cc)
        );
        $message = $this->_createMessage(
            $this->_createHeaderSet(array('Cc' => $cc)),
            $this->_createEncoder(), $this->_createCache()
        );
        $message->setCc(array('other@domain' => 'Other'));
    }

    public function testCcIsAddedToHeadersDuringAddCc()
    {
        $cc = $this->_createHeader('Cc', array('from@domain' => 'Name'),
            array(), false
        );
        $this->_checking(Expectations::create()
                ->one($cc)->setFieldBodyModel(array('from@domain' => 'Name', 'other@domain' => 'Other'))
                ->ignoring($cc)
        );
        $message = $this->_createMessage(
            $this->_createHeaderSet(array('Cc' => $cc)),
            $this->_createEncoder(), $this->_createCache()
        );
        $message->addCc('other@domain', 'Other');
    }

    public function testCcHeaderIsAddedIfNoneSet()
    {
        $headers = $this->_createHeaderSet(array(), false);
        $this->_checking(Expectations::create()
                ->one($headers)->addMailboxHeader('Cc', (array)'cc@domain')
                ->ignoring($headers)
        );
        $message = $this->_createMessage($headers, $this->_createEncoder(),
            $this->_createCache()
        );
        $message->setCc('cc@domain');
    }

    public function testNameCanBeUsedInCcHeader()
    {
        $headers = $this->_createHeaderSet(array(), false);
        $this->_checking(Expectations::create()
                ->one($headers)->addMailboxHeader('Cc', array('cc@domain' => 'Name'))
                ->ignoring($headers)
        );
        $message = $this->_createMessage($headers, $this->_createEncoder(),
            $this->_createCache()
        );
        $message->setCc('cc@domain', 'Name');
    }

    public function testBccIsReturnedFromHeader()
    {
        /* -- RFC 2822, 3.6.3.
     */

        $bcc = $this->_createHeader('Bcc', array('bcc@domain' => 'Name'));
        $message = $this->_createMessage(
            $this->_createHeaderSet(array('Bcc' => $bcc)),
            $this->_createEncoder(), $this->_createCache()
        );
        $this->assertEqual(array('bcc@domain' => 'Name'), $message->getBcc());
    }

    public function testBccIsSetInHeader()
    {
        $bcc = $this->_createHeader('Bcc', array('bcc@domain' => 'Name'),
            array(), false
        );
        $this->_checking(Expectations::create()
                ->one($bcc)->setFieldBodyModel(array('other@domain' => 'Other'))
                ->ignoring($bcc)
        );
        $message = $this->_createMessage(
            $this->_createHeaderSet(array('Bcc' => $bcc)),
            $this->_createEncoder(), $this->_createCache()
        );
        $message->setBcc(array('other@domain' => 'Other'));
    }

    public function testBccIsAddedToHeadersDuringAddBcc()
    {
        $bcc = $this->_createHeader('Bcc', array('from@domain' => 'Name'),
            array(), false
        );
        $this->_checking(Expectations::create()
                ->one($bcc)->setFieldBodyModel(array('from@domain' => 'Name', 'other@domain' => 'Other'))
                ->ignoring($bcc)
        );
        $message = $this->_createMessage(
            $this->_createHeaderSet(array('Bcc' => $bcc)),
            $this->_createEncoder(), $this->_createCache()
        );
        $message->addBcc('other@domain', 'Other');
    }

    public function testBccHeaderIsAddedIfNoneSet()
    {
        $headers = $this->_createHeaderSet(array(), false);
        $this->_checking(Expectations::create()
                ->one($headers)->addMailboxHeader('Bcc', (array)'bcc@domain')
                ->ignoring($headers)
        );
        $message = $this->_createMessage($headers, $this->_createEncoder(),
            $this->_createCache()
        );
        $message->setBcc('bcc@domain');
    }

    public function testNameCanBeUsedInBcc()
    {
        $headers = $this->_createHeaderSet(array(), false);
        $this->_checking(Expectations::create()
                ->one($headers)->addMailboxHeader('Bcc', array('bcc@domain' => 'Name'))
                ->ignoring($headers)
        );
        $message = $this->_createMessage($headers, $this->_createEncoder(),
            $this->_createCache()
        );
        $message->setBcc('bcc@domain', 'Name');
    }

    public function testPriorityIsReadFromHeader()
    {
        $prio = $this->_createHeader('X-Priority', '2 (High)');
        $message = $this->_createMessage(
            $this->_createHeaderSet(array('X-Priority' => $prio)),
            $this->_createEncoder(), $this->_createCache()
        );
        $this->assertEqual(2, $message->getPriority());
    }

    public function testPriorityIsSetInHeader()
    {
        $prio = $this->_createHeader('X-Priority', '2 (High)', array(), false);
        $this->_checking(Expectations::create()
                ->one($prio)->setFieldBodyModel('5 (Lowest)')
                ->ignoring($prio)
        );
        $message = $this->_createMessage(
            $this->_createHeaderSet(array('X-Priority' => $prio)),
            $this->_createEncoder(), $this->_createCache()
        );
        $message->setPriority(5);
    }

    public function testPriorityHeaderIsAddedIfNoneSet()
    {
        $headers = $this->_createHeaderSet(array(), false);
        $this->_checking(Expectations::create()
                ->one($headers)->addTextHeader('X-Priority', '4 (Low)')
                ->ignoring($headers)
        );
        $message = $this->_createMessage($headers, $this->_createEncoder(),
            $this->_createCache()
        );
        $message->setPriority(4);
    }

    public function testReadReceiptAddressReadFromHeader()
    {
        $rcpt = $this->_createHeader('Disposition-Notification-To',
            array('chris@swiftmailer.org' => 'Chris')
        );
        $message = $this->_createMessage(
            $this->_createHeaderSet(array('Disposition-Notification-To' => $rcpt)),
            $this->_createEncoder(), $this->_createCache()
        );
        $this->assertEqual(array('chris@swiftmailer.org' => 'Chris'),
            $message->getReadReceiptTo()
        );
    }

    public function testReadReceiptIsSetInHeader()
    {
        $rcpt = $this->_createHeader('Disposition-Notification-To', array(), array(), false);
        $this->_checking(Expectations::create()
                ->one($rcpt)->setFieldBodyModel('mark@swiftmailer.org')
                ->ignoring($rcpt)
        );
        $message = $this->_createMessage(
            $this->_createHeaderSet(array('Disposition-Notification-To' => $rcpt)),
            $this->_createEncoder(), $this->_createCache()
        );
        $message->setReadReceiptTo('mark@swiftmailer.org');
    }

    public function testReadReceiptHeaderIsAddedIfNoneSet()
    {
        $headers = $this->_createHeaderSet(array(), false);
        $this->_checking(Expectations::create()
                ->one($headers)->addMailboxHeader(
                    'Disposition-Notification-To', 'mark@swiftmailer.org'
                )
                ->ignoring($headers)
        );
        $message = $this->_createMessage($headers, $this->_createEncoder(),
            $this->_createCache()
        );
        $message->setReadReceiptTo('mark@swiftmailer.org');
    }

    public function testChildrenCanBeAttached()
    {
        $child1 = $this->_createChild();
        $child2 = $this->_createChild();

        $message = $this->_createMessage($this->_createHeaderSet(),
            $this->_createEncoder(), $this->_createCache()
        );

        $message->attach($child1);
        $message->attach($child2);

        $this->assertEqual(array($child1, $child2), $message->getChildren());
    }

    public function testChildrenCanBeDetached()
    {
        $child1 = $this->_createChild();
        $child2 = $this->_createChild();

        $message = $this->_createMessage($this->_createHeaderSet(),
            $this->_createEncoder(), $this->_createCache()
        );

        $message->attach($child1);
        $message->attach($child2);

        $message->detach($child1);

        $this->assertEqual(array($child2), $message->getChildren());
    }

    public function testEmbedAttachesChild()
    {
        $child = $this->_createChild();

        $message = $this->_createMessage($this->_createHeaderSet(),
            $this->_createEncoder(), $this->_createCache()
        );

        $message->embed($child);

        $this->assertEqual(array($child), $message->getChildren());
    }

    public function testEmbedReturnsValidCid()
    {
        $child = $this->_createChild(Swift_Mime_MimeEntity::LEVEL_RELATED, '',
            false
        );
        $this->_checking(Expectations::create()
                ->ignoring($child)->getId()->returns('foo@bar')
                ->ignoring($child)
        );
        $message = $this->_createMessage($this->_createHeaderSet(),
            $this->_createEncoder(), $this->_createCache()
        );

        $this->assertEqual('cid:foo@bar', $message->embed($child));
    }

    // -- Private helpers

    //abstract

    public function testFluidInterface()
    {
        $child = $this->_createChild();
        $message = $this->_createMessage($this->_createHeaderSet(),
            $this->_createEncoder(), $this->_createCache()
        );
        $this->assertSame($message,
            $message
                ->setContentType('text/plain')
                ->setEncoder($this->_createEncoder())
                ->setId('foo@bar')
                ->setDescription('my description')
                ->setMaxLineLength(998)
                ->setBody('xx')
                ->setBoundary('xyz')
                ->setChildren(array())
                ->setCharset('iso-8859-1')
                ->setFormat('flowed')
                ->setDelSp(false)
                ->setSubject('subj')
                ->setDate(123)
                ->setReturnPath('foo@bar')
                ->setSender('foo@bar')
                ->setFrom(array('x@y' => 'XY'))
                ->setReplyTo(array('ab@cd' => 'ABCD'))
                ->setTo(array('chris@site.tld', 'mark@site.tld'))
                ->setCc('john@somewhere.tld')
                ->setBcc(array('one@site', 'two@site' => 'Two'))
                ->setPriority(4)
                ->setReadReceiptTo('a@b')
                ->attach($child)
                ->detach($child)
        );
    }

    protected function _createEntity($headers, $encoder, $cache)
    {
        return $this->_createMessage($headers, $encoder, $cache);
    }

    protected function _createMimePart($headers, $encoder, $cache)
    {
        return $this->_createMessage($headers, $encoder, $cache);
    }
}
