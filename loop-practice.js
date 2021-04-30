  for (let v = 100; v <= 200; v++)
  { if (v % 3 === 0 && v % 4 === 0) { console.log("LoopyLighthouse"); }
    else if (v % 4 === 0) { console.log("Lighthouse");  }
    else if (v % 3 === 0) { console.log("Loopy");  }
  
    else { console.log(v);  } }
