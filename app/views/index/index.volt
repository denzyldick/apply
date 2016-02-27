
        <div class="row" style="overflow-x:hidden">
            <div class="col-md-12 col-md-offset-1">
                <h2>{{ lang._("find_your_new_career") }}</h2>
                <div class="input-group col-md-10">
                    <input type="text"  id="search_employee_value" class="form-control input-lg"
                           placeholder="&nbsp;{{ lang._("search_employer_placeholder") }}"/>
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
            <div class="col-md-12">
                <img src="/img/ajax-loader.gif" id="loader" style="display:none" class="col-md-offset-5"/>
                <div id="results"></div>
            </div>
        </div>