{% extends "templates/base.volt" %}
{% block content %}
<style>

.question_header{
font-size: 41px;
/* font-weight: bold; */
text-align: center;
background-color: #F0F0F0;
height: 60px;
}.answers{
	text-align: center;
padding-top: 30px;
margin-bottom:20px;
}
.btn-next
{
	margin-right:50px;
}

</style>
<script>
$(document).ready(function()
{
	$("#question_1").nextAll().hide();

	$(".btn-next").click(function(event)
	{
		 event.preventDefault();
		$(this).parent().hide('fast');
		$(this).parent().next().fadeIn('slow');
	});
});


</script>
<form action="/signup/start" method=post>
<div id='question_1' class='question'>
<div class='question_header'>
	What brings you here?
</div>
<div class='answers'>
<div class="btn-group" data-toggle="buttons">
	<label class="btn btn-lg btn-primary">
		<input type="radio" name="type" value='employer'> I'm a employer search for a employee
	</label>
	<label class="btn btn-lg btn-primary active">
		<input type="radio" name="type"  > I'm someone that needs a job
	</label>

</div>
</div>
<button class='btn-next btn btn-default btn-lg pull-right' >Next</button>
</div>

<div id='question_2'>
<div class='question_header'>
	What is your firstname ?
</div>
<div class='answers'>
<input type='text' class='form-control input-lg' placeholder='Jhon example'/>

</div>
<button class='btn btn-default btn-lg btn-next  pull-right' >Next</button>
</div>



<div id='question_3'>
<div class='question_header'>
	What is your lastname ?
</div>
<div class='answers'>
<input type='text' class='form-control input-lg' name='lastame' placeholder='Jhon example'/>

</div>
<button class='btn btn-default btn-lg btn-next pull-right' >Next</button>
</div>


<div id='question_5'>
<div class='question_header'>
	What is your email
</div>
<div class='answers'>
<input type='text' class='form-control input-lg' name='email' placeholder='Jhon@example.com'/>

</div>
<button class='btn btn-default btn-lg btn-next  pull-right' >Next</button>
</div>

<div id='question_6'>
<div class='question_header'>
	Choose a password
</div>
<div class='answers'>
<input type='password' class='form-control input-lg' name='password' /><br/>
<input type='password' class='form-control input-lg' name='re_password'/>

</div>
<button class='btn btn-default btn-lg btn-next  pull-right' >Next</button>
</div>

<div id='question_'>
<div class='question_header'>
	Almost done !
</div>
<div class='answers'>
	<button  class="btn btn-primary btn-lg" data-toggle="button">I accept the licence agreements!</button><p></p>
	<button class='btn btn-default btn-lg' type="submit">I'm done</button>
</div>

</div>
</div>
</form>
{% endblock %}
