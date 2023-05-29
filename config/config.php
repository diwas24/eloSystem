<?php
    // connection to xampp database name elosys with username root and no password the server is localhost using new mysqli()
    $conn = new mysqli('localhost', 'root', '', 'elosys');
    // check connection
    if ($conn->connect_error)die("Connection failed: " . $conn->connect_error);
?>