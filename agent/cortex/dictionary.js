/* functions related to the dictionary */ 

function loadXML(filename, callback) {
    var xmlhttp = new XMLHttpRequest();

    //var pathToXML = 'https://tupiantigo.github.io/agent/memory/' + filename;
    var pathToXML = '../../agent/memory/' + filename; 

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            callback(xmlhttp.responseXML);
        }
    };

    xmlhttp.open("GET", pathToXML, true);
    xmlhttp.send();
}

function searchWord() {
    var inputElement = document.getElementById('wordInput');
    var word = inputElement.value.toLowerCase();
    var resultDiv = document.getElementById('result');
    var errorMessage = "";

    var card = document.querySelector('.dictionary-card');
    card.classList.add('dictionary-card-active');

    if (word === "") {
        errorMessage = 
        `
        <div class='dictionary-card not-found'>
            <p>Algo deu errado:</p>
            <ol>
                <li>1) A entrada não pode estar vazia.</li>
            </ol>
        </div>
        `;
        resultDiv.innerHTML = errorMessage;
        return;
    }

    loadXML('dictionary.xml', function(dictionaryXML) {
        loadXML('source_dic.xml', function(sourceXML) {
            var found = false;
            resultDiv.innerHTML = "";

            var tags = dictionaryXML.getElementsByTagName('a');

            for (var i = 0; i < tags.length; i++) {
                var idElement = tags[i].getElementsByTagName('id')[0];
                var wordElement = tags[i].getElementsByTagName('word')[0];
                var classElement = tags[i].getElementsByTagName('class')[0];
                var meaningElement = tags[i].getElementsByTagName('meaning')[0];
                var sourceElement = tags[i].getElementsByTagName('source')[0];

                var dictionaryWord = wordElement.textContent.toLowerCase();

                if (dictionaryWord === word && word !== "") {
                    found = true;

                    resultDiv.innerHTML += "<p class='word'>" + word + "</p>";
                    resultDiv.innerHTML += "<p class='clazz'><i>" + classElement.textContent + "</i></p>";
                    
                    var meaningText = meaningElement.innerHTML
                        .replace(/&amp;#xA;/g, "\n")
                        .replace(/<tp>(.*?)<\/tp>/g, "<b>$1</b>"); 
                    var meaningWithBreaks = meaningText
                        .replace(/\n/g, "<br>");
                    resultDiv.innerHTML += "<p class='meaning'>" + meaningWithBreaks + "</p>";

                    var sourceText = sourceElement.textContent;
                    var sourceNumbers = sourceText.split(',');
                    var sources = [];

                    sourceNumbers.forEach(function(number) {
                        var srcId = parseInt(number.trim());
                        var srcTags = sourceXML.getElementsByTagName('entry');
                        
                        for (var j = 0; j < srcTags.length; j++) {
                            var srcIdElement = srcTags[j].getElementsByTagName('id')[0];
                            var srcSrcElement = srcTags[j].getElementsByTagName('src')[0];
                            
                            if (parseInt(srcIdElement.textContent) === srcId) {
                                sources.push(srcSrcElement.textContent);
                                break;
                            }
                        }
                    });

                    var sourceWithBreaks = sources.join('<br>');
                    resultDiv.innerHTML += "<p class='source'>Fontes:<br>" + sourceWithBreaks + "</p>";
                }
            }

            if (!found) {
                errorMessage = 
                `
                <div class='dictionary-card not-found'>
                    <p>Algo deu errado:</p>
                    <ol>
                        <li>1) A palavra '<b>${word}</b>' não foi encontrada no dicionário.</li>
                        <li>2) A palavra está com a grafia incorreta. Verifique e corrija!</li>
                    </ol>
                </div>
                `;
                resultDiv.innerHTML = errorMessage;
            }
        });
    });
}