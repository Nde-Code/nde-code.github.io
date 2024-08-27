var isES6 = true;

var isOpenAboutBox = false;

var modalboxSize = Math.round($(window).width() - 8) + "px";

var startingWidth = $(document).width();

$(window).on('resize', () => {

    var newWidth = $(document).width();

    if (startingWidth !== newWidth) document.location.reload(true);

});

function detectES6() {

    try {

        Function("() => {};");

        return true;

    }

    catch (err) {

        return false;

    }

}

document.oncontextmenu = () => { return false; }

function openAboutBox() {

    if (isOpenAboutBox === false) {

        isOpenAboutBox = true;

        let aboutBoxHtml = `
        <div class="modalbox-class" id="modalbox-about">

            <header class="modalbox-header-class" id="modalbox-header-id">

                <i class="fa-solid fa-circle-info"></i> Informations

                <a class="modalbox-header-close" onclick="$('#modalbox-about').remove(); isOpenAboutBox = false; $('.overlay').css('display', 'none');">

                    <i class="fa fa-times" aria-hidden="true"></i>

                </a>
                
            </header>

            <div class="modalbox-main-contenaire">

                <div class="modalbox-text-contenaire">

                    <h2>Introduction:</h2>

                    <p class="modalbox-description">Ici, vous trouverez toutes les informations sur ce que j'ai utilisé pour concevoir ce site.</p>
                    
                    <p class="modalbox-description">Je justifie certains de ces choix techniques dans la foire aux questions sur la page d'accueil.</p>
                    
                </div>

                <div class="modalbox-line"></div>

                <div class="modalbox-text-contenaire">

                    <h2>Librairies utilisées:</h2>
                    
                    <p class="modalbox-description"><i class="fa-solid fa-square" style="color: #4690F2; font-size: 14px;"></i> <strong>Font Awesome:</strong> pour les petits icons un peu partout sur le site. </p>
                    
                    <p class="modalbox-description"><i class="fa-solid fa-square" style="color: #4690F2; font-size: 14px;"></i> <strong>JQuery:</strong> pour une gestion plus éfficace du DOM en Javascript. </p>
                   
                    <p class="modalbox-description"><i class="fa-solid fa-square" style="color: #4690F2; font-size: 14px;"></i> <strong>Math.js:</strong> pour les outils mathématiques utilisés dans mes projets. </p>
                    
                    <p class="modalbox-description"><i class="fa-solid fa-square" style="color: #4690F2; font-size: 14px;"></i> <strong>Plotly:</strong> pour dessiner des graphiques dans le navigateur. </p>
                
                </div>

                <div class="modalbox-line"></div>
                    
                <div class="modalbox-text-contenaire">

                    <h2>Outils utilisés:</h2>
                    
                    <p class="modalbox-description"><i class="fa-solid fa-square" style="color: #4690F2; font-size: 14px;"></i> <strong>Visual Studio Code:</strong> pour rédiger et modifier le code de ce chaleureux site internet. </p>
                                        
                    <p class="modalbox-description"><i class="fa-solid fa-square" style="color: #4690F2; font-size: 14px;"></i> <strong>Pixlr:</strong> pour retoucher l'image de fond du site.</p>
                    
                    <p class="modalbox-description"><i class="fa-solid fa-square" style="color: #4690F2; font-size: 14px;"></i> <strong>Logomakr:</strong> pour créer mon "favicon".</p>
                    
                </div>

                <div class="modalbox-line"></div>
                    
                <div class="modalbox-text-contenaire">

                    <h2>Ressources utilisées:</h2>
                    
                    <p class="modalbox-description"><i class="fa-solid fa-square" style="color: #4690F2; font-size: 14px;"></i> <strong>Flaticon:</strong> pour les différentes ressources utilisés dans mes projets. je renseigne toujours l'utilisation de ces graphismes dans les pieds de page ou dans un fichier README.Md. </p>
                    
                    <p class="modalbox-description"><i class="fa-solid fa-square" style="color: #4690F2; font-size: 14px;"></i> <strong>Pixabay:</strong> pour l'image de fond. Le lien est dans le "README.md" disponible sur le repos GitHub du projet. </p>
                  
                </div>

                <div class="modalbox-line"></div>
                    
                <div class="modalbox-text-contenaire">

                    <h2>Licence:</h2>
                    
                    <p class="modalbox-description"><i class="fa-solid fa-square" style="color: #4690F2; font-size: 14px;"></i> <strong>GNU General Public License v3.0:</strong> consultez le dépôt GitHub du projet pour en savoir plus sur cette licence.</p>
                
                </div>

            </div>

        </div>`;

        $("#modalbox-open-div").append(aboutBoxHtml);

        mobileAboutBox(modalboxSize);

        $('.overlay').css('display', 'block');

    }

}

function mobileAboutBox(windowSize) {

    if ($(window).width() <= 768 && isOpenAboutBox === true) {

        $("#modalbox-about").css('marginLeft', 'unset');

        $("#modalbox-about").css('left', 'unset');

        $("#modalbox-about").css('width', windowSize);

    }

}

function mobileES6WarningBox(windowSize) {

    if ($(window).width() <= 768 && isES6 === false) {

        $("#modalbox-warning").css('marginLeft', 'unset');

        $(".warning-browser").css('fontSize', '150px');

        $("#modalbox-warning").css('left', 'unset');

        $("#modalbox-warning").css('width', modalboxSize);

    }

}

setInterval(function () {

    mobileAboutBox(modalboxSize);

    mobileES6WarningBox(modalboxSize);

    if ($(window).width() <= 1024 && isOpenAboutBox === true) {

        $(".modalbox-close-btn").each(function () {

            $(this).html('<i class="fa fa-times"></i>');

        });

    }

}, 1000);

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

$(document).ready(function () {

    if (detectES6() === false) {

        isES6 = false;

        let invalidBrowserBox = `
        <div class="modalbox-class" id="modalbox-warning">

            <header class="modalbox-header-class" id="modalbox-header-id">

                <i class="fa-solid fa-circle-exclamation"></i> Attention

            </header>

            <div class="modalbox-main-contenaire" style="text-align: center;">
    
                <div class="modalbox-text-contenaire">

                    <i class="fa-solid fa-triangle-exclamation warning-browser" style="font-size: 220px; color: #FD7E14;"></i>

                    <h2>Absence ES6 - Navigateur obsolète:</h2>

                    <p class="modalbox-description"><strong> Impossible d'interpréter le code JavaScript... </strong></p>

                    <p class="modalbox-description"> Pour des raisons de sécurité évidentes, afin de pouvoir consulter mon site Internet, un navigateur moderne, c'est-à-dire doté de au minimum d'ES6, est nécessaire. </p>

                </div>
    
            </div>
            
        </div>`;

        $(".body-class").css("background", "#212121");

        $("#main-html").remove();

        $("#modalbox-open-div").append(invalidBrowserBox);

        mobileES6WarningBox(modalboxSize);

    }

});

$("#copyright").html(new Date().getFullYear());