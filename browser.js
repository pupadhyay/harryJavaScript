const openWindow = () => {
  window.open("model.html", "popup", "width=360, height=550");
  window.document.title;
  // window.open('model.html', 'PoP_Up', 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=360,height=550');

  //window.open('model.html', '', directories = 0, titlebar = 0, toolbar = 0, location = 0, status = 0, menubar = 0, scrollbars = no, resizable = no, width = 400, height = 350);
};

let para = document.querySelectorAll("p");
//console.log(para.length);
console.log(para[0].nodeName);
