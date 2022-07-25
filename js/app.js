console.log("%c Bienvenue sur mon site internet !", 'font-size: 1.2em; font-family: Verdana; color: #2B96D9; font-weight: bold;');

var isOpenContactBox = false;

var isOpenAboutBox = false;

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

                <div class="modalbox-components-contenaire">
                    <h2>Règles à respecter:</h2>
                    <p class="modalbox-description"><i class="fas fa-check" style="color: green;"></i> :Vous pouvez me contacter pour des questions pertinentes en rapport avec mon site ou autre application. Vous pouvez me soumettre vos projets faits avec mes logiciels, mais aussi me dire ce que va (pas) sur le thème, la police d'écriture, etc... </p>
                    <p class="modalbox-description"><i class="fas fa-times" style="color: red;"></i> :Hors de question de me contacter pour des bêtises ou des tentatives néfastes à mon égard. Pas question non plus de spammer ou de me demander comment ça va ! </p>
                    <p class="modalbox-description"><i class="fas fa-exclamation-triangle" style="color: orange;"></i> :Je ne répondrai pas dans l'immédiat voir peut-être même plus tard, mais je lirai bien évidemment vos emails au plus vite. </p>
                </div>

                <div class="white-lines"></div>

                <div class="modalbox-components-contenaire">
                    <h2>Mon E-Mail:</h2>
                    <p class="modalbox-description"> Cet E-Mail est la seule que je vous laisse pour me contacter. Merci de ne pas en abuser et ne pas spammer ma boîte mail. </p>
                </div>

                <input style="text-align: center;" id="email" class="email-bar" value="nathan.debilloez@outlook.com" readonly>
                
                <div class="white-lines" style="margin-top: 20px; margin-bottom: 40px;"></div>

                <div style="margin-bottom: 40px; text-align: center;">
                    <a class="modalbox-close-btn" onclick="$('#modalbox-contact').remove(); isOpenContactBox = false;"><i class="fa fa-times"></i> Fermer</a>
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

                <div class="modalbox-components-contenaire">
                    <h2>Information:</h2>
                    <p class="modalbox-description"> Le site est statique, il n'y a aucun code serveur, et également aucune utilisation de base de données. Le code est en HTML, Css, Javascript avec JQuery. </p>
                    <h2>Librairies utilisées:</h2>
                    <p class="modalbox-description"> · Particles.js: <a href="https://github.com/VincentGarreau/particles.js" class="link-btn">https://github.com/VincentGarreau/particles.js</a></p>
                    <p class="modalbox-description"> · Font Awesome: <a href="https://fontawesome.com/" class="link-btn">https://fontawesome.com/</a></p>
                    <p class="modalbox-description"> · FileSaver: <a href="https://github.com/eligrey/FileSaver.js/" class="link-btn">https://github.com/eligrey/FileSaver.js/</a></p>
                    <p class="modalbox-description"> · JQuery: <a href="https://jquery.com/" class="link-btn">https://jquery.com/</a></p>
                    <p class="modalbox-description"> · Math.js: <a href="https://mathjs.org/" class="link-btn">https://mathjs.org/</a></p>
                    <p class="modalbox-description"> · Plotly: <a href="https://plotly.com/javascript/" class="link-btn">https://plotly.com/javascript/</a></p>
                    <h2>Outils utilisés:</h2>
                    <p class="modalbox-description"> · Visual Studio Code: <a href="https://code.visualstudio.com/" class="link-btn">https://code.visualstudio.com/</a></p>
                    <p class="modalbox-description"> · Canva: <a href="https://www.canva.com/" class="link-btn">https://www.canva.com/</a></p>
                    <p class="modalbox-description"> · Pixlr: <a href="https://pixlr.com/fr/" class="link-btn">https://pixlr.com/fr/</a></p>
                    <h2>Site utilisé:</h2>
                    <p class="modalbox-description"> · W3schools: <a href="https://www.w3schools.com/" class="link-btn">https://www.w3schools.com/</a></p>
                    <h2>Licence:</h2>
                    <p class="modalbox-description">À obligatoirement respecter: "GNU General Public License v3.0"</p>
                </div>

                <div class="white-lines" style="margin-top: 20px; margin-bottom: 40px;"></div>

                <div style="margin-bottom: 40px; text-align: center;">
                    <a class="modalbox-close-btn" onclick="$('#modalbox-about').remove(); isOpenAboutBox = false;"><i class="fa fa-times"></i> Fermer</a>
                </div>
            </div>
        </div>`;

        $("#modalbox-open-div").append(aboutBoxHtml);

    }

}

setInterval(function () {

    let mobileBoxSize = Math.round(window.innerWidth - 10) + "px";

    if ($(window).width() <= 768 && isOpenContactBox === true) {

        $("#modalbox-contact").css('marginLeft', 'unset');

        $("#modalbox-contact").css('left', 'unset');

        $("#modalbox-contact").css('width', mobileBoxSize);

    }

    if ($(window).width() <= 768 && isOpenAboutBox === true) {

        $("#modalbox-about").css('marginLeft', 'unset');

        $("#modalbox-about").css('left', 'unset');

        $("#modalbox-about").css('width', mobileBoxSize);

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
