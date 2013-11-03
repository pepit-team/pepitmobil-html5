<div data-role="content">

    <div data-role="collapsible-set" data-theme="a" data-content-theme="c">
        <div data-role="collapsible">
            <h3>Français</h3>
            <ul data-role="listview" data-inset="false">
                <li data-icon="delete"><a href="#">Déterminants "le - la - les"</a></li>
                <li data-icon="delete"><a href="#">Déterminants "un - une - des"</a></li>
                <li data-icon="delete"><a href="#">L'autre moitié de l'illustration</a></li>
                <li data-icon="delete"><a href="#">Le scrabble (mots de 3 à 5 lettres)</a></li>
                <li data-icon="delete"><a href="#">Écrire un mot en sélectionnant les lettres</a></li>
                <li data-icon="delete"><a href="#">Écrire un mot avec la coccinelle</a></li>
                <li data-icon="delete"><a href="#">Les mots en désordre</a></li>
                <li data-icon="delete"><a href="#">Les mots identiques</a></li>
                <li data-icon="delete"><a href="#">Quatre sons "in - oi - on - ou"</a></li>
                <li data-icon="delete"><a href="#">Syllabes phonique Dogs</a></li>
            </ul>
        </div>
        <div data-role="collapsible">
            <h3>Mathématiques</h3>
            <ul data-role="listview" data-inset="false" >
                <li data-icon="delete"><a href="#">Ajouter une carte</a></li>
                <li data-icon="delete"><a href="#">Boulier, additionner</a></li>
                <li data-icon="delete"><a href="#">Boulier, soustraire</a></li>
                <li data-icon="delete"><a href="#">Colorier autant que</a></li>
                <li data-icon="delete"><a href="#">Colorier selon la consigne</a></li>
                <li>
                    <?php
                    echo $this->Html->link('Compléter, additionner',
                        array('controller' => 'pages', 'action' => 'display', 'exercises/m/math/completeradditionner'),
                        array('escape' => false));
                    ?>
                </li>
                <li data-icon="delete"><a href="#">Compléter, soustraire</a></li>
                <li data-icon="delete"><a href="#">Compter les images</a></li>
                <li data-icon="delete"><a href="#">Diviser et partager</a></li>
                <li data-icon="delete"><a href="#">Le pommier, compter, écrire</a></li>
                <li data-icon="delete"><a href="#">Les coccinelles en mouvement, compter</a></li>
                <li data-icon="delete"><a href="#">Le plus lourd, le plus léger</a></li>
            </ul>
        </div>
        <div data-role="collapsible">
            <h3>Divers</h3>
            <ul data-role="listview" data-inset="false">
                <li data-icon="delete"><a href="#">Aire d'évolution de l'illustration</a></li>
                <li data-icon="delete"><a href="#">Associer deux images</a></li>
                <li data-icon="delete"><a href="#">Aligner quatre images</a></li>
                <li data-icon="delete"><a href="#">Aligner deux décors</a></li>
                <li data-icon="delete"><a href="#">Coloriages divers</a></li>
                <li data-icon="delete"><a href="#">Les formes et les couleurs</a></li>
                <li data-icon="delete"><a href="#">Le plus grand le plus petit</a></li>
                <li data-icon="delete"><a href="#">Les labyrinthes</a></li>
                <li data-icon="delete"><a href="#">Le roi bebert et ses chapeaux</a></li>
                <li data-icon="delete"><a href="#">Les dominos</a></li>
                <li data-icon="delete"><a href="#">L'intrus à découvrir</a></li>
                <li data-icon="delete"><a href="#">Les puzzles à compléter</a></li>
                <li data-icon="delete"><a href="#">Les saisons (continent Européen)</a></li>
                <li data-icon="delete"><a href="#">Tableaux simple et double entrée (s1)</a></li>
                <li data-icon="delete"><a href="#">Tableaux divers (s2)</a></li>
                <li data-icon="delete"><a href="#">Tableaux divers (s3)</a></li>
                <li data-icon="delete"><a href="#">Recopier à l'identique</a></li>
                <li data-icon="delete"><a href="#">Suite à compléter
                <li data-icon="delete"><a href="#">Suite placer l'élément au bon endroit</a></li>
                <li data-icon="delete"><a href="#">Suite memory (terminer le collier)</a></li>
            </ul>
        </div>
    </div>

</div>

<div data-role="footer" class="ui-bar"
     style="position: absolute; bottom: 0; width: 100%; margin-left:auto; margin-right:auto; align:center; text-align:center;">
    <div data-role="controlgroup" data-type="horizontal">
        <a href="#">About</a>
    </div>
</div>