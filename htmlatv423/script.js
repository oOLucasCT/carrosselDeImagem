    let indice = 0;
    const imagens = document.querySelectorAll(".carrossel img");

    function mostrarImagem(tela){
        imagens.forEach(img => img.classList.remove("ativa"));
        imagens[tela].classList.add("ativa");
    }
   let i = 1;
    function proximo(){
            const elemento = document.querySelector("body");

    indice = (indice + 1) % imagens.length;
        i++;
    elemento.classList.remove('flag1', 'flag2', 'flag3');

    if (i > 3) {
        i = 1;
    }        
    elemento.classList.add("flag" + i); 
        mostrarImagem(indice);

  }

    function anterior(){
            const elemento = document.querySelector("body");

        indice = (indice - 1 + imagens.length) % imagens.length;
            i--;
            elemento.classList.remove('flag1', 'flag2', 'flag3');

            if(i < 1){
                i = 3;
            }
        elemento.classList.add("flag" + i);
        mostrarImagem(indice);

    }


