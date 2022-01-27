
let btn = document.getElementsByClassName("category-item");

for (let i=0; i < btn.length; i++) {
    btn[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("focus");
        if (current.length !=0) {
            current[0].className = current[0].className.replace(" focus", "");
        }
        this.className += " focus";
      });
}

