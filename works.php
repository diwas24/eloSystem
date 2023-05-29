<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Create Work</title>
    <?php include 'static.php' ?>
</head>

<body>
    <div class="cont">
        <div class="contWork">
            <form onsubmit="addWork(event,this)">
                <span class="res"></span><br /><br />
                <input type="text" class="fdata" required="true" name="title" placeholder="name" /><br /><br />
                <input type="number" name="rep" required="true" class="fdata" placeholder="rep" />
                <select name="repTy" id="">
                    <option value="time">Time</option>
                    <option selected value="count">Count</option>
                </select><br /><br />
                <select name="level">
                    <option value="" disabled selected>Level</option>
                    <option value="warmUp">Warm Up</option>
                    <option value="Easy">Easy</option>
                    <option value="Hard">Hard</option>
                    <option value="Extreme">Extreme</option>
                    <option value="Impossible">Impossible</option>
                </select><br /><br />
                <textarea name="desc" cols="70" required="true" rows="8" placeholder="description"></textarea><br /><br />
                <input type="submit" value="add" />
            </form>
        </div>
    </div>
</body>

</html>