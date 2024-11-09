<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fituckness - Your way to life</title>
    <link rel="stylesheet" href="./assets/css/style.css">
    <script src="./assets/js/script.js" defer="defer"></script>
    <link rel="shortcut icon" href="./assets/midias/favicon.ico" type="image/x-icon">
</head>
<body>
    <header>
        <img src="./assets/midias/logo2.png" alt="" srcset="">
        <nav>
            <li onclick="patao(main, './pgs/main.php')">Home</li>
            <li>About</li>
            <li>Contact</li>
        </nav>
    </header>
    <main>
        <?php include "./pgs/main.php"; ?>
    </main>
    <footer></footer>
</body>
</html>