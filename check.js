function checkLogin() {
    const u = document.getElementById("username").value;
    const p = document.getElementById("password").value;
  

    const encodedParts = [
      "QUND",         
      "X0NURntD",     
      "TDEzTlRf",     
      "UzFEM180",     
      "TkFMWTE1",     
      "fQ=="          
    ];
  
    let hiddenFlag = "";
    encodedParts.forEach(part => {
      hiddenFlag += atob(part);
    });
  
    const hexed = ['73', '6e', '30', '6d', '65', '6c'];
    const realPass = hexed.map(h => String.fromCharCode(parseInt(h, 16))).join('');
  
    if (u === "admin" && p === "letmein123") {
      document.getElementById("result").innerText = "Access Denied: Wrong password.";
      return false;
    }
  
    if (u === "admin" && p === realPass) {
      document.getElementById("result").innerText = "✅ Flag: " + hiddenFlag;
    } else {
      document.getElementById("result").innerText = "❌ Incorrect credentials.";
    }
  
    return false; 
  }
  