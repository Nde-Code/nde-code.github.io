var globalData = {

    modalbox_size: `${Math.round($(window).width() - 8)}px`,

    starting_width: $(document).width(),

    tol_resize: 10

};

document.oncontextmenu = () => { return false; }

$(window).on('resize', () => {

    let newWidth = $(document).width();

    if (Math.abs(globalData.starting_width - newWidth) > globalData.tol_resize) document.location.reload();

});

function getNotesTemplate() {

    return `
    <div class="modalbox-class" id="modalbox-notes" role="dialog" style="display:none;">

        <header class="modalbox-header-class">

            Notes

            <a class="modalbox-header-close" id="close-notes-btn" aria-label="Fermer la boîte de dialogue.">

                <i class="fa fa-times" aria-hidden="true"></i>

            </a>
                
        </header>

        <div class="modalbox-main-container">

            <div class="modalbox-text-container">

                <h2>Librairies utilisées:</h2>

                <p class="modalbox-description"> J'utilise des bibliothèques soigneusement choisies, privilégiant celles qui sont personnalisables, légères et sécurisées, dans le but d'optimiser votre expérience utilisateur et de garantir un confort maximal: </p>
                    
                <p class="modalbox-description"><i class="fa-solid fa-square" style="color: #4690F2; font-size: 14px;"></i> <strong>Font Awesome:</strong> pour les petits icons un peu partout sur le site. </p>
                    
                <p class="modalbox-description"><i class="fa-solid fa-square" style="color: #4690F2; font-size: 14px;"></i> <strong>JQuery:</strong> pour une gestion plus éfficace du DOM en Javascript. </p>
                   
                <p class="modalbox-description"><i class="fa-solid fa-square" style="color: #4690F2; font-size: 14px;"></i> <strong>Math.js:</strong> pour les outils mathématiques utilisés dans mes projets. </p>
                    
                <p class="modalbox-description"><i class="fa-solid fa-square" style="color: #4690F2; font-size: 14px;"></i> <strong>Plotly.js:</strong> pour dessiner des graphiques dans le navigateur. </p>

                <p class="modalbox-description"><i class="fa-solid fa-square" style="color: #4690F2; font-size: 14px;"></i> <strong>Ace.js:</strong> un petit éditeur de code écrit en JavaScript, accompagné des compléments nécessaires, notamment un ou plusieurs thèmes ainsi qu'une ou plusieurs colorations syntaxiques. </p>
                
                <p class="modalbox-description"><i class="fa-solid fa-square" style="color: #4690F2; font-size: 14px;"></i> <strong>Leaflet.js:</strong> pour créer des cartes interactives en JavaScript. </p>

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

                <p class="modalbox-description"><i class="fa-solid fa-square" style="color: #4690F2; font-size: 14px;"></i> <strong>Goatcounter:</strong> pour obtenir certaines informations telles que le nombre de visiteurs, leur localisation (pays uniquement), leur système d'exploitation, ... Ce service est entièrement conforme au RGPD et ne nécessite pas de bannière de cookies. </p>

                <p class="modalbox-description"><i class="fa-solid fa-square" style="color: #4690F2; font-size: 14px;"></i> <strong>MapTiler:</strong> pour réaliser des cartes avec Leaflet.js, j'utilise un service qui fournit des tuiles raster un peu plus qualitatives que celles d'OpenStreetMap. </p>

            </div>

            <div class="modalbox-line"></div>
                    
            <div class="modalbox-text-container">

                <h2>Licence:</h2>

                <p class="modalbox-description">Bien que je ne voie pas trop l'intérêt de reprendre l'intégralité du code de mon site pour le réutiliser tel quel, j'ai tout de même décidé de le placer sous <span style="color: #28A745; font-weight: bold;">une licence permissive</span> mais <span style="color: #DC3545; font-weight: bold;">pas trop non plus</span> (ça reste à la base un site personnel, entièrement codé à la main, sans aucun outil). Si vous souhaitez simplement <span style="color: #28A745; font-weight: bold;">reprendre quelques morceaux de code ou des éléments de style</span>, pas de souci. En revanche, pour <span style="color: #DC3545; font-weight: bold;">une réutilisation plus large ou complète</span>, merci de me contacter au préalable pour qu'on en discute. Voici la licence: </p>
                    
                <p class="modalbox-description"><i class="fa-solid fa-square" style="color: #4690F2; font-size: 14px;"></i> <strong>GNU General Public License v3.0:</strong> consultez le dépôt GitHub du projet pour en savoir plus sur cette licence.</p>
                
            </div>

        </div>

    </div>`;

}

function openNotesBox() {

    let $modal = $("#modalbox-notes");

    if ($modal.length === 0) {

        $("#modalbox-open-div").append(getNotesTemplate());

        $modal = $("#modalbox-notes"); 
        
    }

    applyMobileStyles($modal);
    
    $modal.show();

    $('.overlay').show();

}

function applyMobileStyles($element) {

    if ($(window).width() <= 768) {

        $element.css({

            'marginLeft': 'unset',

            'left': 'unset',

            'width': globalData.modalbox_size

        });

    }

}

$(document).ready(function () {

    $("#notes-btn-id").on("click", openNotesBox);

    $(document).on('click', '#close-notes-btn', () => {

        $('#modalbox-notes').hide();

        $('.overlay').hide();

    });

    $("#copyright").text(new Date().getFullYear());

    // Merci: https://stackoverflow.com/questions/48002147/how-to-activate-and-disable-jquery-click-events-on-an-html-element
    $('#display-mobile-menu').on('click', function () {

        let $this = $(this);

        let $menu = $(".menu-class"); 

        if (!$this.hasClass("active")) {

            $this.addClass('active');

            $menu.addClass('is-mobile-open'); 
            
            $this.html('<i class="fa-solid fa-xmark"></i>');

        } else {

            $this.removeClass('active');

            $menu.removeClass('is-mobile-open');
            
            $this.html('<i class="fa-solid fa-bars"></i>');

        }
        
    });

});

