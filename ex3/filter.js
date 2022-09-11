function filterCategory(FilterSelection,filterBy,filterButton){
    let recipeCards = Array.from(document.getElementsByClassName("RecipeCardWrapper"));
    //console.log(receipeCards);
    for(let listItem of recipeCards){
       // console.log(listItem.dataset.author)
       if(listItem.dataset[filterBy]===FilterSelection){
        listItem.style.display="flex";
       }else{
        listItem.style.display="none";
       }
    }
// change the class of the clicked buttom
//find all the filter selection buttons
let filterButtons = Array.from(document.getElementsByClassName("FilterSelector"));
//each have "active catergoty"
for(let selector of filterButtons){
    selector.classList.remove("ActiveCategory");
}
    filterButton.classList.add("ActiveCategory");
}

//
function AllCategory(){
    let recipeCards = Array.from(document.getElementsByClassName("RecipeCardWrapper"));
    for(let listItem of recipeCards){
       listItem.style.display="flex";
       }
}