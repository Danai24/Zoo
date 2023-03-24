//point
const pointBox = document.querySelector("#score");

//mad
const dragFoodBox = document.querySelectorAll(".foodcontainer article");

//animal
const targetAnimal = document.querySelectorAll("#animals div"); 

//food
const foodBox = document.querySelector(".foodcontainer");

//reload
const reload= document.querySelector("#load")


// EVENTS på elementerne

dragFoodBox.forEach(function(element){
    element.addEventListener("dragstart", startDrag)
})

targetAnimal.forEach(function(element){
    element.addEventListener("dragover", cancelDefault);
    element.addEventListener("drop", dropMad);
})

//FUNCTION
function startDrag(event){
    console.log(this.dataset.food);
    event.dataTransfer.setData("foodId", this.id)
    event.dataTransfer.setData("foodName", this.dataset.food)
}

function cancelDefault(event){
    event.preventDefault();
    // Kan bruges til at "aflyse" eventet    
}

function dropMad(event){
    console.log("Der er deoppet mad"); 

    let madId = event.dataTransfer.getData("foodId")
    let madType = event.dataTransfer.getData("foodName")

    if (madType == this.dataset.food){
        let heart = document.createTextNode("😍");
        this.appendChild(heart);
        pointBox.innerHTML = parseInt(pointBox.innerHTML) + 100;
        //
        foodBox.removeChild(document.querySelector("#"+madId));
    } else{
        //
        alert("😡")
        let unlike = document.createTextNode("😡");
        this.appendChild(unlike);
        //
        pointBox.innerHTML = parseInt(pointBox.innerHTML) - 100;
        
    }
}

reload.addEventListener("click", function(){
    location.reload();
});

console.log("Reload");
