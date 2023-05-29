<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Create Sets</title>
    <?php 
        include 'static.php'
    ?>
  </head>

  <body>
    <!-- <form class="form row g-3" onsubmit="addSets(event,this)">
      <div class="col-md-6">
        <input type="text" class="form-control" name="setName" />
      </div>
      
    </form> -->
    <div class="">
      <form>
        <div class="row">
          <div class="col-md-3">
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="First name"
              aria-label="First name"
            />
          </div>
          <div class="col-md-3">
            <div class="searchInput col">
              <input
                type="text"
                class="form-control form-control-lg"
                oninput="sugg(this)"
                placeholder="Add Work..."
              />
              <div class="resultBox"></div>
              <div class="icon"><i class="fas fa-search"></i></div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </body>
</html>
