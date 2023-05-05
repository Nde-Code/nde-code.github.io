var isOpenContactBox = false;

var isOpenAboutBox = false;

var isES6 = true;

function openContactBox() {

    if (isOpenContactBox === false) {

        isOpenContactBox = true

        var contactBoxHtml = `
        <div class="modalbox-class" id="modalbox-contact">
            <header class="modalbox-header-class" id="modalbox-header-id">
                <i class="fas fa-envelope"></i> Contact 
                <a class="modalbox-header-close" onclick="$('#modalbox-contact').remove(); isOpenContactBox = false;">
                    <i class="fa fa-times" aria-hidden="true"></i>
                </a>
            </header>
            <div class="modalbox-main-content">

                <div class="modalbox-text-contenaire">
                    <h2>Règles à respecter:</h2>
                    <p class="modalbox-description"><i class="fas fa-check" style="color: green;"></i> Vous pouvez me contacter pour des questions pertinentes mais aussi pour des explications sur le fonctionnement ou sur le code de mes projets. Il est également et certainement permis de me rapporter des problèmes en rapport avec mon site ou mes projets.</p>
                    <p class="modalbox-description"><i class="fas fa-times" style="color: red;"></i> Hors de question de me contacter pour des bêtises ou des tentatives néfastes à mon égard. Les mails sans la moindre des politesses ou écrit avec un vocabulaire inadéquat ne seront même pas lus. Le spam est également proscrit !</p>
                    <p class="modalbox-description"><i class="fas fa-exclamation-triangle" style="color: orange;"></i> Vous pouvez m'écrire en français, anglais et éventuellement dans un néerlandais assez simple. </p>
                </div>

                <div class="modalbox-white-lines" style="margin-top: 20px; margin-bottom: 40px;"></div>

                <div style="margin-bottom: 40px; text-align: center;">
                    <a title="Mon adresse mail:" onclick="$('#modalbox-contact').remove(); isOpenContactBox = false;" class="modalbox-go-btn" id="contact-btn-id"><i class="fa-solid fa-envelope"></i> nathan.debilloez@outlook.com</a>
                </div>
                
            </div>
        </div>`;

        $("#modalbox-open-div").append(contactBoxHtml);

    }

}

function openAboutBox() {

    if (isOpenAboutBox === false) {

        isOpenAboutBox = true;

        let aboutBoxHtml = `
        <div class="modalbox-class" id="modalbox-about">
            <header class="modalbox-header-class" id="modalbox-header-id">
                <i class="fa-solid fa-circle-info"></i> À propos
                <a class="modalbox-header-close" onclick="$('#modalbox-about').remove(); isOpenAboutBox = false;">
                    <i class="fa fa-times" aria-hidden="true"></i>
                </a>
            </header>
            <div class="modalbox-main-content">

                <div class="modalbox-text-contenaire">
                    <h2>Librairies utilisées:</h2>
                    <p class="modalbox-description"><strong> · Font Awesome:</strong> pour les petits icons un peu partout sur le site. </p>
                    <p class="modalbox-description"><strong> · JQuery:</strong> pour une gestion plus éfficace du DOM Javascript. </p>
                    <p class="modalbox-description"><strong> · Math.js:</strong> pour les outils mathématiques dans mes projets. </p>
                    <p class="modalbox-description"><strong> · Plotly:</strong> pour dessiner des graphiques dans le navigateur. </p>
                    <div class="modalbox-white-lines" style="margin-top: 20px; margin-bottom: 40px;"></div>
                    <h2>Outils utilisés:</h2>
                    <p class="modalbox-description"><strong> · Visual Studio Code:</strong> pour rédiger et modifier le code de ce chaleureux site internet. </p>
                    <p class="modalbox-description"><strong> · Canva:</strong> pour modifier et réaliser quelques graphismes. </p>
                    <p class="modalbox-description"><strong> · Pixlr:</strong> pour retoucher les images.</p>
                    <p class="modalbox-description"><strong> · Getavataaars:</strong> pour créer mon "favicon".</p>
                    <div class="modalbox-white-lines" style="margin-top: 20px; margin-bottom: 40px;"></div>
                    <h2>Ressources utilisées:</h2>
                    <p class="modalbox-description"><strong> · Flaticon:</strong> pour les différentes ressources utilisés dans mes projets. je renseigne toujours l'utilisation de ces graphismes dans les pieds de page ou dans un fichier README.Md. </p>
                    <p class="modalbox-description"><strong> · Pixabay:</strong> pour l'image de fond. Le lien est dans le "README.md" disponible sur le repos GitHub du projet. </p>
                    <div class="modalbox-white-lines" style="margin-top: 20px; margin-bottom: 40px;"></div>
                    <h2>Licence:</h2>
                    <p class="modalbox-description"><strong>GNU General Public License v3.0</strong></p>
                </div>
            </div>
        </div>`;

        $("#modalbox-open-div").append(aboutBoxHtml);

    }

}

function detectES6() {

    try {

        Function("() => {};");

        return true;

    }

    catch (err) {

        return false;

    }

}

setInterval(function () {

    let mobileBoxSize = Math.round(window.innerWidth - 10) + "px";

    if ($(window).width() <= 768 && isOpenContactBox === true) {

        $("#modalbox-contact").css('marginLeft', 'unset');

        $("#modalbox-contact").css('left', 'unset');

        $("#modalbox-contact").css('width', mobileBoxSize);

        $("#contact-btn-id").css('fontSize', '10px');

    }

    if ($(window).width() <= 768 && isOpenAboutBox === true) {

        $("#modalbox-about").css('marginLeft', 'unset');

        $("#modalbox-about").css('left', 'unset');

        $("#modalbox-about").css('width', mobileBoxSize);

    }

    if ($(window).width() <= 768 && isES6 === false) {

        $("#modalbox-warning").css('marginLeft', 'unset');

        $(".warning-browser").css('fontSize', '150px')

        $("#modalbox-warning").css('left', 'unset');

        $("#modalbox-warning").css('width', mobileBoxSize);

    }

    if ($(window).width() <= 1024 && isOpenContactBox === true || $(window).width() <= 1024 && isOpenAboutBox === true) {

        $(".modalbox-close-btn").each(function () {

            $(this).html('<i class="fa fa-times"></i>')

        });

    }

}, 500);

// Merci: https://stackoverflow.com/questions/48002147/how-to-activate-and-disable-jquery-click-events-on-an-html-element
$('#displayMobileMenu').on('click', function () {

    if (!$(this).is(".active")) {

        $(this).addClass('active');

        $(".menu-dropdown .menu-dropdown-btn").css("display", "block");

        $(".menu-item").css("display", "block");

        $(this).html('<i class="fa-solid fa-xmark"></i>')

    } else {

        $(this).removeClass('active');

        $(this).html('<i class="fa-solid fa-bars"></i>');

        $(".menu-dropdown .menu-dropdown-btn").css("display", "none");

        $(".menu-item").css("display", "none");

    }

});

document.oncontextmenu = () => { return false; }

$(document).ready(function () {

    if (detectES6() === false) {

        isES6 = false;

        let invalidBrowserBox = `
        <div class="modalbox-class" id="modalbox-warning">
            <header class="modalbox-header-class" id="modalbox-header-id">
                <i class="fa-solid fa-triangle-exclamation"></i> Attention
            </header>
            <div class="modalbox-main-content" style="text-align: center; overflow-y: hidden;">
    
                <div class="modalbox-text-contenaire">
                    <i class="fa-solid fa-triangle-exclamation warning-browser" style="font-size: 240px; color: #FF941A;"></i>
                    <h2>Navigateur incompatible:</h2>
                    <p class="modalbox-description"> Impossible d'interpréter le code Javascript ! </p>
                </div>
    
            </div>
        </div>`;

        $(".main-body-class").css("background", "#212121");

        $("#main-elements-contenaire").remove();

        $("#modalbox-open-div").append(invalidBrowserBox);

    }

});

setInterval(function () {

    $('body').css('zoom', (window.innerWidth / window.outerWidth));

}, 1);

var startingWidth = $(document).width();

$(window).on('resize', () => {

    var newWidth = $(document).width();

    if (startingWidth !== newWidth) {

        document.location.reload(true);

    }

});

$("#copyright").html(new Date().getFullYear());