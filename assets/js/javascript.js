function agreagarFruta(){
    var texto=document.getElementById('liname').value;
    var li=document.createElement('LI');
    li.innerHTML=texto==''?'(nada)':texto;
    document.getElementById('lista').appendChild(li);
};
