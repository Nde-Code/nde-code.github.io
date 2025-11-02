var globalData = {

    is_ES6: true,

    modalbox_size: `${Math.round($(window).width() - 8)}px`,

    starting_width: $(document).width()

}

document.oncontextmenu = () => { return false; }

$(window).on('resize', () => {

    let newWidth = $(document).width();

    if (globalData.starting_width !== newWidth) document.location.reload(true);

});

function detectES6() {

    try {

        Function("() => {};");

        return true;

    }

    catch (_err) {

        return false;

    }

}

function openAboutBox() {

    let aboutBoxHtml = `
    <div class="modalbox-class" id="modalbox-notes">

        <header class="modalbox-header-class">

            Notes

            <a class="modalbox-header-close" onclick="$('#modalbox-notes').remove(); $('.overlay').css('display', 'none');">

                <i class="fa fa-times" aria-hidden="true"></i>

            </a>
                
        </header>

        <div class="modalbox-main-container">

            <div class="modalbox-text-container">

                <h2>Librairies utilisées:</h2>

                <p class="modalbox-description"> Afin de rendre ce site encore plus convivial, j'utilise des bibliothèques soigneusement choisies, privilégiant celles qui sont personnalisables, légères et sécurisées, dans le but d'optimiser votre expérience utilisateur et de garantir un confort maximal: </p>
                    
                <p class="modalbox-description"><i class="fa-solid fa-square" style="color: #4690F2; font-size: 14px;"></i> <strong>Font Awesome:</strong> pour les petits icons un peu partout sur le site. </p>
                    
                <p class="modalbox-description"><i class="fa-solid fa-square" style="color: #4690F2; font-size: 14px;"></i> <strong>JQuery:</strong> pour une gestion plus éfficace du DOM en Javascript. </p>
                   
                <p class="modalbox-description"><i class="fa-solid fa-square" style="color: #4690F2; font-size: 14px;"></i> <strong>Math.js:</strong> pour les outils mathématiques utilisés dans mes projets. </p>
                    
                <p class="modalbox-description"><i class="fa-solid fa-square" style="color: #4690F2; font-size: 14px;"></i> <strong>Plotly.js:</strong> pour dessiner des graphiques dans le navigateur. </p>

                <p class="modalbox-description"><i class="fa-solid fa-square" style="color: #4690F2; font-size: 14px;"></i> <strong>Ace.js:</strong> un petit éditeur de code écrit en JavaScript, accompagné des compléments nécessaires, notamment un ou plusieurs thèmes ainsi qu'une ou plusieurs colorations syntaxiques. </p>
                
            </div>

            <div class="modalbox-line"></div>
                    
            <div class="modalbox-text-container">

                <h2>Outils et ressources utilisés:</h2>

                <p class="modalbox-description"> Pour créer ce site, je ne me suis pas contenté d'un simple bloc-notes et de quelques images trouvées sur Internet (d'autant plus que je porte une attention particulière aux droits d'auteur). C'est pourquoi j'ai utilisé différents outils et ressources pour le concevoir: </p>
                    
                <p class="modalbox-description"><i class="fa-solid fa-square" style="color: #4690F2; font-size: 14px;"></i> <strong>Visual Studio Code:</strong> pour rédiger et modifier le code de ce chaleureux site internet. </p>
                                        
                <p class="modalbox-description"><i class="fa-solid fa-square" style="color: #4690F2; font-size: 14px;"></i> <strong>Pixlr:</strong> pour retoucher l'image de fond du site.</p>
                    
                <p class="modalbox-description"><i class="fa-solid fa-square" style="color: #4690F2; font-size: 14px;"></i> <strong>Logomakr:</strong> pour créer mon "favicon".</p>
                   
                <p class="modalbox-description"><i class="fa-solid fa-square" style="color: #4690F2; font-size: 14px;"></i> <strong>Perchance:</strong> pour réaliser l'avatar sur la page d'accueil.</p>
                    
                <p class="modalbox-description"><i class="fa-solid fa-square" style="color: #4690F2; font-size: 14px;"></i> <strong>Flaticon:</strong> pour les différentes ressources utilisés dans mes projets. je renseigne toujours l'utilisation de ces graphismes dans les pieds de page ou dans un fichier README.Md. </p>
                    
                <p class="modalbox-description"><i class="fa-solid fa-square" style="color: #4690F2; font-size: 14px;"></i> <strong>Pixabay:</strong> pour l'image de fond. Le lien est dans le "README.md" disponible sur le repos GitHub du projet. </p>
                  
            </div>

            <div class="modalbox-line"></div>

            <div class="modalbox-text-container">

                <h2>Services tiers:</h2>

                <p class="modalbox-description"><i class="fa-solid fa-square" style="color: #4690F2; font-size: 14px;"></i> <strong>Goatcounter:</strong> Pour obtenir quelques statistiques sur les visites de mon site comme le nombre de visiteurs, leur localisation (pays uniquement), le système d'exploitation, ... j'utilise ces données uniquement dans le but d'améliorer le site. Bien que diantrement simpliste, GoatCounter fait partie des rares services gratuits à la fois honnêtes et pleinement respectueux des réglementations sur la vie privée, comme le RGPD. À tel point que je n'ai même pas besoin d'afficher de bannière de cookies ou d'alerte concernant la collecte de données. </p>

            </div>

            <div class="modalbox-line"></div>
                    
            <div class="modalbox-text-container">

                <h2>Licence:</h2>

                <p class="modalbox-description">Bien que je ne voie pas trop l'intérêt de reprendre l'intégralité du code de mon site pour le réutiliser tel quel, j'ai tout de même décidé de le placer sous <span style="color: #28A745; font-weight: bold;">une licence permissive</span> mais <span style="color: #DC3545; font-weight: bold;">pas trop non plus</span> (ça reste à la base un site personnel, entièrement codé à la main, sans aucun outil). Si vous souhaitez simplement <span style="color: #28A745; font-weight: bold;">reprendre quelques morceaux de code ou des éléments de style</span>, pas de souci. En revanche, pour <span style="color: #DC3545; font-weight: bold;">une réutilisation plus large ou complète</span>, merci de me contacter au préalable pour qu'on en discute. Voici la licence: </p>
                    
                <p class="modalbox-description"><i class="fa-solid fa-square" style="color: #4690F2; font-size: 14px;"></i> <strong>GNU General Public License v3.0:</strong> consultez le dépôt GitHub du projet pour en savoir plus sur cette licence.</p>
                
            </div>

        </div>

    </div>`;

    $("#modalbox-open-div").append(aboutBoxHtml);

    mobileAboutBox(globalData.modalbox_size);

    $('.overlay').css('display', 'block');

}

function mobileAboutBox(windowSize) {

    if ($(window).width() <= 768) {

        $("#modalbox-notes").css('marginLeft', 'unset');

        $("#modalbox-notes").css('left', 'unset');

        $("#modalbox-notes").css('width', windowSize);

    }

}

function mobileES6WarningBox(windowSize) {

    if ($(window).width() <= 768 && globalData.is_ES6 === false) {

        $("#modalbox-warning").css('marginLeft', 'unset');

        $("#modalbox-warning").css('left', 'unset');

        $("#modalbox-warning").css('width', windowSize);

    }

}

// Merci: https://stackoverflow.com/questions/48002147/how-to-activate-and-disable-jquery-click-events-on-an-html-element
$('#display-mobile-menu').on('click', function () {

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

    mobileAboutBox(globalData.modalbox_size);

    mobileES6WarningBox(globalData.modalbox_size);

    if (detectES6() === false) {

        globalData.is_ES6 = false;

        let invalidBrowserBox = `
        <div class="modalbox-class" id="modalbox-warning">

            <header class="modalbox-header-class">

                Attention

            </header>

            <div class="modalbox-main-container" style="text-align: center;">
    
                <div class="modalbox-text-container">

                    <i class="fa-solid fa-triangle-exclamation warning-browser" style="font-size: 200px; color: #FD7E14;"></i>

                    <h2>Absence ES6 - Navigateur obsolète:</h2>

                    <p class="modalbox-description"><strong> Impossible d'interpréter le code JavaScript... </strong></p>

                    <p class="modalbox-description"> Pour des raisons de sécurité évidentes, afin de pouvoir consulter mon site Internet, un navigateur moderne, c'est-à-dire doté de au minimum d'ES6, est nécessaire. </p>

                </div>
    
            </div>
            
        </div>`;

        $(".body-class").css("background", "#212121");

        $("#main-html").remove();

        $("#modalbox-open-div").append(invalidBrowserBox);

        mobileES6WarningBox(globalData.modalbox_size);

    }

});

$("#copyright").html(new Date().getFullYear());