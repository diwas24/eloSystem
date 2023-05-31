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
        <form onsubmit="addSets(event,this)">
            <div id="msg"></div>
            <div class="form-group row g-3">
                <div class=" col-md-3 mb-2">
                    <label for="sName" class="form-label">Set Name:</label>
                    <input required type="text" name="setName" id="sName" class="form-control" placeholder="Set Name" />
                </div>
                <div class="col-md-3 mb-2">
                    <label for="sRep" class="form-label">Repetition:</label>
                    <input required type="number" name="setRep" id="sRep" class="form-control"
                        placeholder="Set Repetition" />
                </div>
                <div class="mb-2">
                    <label for="sWorks" class="form-label">Add Works:</label>
                    <select required class="selectpicker" multiple id="sWorks" name="works" data-live-search="true">
                        <?php
            $works = (require 'config/getWork.php')['data'];
            foreach ($works as $work) {
              echo '<option   value="' . $work['wid'] . '">' . $work['title'] . '</option>';
            }
            ?>
                    </select>
                </div>
                <div class="mb-2">
                    <label for="sAct" class="form-label">Set Activity:</label>
                    <select required class="form-select" name="activity" id="sAct" class="form-control"
                        placeholder="Activity">
                        <option value="0">inActive</option>
                        <option value="1">Daily</option>
                    </select>
                </div>
            </div>
            <br />
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</body>

</html>