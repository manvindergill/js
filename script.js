var h5 = document.querySelector("h5")

var btn = document.querySelector("#add")

check = 0

btn.addEventListener('click', function(){
    if(check==0){
        h5.innerHTML = 'Friends'
        h5.style.color = 'green'
        btn.innerHTML = 'remove friend'
        check = 1
    }else{
        h5.innerHTML = 'removed'
        h5.style.color = 'red'
        btn.innerHTML = 'add friend'
        check = 0
    }
})

