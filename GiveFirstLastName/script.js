let fullName = window.prompt("Your full name:");

let spaceIndex = fullName.indexOf(' ');

if(spaceIndex>0){
    let firstName = fullName.slice(0,spaceIndex);
    let lastName = fullName.slice(spaceIndex+1);
    window.alert(`Hello ${firstName} ${lastName}`);
}
else{
    window.alert(`Hello ${fullName}`);
}

  