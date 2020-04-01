const player = document.getElementById("player")

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }

  function move(factor){
      let {left:Xplayer , top:Yplayer} = getOffset(player)
      Xplayer+=(6.7*factor)
      return `${Xplayer}px`
  }

window.addEventListener("keydown" ,function(event){
    if(event.keyCode === 65){
        // left
        player.style.left=move(-1)
    } else if(event.keyCode === 68){
        // right
        player.style.left=move(1)
    }
}
)