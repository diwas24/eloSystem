<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Stat Input</title>
    <?php 
        include 'static.php'
    ?>
</head>

<body>
    <div class="cont">
        <button onclick="addWork()">ADD</button>
        <br />
        <div class="addWork">
            <form onsubmit="addWorkValid(event,this)">
                <span class="error"></span><br />
                <input type="text" class="fdata" required="true" name="title" placeholder="name" /><br /><br />
                <input type="number" name="rep" required="true" class="fdata" placeholder="rep" />
                <select name="repTy" id="">
                    <option value="time">Time</option>
                    <option value="count">Count</option>
                </select><br /><br />
                <textarea name="desc" cols="70" required="true" rows="8"
                    placeholder="description"></textarea><br /><br />
                <input type="submit" value="add" />
            </form>
        </div>
    </div>
</body>

</html>