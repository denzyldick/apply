<div class="well">


    <h4 class="page-header">{{ lang._("work_experience") | upper }}
        <p class="lead">{{ lang._("what_have_you_done_with_your_life") }}</p>
    </h4>

    <form action="" method="post">
        <input type="hidden" name="update_id" value="{{ work.getId() }}">
        <div class="row">
            <div class="col-md-12">
                <label for="job_title" class="control-label">{{ lang._("job_title") }}</label>
                <div class="form-group"><input type="text" id="job_title" placeholder="{{ lang._("carpenter") }}"
                                               name="job_title" value="{{ work.getJobTitle() }}" class="form-control">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <label for="organisation" class="control-label">{{ lang._("organisation") }}</label>
                <div class="form-group"><input type="text" id="organisation" placeholder="{{ lang._("Google") }}"
                                               name="organisation" class="form-control"
                                               value="{{ work.getOrganisation() }}"></div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <label for="job_title" class="control-label">{{ lang._("description") }}</label>
                <div class="form-group">
                    <textarea name="description" id="" cols="30" rows="10" class="form-control">{{ work.getDescription() }}</textarea>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <label for="start_date" class="control-label">{{ lang._("started") }}</label>
                <div class="form-group">
                    <input type="date" value="{{ work.getStart() }}" name="start" class="form-control">
                </div>
            </div>
            <div class="col-md-6">
                <label for="end" class="control-label">{{ lang._("end") }}</label>
                <div class="form-group">
                    <input type="date" name="end" value="{{ work.getEnd() }}" class="form-control">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="submit" value="{{ lang._("save") }}" class="btn btn-primary btn-small">
            </div>
        </div>

    </form>
</div>