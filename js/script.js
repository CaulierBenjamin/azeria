elements =[
    {
        "id":0,
        "titre": "mario",
        "description": "jeu video",
        "image":"https://via.placeholder.com/940x540"
    },
    {
        "id":1,
        "titre":"super mario",
        "description" : "jeu cideo",
        "image":"https://via.placeholder.com/940x540"
    },
    {
        "id":2,
        "titre":"super mario2",
        "description" : "jeu cideo2",
        "image":"https://via.placeholder.com/940x540"
    },
    {
        "id":3,
        "titre": "mario",
        "description": "jeu video",
        "image":"https://via.placeholder.com/940x540"
    },
    {
        "id":4,
        "titre":"super mario",
        "description" : "jeu cideo",
        "image":"https://via.placeholder.com/940x540"
    },
    {
        "id":5,
        "titre":"super mario2",
        "description" : "jeu cideo2",
        "image":"https://via.placeholder.com/940x540"
    }
];

const creationcard = document.getElementById("creationcard")

function ajout(elements) {

    const card = document.createElement("card")
    card.classList.add("card");
    card.classList.add("mb-3");

    const card_row = document.createElement("div");
    card_row.classList.add("row");
    card_row.classList.add("no-gutters");

    const card_col = document.createElement("div");
    card_col.classList.add("col-md-6");

    const card_col2 = document.createElement("div");
    card_col2.classList.add("col-md-6");

    const img =document.createElement("img");
    img.classList.add("card-img")

    const card_body = document.createElement("div");
    card_body.classList.add("card-body");

    const h5 = document.createElement("h5");
    h5.classList.add("card-title");

    const p= document.createElement("p");
    p.classList.add("card-text");

    h5.innerText=elements.titre;
    p.innerText=elements.description;


    card_body.appendChild(h5);
    card_body.appendChild(p);
    //p.innerText=elements.id;
    //card_body.appendChild(p);
    card_col.appendChild(card_body);


    img.src=elements.image;
    card_col2.appendChild(img);

    if((elements.id % 2) ===0)
    {
        card_row.appendChild(card_col2);
        card_row.appendChild(card_col);

    }
    else{
        card_row.appendChild(card_col);
        card_row.appendChild(card_col2);

    }



    card.appendChild(card_row);

    creationcard.appendChild(card);

}
elements.forEach(ajout)
