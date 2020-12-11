const btns=document.querySelectorAll(".btn");
const content=document.querySelectorAll(".content");
const Container=document.querySelector(".content-container");
Container.addEventListener("click",e=>{
   const id= e.target.dataset.id;
   if(id)
   {
       btns.forEach(btn=>{
            btn.classList.remove("active");
            e.target.classList.add("active");
            });
       content.forEach(con=>{
           con.classList.remove("active");
          });
          const element=document.getElementById(id);
          element.classList.add("active");

   }
});