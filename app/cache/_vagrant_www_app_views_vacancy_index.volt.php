          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Skills</th>
                  <th>Location</th>
                  <th>Matches</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                                <?php foreach ($vacancies as $vacancies) { ?>
 <tr>
                  <td><?php echo $vacancies->function; ?></td>

                  <td>3</td>
                  <td>Amsterdam</td>
                  <td>30</td>
                  <td><a href="matches/view/<?php echo $vacancies->id; ?>/<?php echo $tokenKey; ?>/<?php echo $tokenValue; ?>" class='btn btn-sm btn-success'><span class="glyphicon glyphicon-search"> Matches</span></a>&nbsp;<a href="/vacancy/remove/<?php echo $vacancies->id; ?>" class="btn btn-sm btn-danger"><span class="glyphicon glyphicon-remove"> REMOVE</span></a></td>
                </tr>

<?php } ?>
              </tbody>
            </table>
</div>
<a href="vacancy/new" class="btn btn-small btn-default"> new</a> &nbsp;<a href="premium" class="btn btn-small btn-primary"> more</a>
