<div class="row" style="overflow-x:hidden" id="search_bar">
    <div class="col-md-12 col-md-offset-1">
        <h2>{{ lang._("find_your_new_employee") }}</h2>

        <div class="input-group col-md-10">
            <input type="text"
                   {% if user.getSearchEnable() == 0 %}
                    onkeypress="javascript:$('#access_to_cv_database').modal('show')"
                   {% endif %}
                   id="search_employee_value" class="form-control input-lg"
                   placeholder="&nbsp;{{ lang._("search_employer_placeholder") }}" autofocus/>
                    <span class="input-group-btn">
                        <button class="btn btn-info btn-lg" type="button" id="search_employee">
                            <i class="glyphicon glyphicon-search"></i>
                        </button>
                    </span>
        </div>
    </div>
</div>
<p>&nbsp;</p>
<div class="row">
    <div id="show_vacancy" class="well col-md-12" style="display: none;" >
    </div>

    <div class="col-md-12" id="result_holder">
        <img src="/img/ajax-loader.gif" id="loader" style="display:none" class="col-md-offset-5"/>
        <div id="results"></div>
    </div>

</div>
{% if user.getSearchEnable() == 0 %}
<div c id="access_to_cv_database" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">{{ lang._("access_to_cv_database") }}</h4>
            </div>
            <div class="modal-body">

                    <i class="fa fa-archive fa-5x"></i><br/>

                    {% set price = '99.99' %}
                    {% set price_in_cents = 9999 %}
                    <small>
                        {{ lang._("access_to_cv_database") }}
                    </small>
                    <form action="/premium/charge" method="post">
                        <script src="https://checkout.stripe.com/checkout.js" class='stripe-button'
                                data-key="<?php echo $this->config->stripe['publishable_key']; ?>"
                                data-label="{{ lang._("buy_upgrade") }} {{ price }}"
                                data-amount="{{ price_in_cents }}" data-email="{{ user.getEmail() }}"
                                data-description="{{ lang._('access_to_cv_database') }}"
                                data-allow-remember-me="false" ,
                                data-class="btn btn-primary btn-lg"
                        ></script>
                        <input type=hidden name='type' value='cv_database'/>
                    </form>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary"></button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
{% endif %}