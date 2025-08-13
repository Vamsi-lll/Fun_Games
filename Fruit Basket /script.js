let fruits=["🍍","🥭","🍉","🍈","🍇","🥝","🍎"]

let inheight=window.innerHeight
let inwidth=window.innerWidth
console.info(inheight,inwidth)

document.addEventListener('DOMContentLoaded',()=>{
    setInterval(()=>{

        let spn=document.createElement('span')
        spn.classList.add('span')
        spn.textContent=fruits[Math.floor(Math.random()*fruits.length)]
        spn.style.left=Math.floor(Math.random()*innerWidth)+"px";
        document.body.appendChild(spn)
        setInterval(()=>{
            spn.remove()
        },5000)

    },1000)
})
