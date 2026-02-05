//mail info
//valid mail
//appropriate msg info
//gioco di dadi

/* invited list */

const list = ['Marco@gmail.com','Antonio@gmail.com','Giuseppe@gmail.com','Francesco@gmail.com','Flavio@gmail.com','Mirko@gmail.com'];
/* console.log(list); */

let mail = prompt('inserisci la tua mail')
console.log(mail)

let message = ('messaggio di invito')

for(i=0;i<list.length;i++){
    const invitati = list[i];
    if (mail==invitati)
        message = 'sei stato invitato'
    else 
        message = 'non sei stato invitato'

}
console.log(message)
/* {if(list.includes(mail)) 
    message = 'sei stato invitato'
    else
    message = 'non sei stato invitato'

} */


/* dices game */