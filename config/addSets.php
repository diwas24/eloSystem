<?php
include 'config.php';
$data['setName'] = $conn->real_escape_string($_POST['setName']) ?? null;
$data['setRep'] = intval($_POST['setRep']) ?? null;
$data['activity'] = intval($_POST['activity']) ?? null;
$data['works'] = array_map('intval', $_POST['works']) ?? null;
$return['success'] = true;
$return['data'] = $data;
foreach ($data as $key => $value) {
    if (empty($value)) {
        $return['success'] = false;
        break;
    }
}
// NO ERROR
if ($return['success']) {
    // insert into table sets
    $sql = "INSERT INTO sets (setName, rep, activity) VALUES ('$data[setName]','$data[setRep]','$data[activity]')";
    $result = $conn->query($sql);
    echo ($conn->error);
    if ($result) {
        $setId = $conn->insert_id;
        foreach ($data['works'] as $workId) {
            $sql = "INSERT INTO set_works (sid, wid) VALUES ($setId, $workId)";
            $result = $conn->query($sql);
            if (!$result) {
                $return['success'] = false;
                break;
            }
        }
        $return['success'] = $result;
    } else {
        $return['success'] = false;
    }
}
echo json_encode($return);
