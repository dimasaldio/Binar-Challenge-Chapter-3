function gantiWarna1(){
    const satu = document.getElementById('satu');
    const tulisan = document.getElementsByClassName('tulisan')[0];

      if (satu.style.backgroundColor==='rgba(0, 0, 0, 0)') {
        satu.style.backgroundColor='rgba(255,255,255,1)';
        tulisan.style.display='block';
      } else {
        satu.style.backgroundColor='rgba(0, 0, 0, 0)';
        tulisan.style.display='none';
      }
}

function gantiWarna2(){
    const dua = document.getElementById('dua');
    const tulisan = document.getElementsByClassName('tulisan')[1];

      if (dua.style.backgroundColor==='rgba(0, 0, 0, 0)') {
        dua.style.backgroundColor='rgba(255,255,255,1)';
        tulisan.style.display='block';
      } else {
        dua.style.backgroundColor='rgba(0, 0, 0, 0)';
        tulisan.style.display='none';
      }
}

function gantiWarna3(){
    const tiga = document.getElementById('tiga');
    const tulisan = document.getElementsByClassName('tulisan')[2];

      if (tiga.style.backgroundColor==='rgba(0, 0, 0, 0)') {
        tiga.style.backgroundColor='rgba(255,255,255,1)';
        tulisan.style.display='block';
      } else {
        tiga.style.backgroundColor='rgba(0, 0, 0, 0)';
        tulisan.style.display='none';
      }
}
