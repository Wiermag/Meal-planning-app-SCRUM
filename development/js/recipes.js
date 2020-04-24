//ADD NEW RECIPES: 

const recipeName = document.querySelector(".recipe-name-value"); 
const recipeDesc = document.querySelector(".recipe-description-value");
const recipeButton = document.querySelector(".recipe-button");
console.log(localStorage)

recipeButton.addEventListener("click",function(e){
 
  if(recipeName.value==0||recipeDesc.value==0){
    alert("Proszę uzupełnij dane :)")
  } else {

   let newRecipe = {
        id: 0,
        title: null,
        description: null,
        components: [],
        instructions: []
    }

    const Recipe = () => {
        newRecipe.id = 0;
        newRecipe.title = recipeName.value;
        newRecipe.description = recipeDesc.value;
        newRecipe.components.push(componentBox.innerText);
        newRecipe.instructions.push(instructionBox.innerText);
    }

    const saveRecipe = (newRecipe) => {
        let recipes = null;
        if (!localStorage.getItem("recipes")) {
            recipes = [];
            recipes.push(newRecipe);
            newRecipe.id = recipes.length;
        } else {
            recipes = JSON.parse(localStorage.getItem("recipes"));
            recipes.push(newRecipe);
            newRecipe.id = recipes.length;
        }
        localStorage.setItem('recipes', JSON.stringify(recipes));
    }

    Recipe();
    saveRecipe(newRecipe);

    alert("Przepis został zapisany !")
    e.preventDefault();
    window.location = "app.html"
}
});

//ADD INSTRUCTION & COMPONENTS:
const instructionValue = document.querySelector(".instruction-value");
const instructionBox = document.querySelector(".instruction-value-text ul");
const addInstructionButton = document.querySelector(".instruction-plus");

const componentValue = document.querySelector(".component-value");
const componentBox = document.querySelector(".component-value-text");
const addComponentButton = document.querySelector(".component-plus");


let num = 0; //Kolejność po usunięciu jest zła...
icons = '';
icons += '<i type="button" class="far fa-edit"></i> <i type="button" class="fas fa-trash-alt"></i>';

addInstructionButton.addEventListener("click",function () {
    num ++
    const liInstruction = document.createElement("li");
    liInstruction.style.listStyleType = "none";
    liInstruction.innerHTML = num  + ". " + instructionValue.value + " " + icons;
    instructionBox.appendChild(liInstruction);
    const trash = liInstruction.querySelector(".fa-trash-alt");
    const edit = liInstruction.querySelector(".fa-edit");

      //button kosz:
      trash.addEventListener('click', function() {  
        this.parentElement.parentElement.removeChild(this.parentElement);
      });
      //button edit:
      edit.addEventListener("click", function () {
        let editBox = document.createElement('input');
        editBox.setAttribute("class", "editBox");
        this.parentElement.appendChild(editBox);
    
      //po utworzeniu editBox :
        editBox.addEventListener('blur', function() {
          editBox.parentElement.innerHTML = num + ". " + this.value + " " + icons; //Za drugim razem nie działają ikony.
      });
    })
  });
 
       
addComponentButton.addEventListener("click",() => {
    const liComponent = document.createElement("li");
    liComponent.innerHTML =  componentValue.value + " " + icons;
    componentBox.appendChild(liComponent);
    const trash = liComponent.querySelector(".fa-trash-alt");
    const edit = liComponent.querySelector(".fa-edit");

    //button trash:
    trash.addEventListener('click', function() {  
      this.parentElement.parentElement.removeChild(this.parentElement);
    });
    //button edit:
    edit.addEventListener("click", function () {
      let editBox = document.createElement('input');
      this.parentElement.appendChild(editBox);
  
    //po utworzeniu editBox - zmieniamy wartość:
      editBox.addEventListener('blur', function() {
        editBox.parentElement.innerHTML = this.value + " " + icons; //Za drugim razem nie działają ikony.
        });
    });
});



