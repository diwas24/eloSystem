<?php
    include 'config.php';
    $data['title'] = $_POST['title']??null;
    $data['rep'] = $_POST['rep']??null;
    $data['desc'] = $_POST['desc']??null;
    $data['level'] = $_POST['level']??null;
    $return['success']=true;
    // ERROR CHECKING
    foreach ($data as $key => $value) {
        if (empty($value)) {
            $return['success']=false;
            break;            
        }
    }
    // NO ERROR
    if ($return['success']) {
        // insert into table work
        $sql = "INSERT INTO works (title,rep,descp,level) VALUES ('$data[title]','$data[rep]','$data[desc]','$data[level]')";
        $result = $conn->query($sql);
        if ($result) {
            $return['success'] = $result;
        }
        else{
            $return['success']=false;
        }
    }
    echo json_encode($return);
?>