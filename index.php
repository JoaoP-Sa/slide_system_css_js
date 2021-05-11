<!doctype html>
<html lang="pt-br">
    <head>
    <link href="css/style.css" rel="stylesheet" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    </head>

    <body>
        <section class="slider">
            <div class="container">
                <img class="image image_1" src="images/Desert.jpg">
                <img class="image image_2" src="images/Penguins.jpg">
                <img class="image image_3" src="images/Lighthouse.jpg">
            </div>
        </section>
        <section class="bullet">
        <div class="bullets">
                <span onclick="slideBullet(0)"></span>
                <span onclick="slideBullet(1)"></span>
                <span onclick="slideBullet(2)"></span>
            </div>
        </section>

    <script src="js/functions.js"></script>
</html>