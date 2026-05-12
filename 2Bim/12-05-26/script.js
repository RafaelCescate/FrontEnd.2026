const addCPF =document.getElementById('addCPF');
const veri =document.getElementById('veri');

function verificar(){
  const textovazio = addCPF.value.trim()
  if(textovazio !== ''){
    
    if(){
      veri.innerHTML=`SUCESSO`;
    }else{
      veri.innerHTML=`ERRO`
    }
  }  
}