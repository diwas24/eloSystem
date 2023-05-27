<?php
    include 'config.php';
    $data['title'] = $_POST['title']??null;
    $data['rep'] = $_POST['rep']??null;
    $data['desc'] = $_POST['desc']??null;
    // ERROR CHECKING
    foreach ($data as $key => $value) {
        if (empty($value)) {
            $return['error']="Empty Value";
            break;            
        }
    }
    // NO ERROR
    if (!isset($return['error'])) {
        // insert into table work
        $sql = "INSERT INTO work (title,rep,descp) VALUES ('$data[title]','$data[rep]','$data[desc]')";
        $result = $conn->query($sql);
        if ($result) {
            $return['success'] = true;
        }
    }
    echo json_encode($return);
?>