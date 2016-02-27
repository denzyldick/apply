<form action="index/changepassword" method="post">

    <div class="row">
        <label for="firstpassword" class="col-md-4">{{ lang._("password") }}</label>
        <input class="col-md-5" type="text" name="firstpassword"/>

    </div>
    <div class="row">
        <label for="firstpassword" class="col-md-4">{{ lang._("re_type_password") }}</label>
        <input class="col-md-5" type="text" name="re_type_password"/>

    </div>
    <div class="row">
        <div class="col-md-4"><input type="submit" class="btn btn-large btn-primary"/></div>
    </div>
</form>