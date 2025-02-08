const blabla = {
    name: "Gio",
    lastName: "Mindorashvili", 
  };
  
  for (let i in blabla) {
    if (blabla[i].length < 5) { 
      console.log(`${i}: ${blabla[i]}`);
    }
  }
  