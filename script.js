function displayDescription(cardElement, brand) {
    var descriptions = {
        "chanel": "Chanel, fondée par Gabrielle 'Coco' Chanel en 1910, est une maison de haute couture synonyme d'élégance et d'innovation. Avec son célèbre parfum Chanel No. 5, ses tailleurs en tweed et ses sacs à main classiques, comme le célèbre 2.55, Chanel a révolutionné la manière dont les femmes s'habillent en leur offrant une liberté de mouvement tout en préservant une silhouette chic et féminine. Aujourd'hui, sous la direction créative de Virginie Viard, Chanel continue de repousser les limites de la mode en combinant tradition et modernité.",
        "dior": "Dior est une icône de la mode française, créée en 1946 par le designer Christian Dior. La maison a immédiatement pris d'assaut le monde de la haute couture avec la collection 'New Look' qui offrait une vision opulente et féminine après les années de privations dues à la guerre. Célèbre pour ses silhouettes voluptueuses et ses lignes structurées, Dior reste à l'avant-garde de la mode, célèbrant le luxe et le raffinement avec une touche contemporaine apportée par son actuel directeur artistique, Maria Grazia Chiuri.",
        "lv": "Louis Vuitton, fondée en 1854, a commencé comme un fabricant de malles de voyage et est devenue l'une des marques de luxe les plus reconnues au monde. Célèbre pour ses bagages, ses sacs à main monogrammés et ses accessoires de maroquinerie, Louis Vuitton est synonyme de l'art de voyager avec style. La marque s'est diversifiée dans le prêt-à-porter et les montres sous la direction artistique de figures telles que Marc Jacobs et actuellement Nicolas Ghesquière, qui continuent de perpétuer l'héritage de l'innovation et du luxe de la maison.",
        "margiela": "Maison Margiela, fondée par Martin Margiela en 1988, est connue pour son approche conceptuelle de la mode et son utilisation de la déconstruction et de la transformation. Les collections de la marque sont réputées pour remettre en question les normes de la beauté et de la mode en dévoilant les structures et les processus sous-jacents à la confection de vêtements. Aujourd'hui, sous la direction créative de John Galliano, la marque continue d'explorer les frontières de l'expression créative avec des créations souvent décrites comme des œuvres d'art avant-gardistes."
    }; // Ici, j'ai ajouté la fermeture de l'objet descriptions.

    var descriptionElements = document.querySelectorAll('.card-description');
    descriptionElements.forEach(function(desc) {
        desc.style.display = 'none'; // Cache toutes les descriptions.
        desc.textContent = ''; // Réinitialise le texte des descriptions.
    });

    var descriptionElement = cardElement.querySelector('.card-description');
    descriptionElement.textContent = descriptions[brand];
    descriptionElement.style.display = 'block'; // Montre la description pour la carte cliquée.
}