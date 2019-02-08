function getInitials(name){
    name = name.split(' ');
    let initials = name[0][0].toUpperCase() + ' ' + name[1][0].toUpperCase();
    console.log(initials);
}

const name = 'Steve Brian';
window.onload = getInitials(name);
