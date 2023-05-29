<?php
include 'config.php';
// get work from table works using $conn->query
$sql = "SELECT * FROM works";
$result = $conn->query($sql);
if ($result) {
    if ($result->num_rows > 0) {
        $return['success'] = true;
        $return['data'] = $result->fetch_all(MYSQLI_ASSOC);
    } else {
        $return['success'] = false;
    }
}
echo json_encode($return);
