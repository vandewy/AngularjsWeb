

<?php
    $name = $email = $message = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $name = test_input($_POST["name"]);
      $email = test_input($_POST["email"]);
      $message = test_input($_POST["message"]);
      echo $name;

    }

    function test_input($data) {
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
    }


    $to = "vandewynkel@gmail.com";
    $subject = "Message";
    $body = $email + " " + $message;
    $from = $name;
    if (mail ($to, $subject, $body, $from)) {
        $result='Thank You! I will be in touch';
        echo <h1>$result</h1>;
    } else {
        $result='Sorry there was an error sending your message. Please try again later';
        echo <h1>$result</h1>;
    }


?>
