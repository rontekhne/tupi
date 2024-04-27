function showAboutContent() {
    var content = 
    `
    <div class="about-content">
        <p class="indent">
            Esta aplicação tem o intuito de fornecer ferramentas
            digitais para o apoio ao aprendizado da linguagem Tupi Antigo. 
            Inclui-se um dicionário. Futuramente será 
            desenvolvido um tradutor. 
        </p>
        <p class="indent">
            A língua tupi, ou tupi antigo, foi a língua falada 
            pelos povos tupis e por grande parte dos colonizadores 
            que povoavam o litoral do Brasil nos séculos XVI e 
            XVII. "É a língua indígena clássica do Brasil e a 
            que teve mais importância na construção espiritual 
            e cultural do país."
        </p>
        <p class="indent">
            Hoje uma língua morta, o tupi foi por vezes mais falado 
            que o português, sendo por isso considerada também 
            como "a língua do Brasil dos primeiros séculos". 
            Seu registro foi feito sobretudo por padres jesuítas, 
            como José de Anchieta, mas também por viajantes, 
            como Hans Staden e Jean de Léry. Graças a esse 
            registro, preservou-se o conhecimento da língua. 
            Hoje o tupi antigo é a língua indígena brasileira 
            mais bem conhecida, mesmo levando-se em conta as 
            línguas vivas. Contribui para esse fato a rica 
            literatura tupi, que conta com peças de teatro, 
            poemas, e catecismos.
        </p>
        <p class="indent">
            Entre as línguas indígenas, o tupi foi a que mais 
            legou termos ao português brasileiro. Entre os 
            inúmeros tupinismos do português falado no Brasil, 
            é possível citar: caatinga, caju, mingau, pereba 
            e pipoca. Entre os topônimos, temos Indaiatuba, 
            Itaquaquecetuba, Jacareí, Sergipe, Pindamonhangaba 
            e muitos outros. Os tupinismos são particularmente 
            numerosos em se tratando de animais e plantas, 
            como pindoba, piranha, arara, maracujá, pitanga, 
            jaguatirica, tamanduá, pitanga. A prevalência 
            do tupi na formação do país levou o tupinólogo e 
            padre Lemos Barbosa (1956) a afirmar que "o seu 
            conhecimento, sequer superficial, faz parte da 
            cultura nacional".
        </p>
        <p class="indent">
            O tupi pertence à família linguística tupi-guarani, 
            que por sua vez pertence ao tronco tupi. A família 
            tupi-guarani é composta por 21 línguas diferentes, 
            entre elas o guarani moderno, que possui grandes 
            semelhanças fonológicas e gramaticais com o tupi. 
            Embora o tupi antigo tenha deixado se ser falado 
            no final do século XVII, ele deu origem ao nheengatu, 
            também chamado de língua geral amazônica, ou ainda 
            tupi moderno. Gramaticalmente, o tupi apresenta 
            propriedades peculiares, como: ausência de flexão 
            de gênero e de número; conjugação verbal no início 
            da palavra, não no final (aker, ereker, oker: 
            durmo, dormes, dorme etc); a existência de um nós 
            exclusivo (oré), que exclui o ouvinte, e outro 
            inclusivo (îandé), que o inclui; numerais que vão 
            apenas de um a quatro; entre outras. 
        </p>
    </div>
    <div class="about-content">
        <p><i class="fa fa-envelope" aria-hidden="true"></i> rontekhne@gmail.com</p>
        <p><i class="fa fa-wrench" aria-hidden="true"></i><a class="rontekhne-link" href="https://rontekhne.github.io" target="_blank"> RonTekhne</a>, 2024</p>
    </div>
    `;

    var div = document.getElementById("about-content");
    div.innerHTML = content;
}

showAboutContent();
