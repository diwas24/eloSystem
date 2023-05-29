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
    <br />
    <div class="container">
      <form>
        <div class="row">
          <div class="col-md-3">
            <input
              type="text"
              class="form-control"
              placeholder="Set Name"
              aria-label="Set name"
            />
          </div>
          <div class="input-group col mb-3">
            <div class="searchInput">
              <input
                type="text"
                class="form-control"
                oninput="sugg(this)"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <div class="resultBox"></div>
            </div>
            <span class="input-group-text" id="basic-addon1"
              ><i class="fa-solid fa-plus"></i
            ></span>
          </div>
        </div>
      </form>
    </div>
  </body>
</html>
