<h1>Create a new vacancy</h1>

<?php echo $this->tag->form(array('skills', 'method' => 'post')); ?>

    <label>What is the name of your job?</label>
    <?php echo $this->tag->textField(array('name', 'size' => 32, 'class' => 'form-control')); ?>
    <label>What kind of skills are you looking for?</label>
    <?php echo $this->tag->textField(array('skills', 'size' => 32, 'class' => 'form-control')); ?>
    <p>&nbsp;</p>
    <?php echo $this->tag->submitButton(array('Next', 'class' => 'btn btn-sm btn-default')); ?>

</form>