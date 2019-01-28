let ghv;
let row = 100;
let col = 3;
// let tabili = document.getElementById('gitHubUsers');

const fetchFromApi = async () => {
    const responsev = await fetch('https://api.github.com/search/users?q=location%3Anigeria&per_page=100');
    ghv = await responsev.json();
    createTable();
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
            else{
                td.setAttribute('onclick', "show_modal(this)");
                td.setAttribute('id', i.toString());
                let newlink = document.createElement('a');
                newlink.setAttribute('href', '#');
                
                text = document.createTextNode('Check out user details');
                newlink.appendChild(text);
                td.appendChild(newlink);
            }
            tr.appendChild(td);
        }
        document.getElementById('gitHubUsers').appendChild(tr);
      }
}

function filterUsers() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("filterUsers");
    filter = input.value.toUpperCase();
    table = document.getElementById("gitHubUsers");
    tr = table.getElementsByTagName("tr");
  
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }


}

function show_modal(td){
    high_d = td.id;
    const details = "User Details";
    const user_name = "User Name: ";
    const user_iD = "User ID: ";

    let index= parseInt(td.id, 10);
    document.getElementById('info').children[0].innerHTML = details;
    document.getElementById('info').children[1].innerHTML = user_name + ghv.items[index].login; 
    document.getElementById('info').children[2].innerHTML = user_iD + ghv.items[index].id;
    let newlink = document.createElement('a')
    newlink.setAttribute('href', ghv.items[index].html_url)
    newlink.setAttribute('target', '_blank');
    let text = document.createTextNode('Check out user on github');
    newlink.appendChild(text);
    document.getElementById('info').children[3].innerHTML = '';
    document.getElementById('info').children[3].appendChild(newlink);

    document.getElementById('my-modal').style.display = 'block';
}


// When the user clicks on <span> (x), close the modal
document.getElementById('close-modal').addEventListener('click', function(evt){
    evt.preventDefault;
    document.getElementById('my-modal').style.display= "none";
});

document.onkeydown = function(evt) {
evt = evt || window.event;
if (evt.keyCode == 27) {
    document.getElementById('close-modal').click();
}
};

fetchFromApi();
