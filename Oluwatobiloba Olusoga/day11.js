let ghv;
let row = 5;
let col = 4;
let tabili = document.getElementById('gitHubUsers');

const fetchFromApi = async () => {
    /*
        i reduced the number of entries from 100 to 10, 
        so as not to hit the maximum limit for github search api,
        culmunatively when later on searching for number of repos
    */
    const responsev = await fetch('https://api.github.com/search/users?q=location:nigeria&per_page=10');
    ghv = await responsev.json();
    let ghvItem = ghv.items;
    ghvItem.forEach(getNumberofRepos);
    ghv.items = ghvItem;
    let repoGetInterval = setInterval(function() {
        let j = 0;
        for (i = 0; i < ghv.items.length; i++){
            if (typeof ghv.items[i].no_of_repos !== 'undefined') {
                j+= 1;
            }
        }
        if (ghv.items.length == j) {
            ghv.items.sort(compareRepos);
            createTable();
            clearInterval(repoGetInterval);
        }
    }, 100); // check every 100ms
    
}

const getNumberofRepos = async (element) => {
    let noOfRepos = 0;
    let iteration = 1;
    let link = element.repos_url + '?per_page=100&page=';
    while(true){
        let response = await fetch(link + iteration.toString());
        response = await response.json();
        noOfRepos += response.length;
        if(response.length < 100){
            element.no_of_repos = noOfRepos;
            break;
        }
        else{
            iteration += 1;
        }
    }
}
  
function compareRepos(a, b) {
    const repoA = a.no_of_repos;
    const repoB = b.no_of_repos;

    let comparison = 0;
    if (repoA > repoB) {
        comparison = 1;
    } else if (repoA < repoB) {
        comparison = -1;
    }
    return comparison * -1;
}

function createTable(){
    for (var i = 0; i < row; i++){
        var tr = document.createElement('tr');
        for (j = 0; j < col; j++){
            let text;
            let td = document.createElement('td');
            if (j == 0){
                text = document.createTextNode(i + 1);
                td.appendChild(text);
            }
            else if(j == 1){
                text = document.createTextNode(ghv.items[i].login); 
                td.appendChild(text);
            }
            else if (j == 2){
                let newlink = document.createElement('a');
                newlink.setAttribute('href', ghv.items[i].html_url);
                text = document.createTextNode('Check out user on GitHub');
                newlink.appendChild(text);
                td.appendChild(newlink);
            }
            else if (j == 3){
                text = document.createTextNode(ghv.items[i].no_of_repos); 
                td.appendChild(text);
            }
            tr.appendChild(td);
        }
        tabili.appendChild(tr);
      }
}

fetchFromApi();

  
 