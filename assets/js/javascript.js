function agreagarFruta(){
    var texto=document.getElementById('liname').value;
    var li=document.createElement('LI');
  if( li.innerHTML=texto==''){
    (alert('No estas agregando una fruta?'))
  }else{
    li.innerHTML=texto==''?'':texto;
    document.getElementById('lista').appendChild(li);
    document.getElementById('liname').value ="";
  }
};
function borrar(){
    lis=document.getElementById('lista').getElementsByTagName('li');
    for(var i=0; i<lis.length;i++){
        lis[i].onclick=function(){
            if(confirm('¿seguro que quieres eliminar esta fruta?'))
            this.parentNode.removeChild(this);
        };
    }

}
