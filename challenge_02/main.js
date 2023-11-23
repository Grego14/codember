const compiler = string =>{
  let result = "";
  let actualValue = 0;

  for (let i = 0; i < string.length; i++) {
    if(string[i] === "&"){
      result += actualValue;
    }else if(string[i] === "#"){
      actualValue += 1;
    }else if(string[i] === "*"){
      actualValue *= actualValue;
    }else if(string[i] === "@"){
      actualValue -= 1;
    }
  }
  return console.log(result)
}

compiler("&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&")
