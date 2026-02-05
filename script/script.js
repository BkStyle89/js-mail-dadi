//mail info
//valid mail
//appropriate msg info
//gioco di dadi

/* invited list */

const list = ['Marco@gmail.com','Antonio@gmail.com','Giuseppe@gmail.com','Francesco@gmail.com','Flavio@gmail.com','Mirko@gmail.com'];
/* console.log(list); */

let mail = prompt('inserisci la tua mail')
console.log(mail)

let found = false

for(i=0;i<list.length;i++){
    
    const invitati = list[i];
    if (invitati==mail){
        found = true
    }

}


if (found){
    console.log('sei stato invitato')
}
else {
    console.log('non sei stato invitato')
}
/* {if(list.includes(mail)) 
    message = 'sei stato invitato'
    else
    message = 'non sei stato invitato'

} */


/* dices game */