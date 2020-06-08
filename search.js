function search() {
    const btnSearch = document.getElementById('btn');

    btnSearch.addEventListener('click', seachArticle);

    function seachArticle() {
        const articleWrap = document.querySelectorAll('.gallery li');
        const inputValue = document.getElementById('saerchInput').value;
        let articlesInfo = [];
        let curArticleInfo = {};

        articleWrap.forEach(element => {
            for (let i = 0; i < element.childNodes.length; i++) {
                let currentEl = element.childNodes[i];
                if (currentEl.nodeName.toLowerCase() === 'img') {
                    curArticleInfo['img'] = {
                        'src': currentEl.src,
                        'alt': currentEl.alt
                    };
                } else if (currentEl.nodeName.toLowerCase() === 'span') {
                    curArticleInfo['span'] = currentEl.textContent;
                } else if (currentEl.nodeName.toLowerCase() === 'h2') {
                    curArticleInfo['h2'] = currentEl.textContent;
                } else if (currentEl.nodeName.toLowerCase() === 'a') {
                    curArticleInfo['a'] = {
                        'href': currentEl.href,
                        'text': currentEl.text
                    };
                }
            }

            articlesInfo.push(curArticleInfo);
            curArticleInfo = {};
        });

        const spanCount = articlesInfo
            .filter(art => art['span'] === inputValue)
            .length;

        if (spanCount !== 0) {
            const allArticles = document.querySelector('.gallery ul');
            while (allArticles.firstChild) {
                allArticles.removeChild(allArticles.firstChild);
            }

            articlesInfo
                .filter(a => a['span'] === inputValue)
                .forEach(a => {
                    const liArticleWrap = document.createElement('li');

                    const imgArticle = document.createElement('img');
                    imgArticle.src = a['img'].src;
                    imgArticle.alt = a['img'].alt;

                    const spanArticle = document.createElement('span');
                    spanArticle.textContent = a['span'];

                    const h2Article = document.createElement('h2');
                    h2Article.textContent = a['h2'];

                    const aArticle = document.createElement('a');
                    aArticle.href = a['a'].href;
                    aArticle.text = a['a'].text;

                    liArticleWrap.appendChild(imgArticle);
                    liArticleWrap.appendChild(spanArticle);
                    liArticleWrap.appendChild(h2Article);
                    liArticleWrap.appendChild(aArticle);

                    allArticles.appendChild(liArticleWrap);
                });
        }
    }
}


search();