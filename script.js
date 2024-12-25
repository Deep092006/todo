let todo = [];
let ds = prompt("enter choice");
while (true) {
  if (ds === "quit") {
    console.log("quiting app");
    break;
  }
  else if (ds === "add"){
    let adi = prompt("enter task you want to add");
    todo.push(adi);
  }
  
  else if(ds === 'list'){
    for(let i = 0; i < todo.length; i++){
        console.log(i,todo[i]);
    }
  }
  else if(ds === 'd'){
    let dels = prompt("index");
    todo.splice(dels,1);
  }
  ds = prompt("enter choice");
}
