const modalDialogDelivery = document.querySelector(".donde-comprar-delivery");
const modalDialogTienda = document.querySelector(".donde-comprar-tienda");

document.querySelectorAll(".close-btn").forEach(button => {
    button.addEventListener("click", () => {
        modalDialogDelivery.close();
        modalDialogTienda.close();
    });
});

document.querySelectorAll(".share-btn-tienda").forEach(button => {
    button.addEventListener("click", ()=>{
        modalDialogDelivery.close();
        modalDialogTienda.showModal();
    })
})
document.querySelectorAll(".share-btn-delivery").forEach(button => {
    button.addEventListener("click", ()=>{
        modalDialogTienda.close();
        modalDialogDelivery.showModal();
    })
})

document.querySelector(".share-modal").addEventListener("click", ()=>{
    Math.random() < 0.5 ? modalDialogTienda.showModal() : modalDialogDelivery.showModal();
})

// const AllTabsItems = document.querySelectorAll(".tabs-item");

// AllTabsItems.forEach((e) =>{
//     e.addEventListener("click", () =>{
//         AllTabsItems.forEach((f) =>{
//             const divcheck_e = e.querySelector(".tabs-check");
//             const divcheckId = divcheck_e.id;
//             AllTabsItems.forEach((g)=>{
//                 const divcheck_g = g.querySelector(".tabs-check");
//                 if(divcheckId == divcheck_g.id){
                    
//                     if(divcheck_g.classList.contains("check-active")){
//                         divcheck_g.classList.remove("check-active");
//                     }else{
//                         divcheck_g.classList.add("check-active");
//                     }
//                 }else{
//                     divcheck_g.classList.remove("check-active");
//                 }
//             })
            
//         });
//     })
// });