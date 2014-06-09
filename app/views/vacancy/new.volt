<h1>Create a new vacancy</h1>

{{ form('skills', 'method': 'post') }}

    <label>What is the name of your job?</label>
    {{ text_field("name", "size": 32,"class":"form-control") }}
    <label>What kind of skills are you looking for?</label>
    {{ text_field("skills", "size" : 32,"class":"form-control") }}
    <p>&nbsp;</p>
    {{ submit_button('Next',"class":"btn btn-sm btn-default") }}

</form>