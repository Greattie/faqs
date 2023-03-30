const btn = document.querySelectorAll(".btn");
const ans = document.querySelectorAll(".ans");

// btn.forEach(function(item){
//     item.addEventListener('click', function(){
//         ans.forEach(function(answer){
//             if(answer.classList.contains('show')){
//             answer.classList.remove('show')
//             }
//             else{
//                 answer.classList.add('show')
//             }
//         })
//     })
// })

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    console.log(btn[i]);
    for (let j = 0; j < ans.length; j++) {
      console.log(ans[j]);
      if (ans.classList.contains("show")) {
        ans.classList.remove("show");
      } else {
        ans.classList.add("show");
      }
    }
  });

  // buttons.addEventListener('click', function(){
  //     for(let j =0; j<ans.length; j++){
  //         console.log(ans[j])
  //     }
  // })
}
