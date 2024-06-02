function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

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

function showWordById(index) {
    var resultDiv = document.getElementById('main-container');

    loadXML('dictionary.xml', function(dictionaryXML) {
        loadXML('source_dic.xml', function(sourceXML) {
            var tags = dictionaryXML.getElementsByTagName('a');
            if (index < 0 || index >= tags.length) {
                resultDiv.innerHTML = "<p>Índice fora do intervalo.</p>";
                return;
            }

            var tag = tags[index];
            var wordElement = tag.getElementsByTagName('word')[0];
            var classElement = tag.getElementsByTagName('class')[0];
            var meaningElement = tag.getElementsByTagName('meaning')[0];
            var sourceElement = tag.getElementsByTagName('source')[0];

            var contentDiv = document.createElement('div');
            contentDiv.className = 'main-content';

            var title = document.createElement('h3');
            title.className = 'main-title';
            title.textContent = 'Palavra em destaque';
            contentDiv.appendChild(title);

            var wordFor = document.createElement('p');
            wordFor.className = 'word';
            wordFor.textContent = wordElement.textContent;
            contentDiv.appendChild(wordFor);

            var classFor = document.createElement('p');
            classFor.className = 'clazz';
            classFor.innerHTML = `<i>${classElement.textContent}</i>`;
            contentDiv.appendChild(classFor);

            var meaningFor = document.createElement('p');
            meaningFor.className = 'meaning';
            var meaningText = meaningElement.innerHTML
                .replace(/&amp;#xA;/g, "&")
                .replace(/<tp>(.*?)<\/tp>/g, "<b>$1</b>")
                .replace(/\n/g, "<br>");
            meaningFor.innerHTML = meaningText;
            contentDiv.appendChild(meaningFor);

            var sourceFor = document.createElement('p');
            sourceFor.className = 'source';
            var sources = [];
            var sourceNumbers = sourceElement.textContent.split(',');
            sourceNumbers.forEach(function(number) {
                var srcId = parseInt(number.trim(), 10);
                var srcTags = sourceXML.getElementsByTagName('entry');
                
                Array.from(srcTags).forEach(function(srcTag) {
                    var srcIdElement = srcTag.getElementsByTagName('id')[0];
                    
                    if (parseInt(srcIdElement.textContent, 10) === srcId) {
                        var srcSrcElement = srcTag.getElementsByTagName('src')[0];
                        sources.push(srcSrcElement.textContent);
                    }
                });
            });
            sourceFor.innerHTML = `Fontes:<br>${sources.join('<br>')}`;
            contentDiv.appendChild(sourceFor);

            resultDiv.appendChild(contentDiv);
        });
    });
}

function showPhraseById(index) {
    var resultDiv = document.getElementById('main-container');

    loadXML('phrases.xml', function(phrasesXML) {
        var tags = phrasesXML.getElementsByTagName('entry');
        
        if (index < 0 || index >= tags.length) {
            resultDiv.innerHTML = "<p>Índice fora do intervalo.</p>";
            return;
        }

        var tag = tags[index];
        var tpElement = tag.getElementsByTagName('tp')[0];
        var ptElement = tag.getElementsByTagName('pt')[0];

        var contentDiv = document.createElement('div');
        contentDiv.className = 'main-content';

        var title = document.createElement('h3');
        title.className = 'main-title';
        title.textContent = 'Aprenda um frase';
        contentDiv.appendChild(title);

        var phraseTp = document.createElement('p');
        phraseTp.className = 'word';
        phraseTp.textContent = tpElement.textContent;
        contentDiv.appendChild(phraseTp);

        var phrasePt = document.createElement('p');
        phrasePt.className = 'meaning';
        phrasePt.innerHTML = `<i>${ptElement.textContent}</i>`;
        contentDiv.appendChild(phrasePt);

        resultDiv.appendChild(contentDiv);
    });
}

function showMainContent() {
    var randomNumberWord = getRandomNumber(0, 112);
    var randomNumberPhrase = getRandomNumber(0, 116);
    
    showWordById(randomNumberWord);
    showPhraseById(randomNumberPhrase);
}

showMainContent();