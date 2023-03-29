const btn = document.querySelectorAll('.btn')
const ans= document.querySelectorAll('.ans')

btn.forEach(function(item){
    item.addEventListener('click', function(){
        ans.forEach(function(answer){
            if(answer.classList.contains('show')){
            answer.classList.remove('show')
            }
            else{
                answer.classList.add('show')
            }
        })
    })
})
// btn.addEventListener('click', function(){
//     if(ans.classList.contains('show')){
//         ans.classList.remove('show')
//     }
//     else{
//         ans.classList.add('show')
//     }
// })