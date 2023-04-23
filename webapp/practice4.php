<html>
    <head>
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
    <?php 
    $size = $_POST["size"];
    print "<table border='1'>";

    print "<tr><td></td>";
    for ($i = 1; $i <= $size; $i++){
        print "<td>" . $i . "</td>";
    }
    print "</tr>";

    for ($i = 1; $i <= $size; $i++){
        print "<tr>";
        print "<td>" . $i . "</td>";
        for ($j = 1; $j <= $size; $j++){
            print "<td>" . $i * $j  . "</td>";
        }
        print "</tr>";
    }
    print "</table>";
    ?>
    </body>

</html>