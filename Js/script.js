function getElement(id) {
  return document.getElementById(id);
}
// ------------------------------------
const callBtns = document.getElementsByClassName("call-btn");

for (let callBtn of callBtns) {
  callBtn.addEventListener("click", function () {
    let navCoins = parseInt(getElement("nav-coins").innerText);
    const serviceName =
      callBtn.parentNode.parentNode.parentNode.children[1].innerText;
    const serviceNum =
      callBtn.parentNode.parentNode.parentNode.children[3].innerText;
    console.log(serviceNum);

    if (navCoins < 20) {
      alert("You have not enough coin");
      return;
    } else {
      const updatedCoins = navCoins - 20;
      getElement("nav-coins").innerText = updatedCoins;
      alert("Calling..." + serviceName + " " + serviceNum);

      const historyParent = getElement("history-parent");
      console.log(historyParent);
      const newHis = document.createElement("div");
      newHis.innerHTML = `
    <div class="flex justify-between items-center   bg-[#FAFAFA] p-5 mb-2 rounded-lg">
                <div>
                  <h2 class="text-xl font-semibold">${serviceName} </h2>
                  <p>${serviceNum} </p>
                  
                  </div>
                  <p>timeNow</p>
                

              </div>
    `;
      historyParent.append(newHis);
    }
// !---------------Clear but
    const hisClearBut = getElement("his-clr-btn");
    hisClearBut.addEventListener("click", function () {
      getElement("history-parent").innerHTML = "";
    });
  });
}
