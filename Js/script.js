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
      const timeNow = new Date().toLocaleTimeString("en-BD");

      const historyParent = getElement("history-parent");
      console.log(historyParent);
      const newHis = document.createElement("div");
      newHis.innerHTML = `
    <div class="flex justify-between items-center   bg-[#FAFAFA] p-5 mb-2 rounded-lg">
                <div>
                  <h2 class="text-xl font-semibold">${serviceName} </h2>
                  <p>${serviceNum} </p>
                  
                  </div>
                  <p>${timeNow}</p>
                

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
// heart icon
const heartIcon = document.getElementsByClassName("heart-icon");
for (let heatBtn of heartIcon) {
  heatBtn.addEventListener("click", function () {
    let loveUpdate = getElement("nav-heart").innerText;
    const newLove = Number(loveUpdate) + 1;
    getElement("nav-heart").innerText = newLove;
  });
}
// copy--------
const copyBtns = document.getElementsByClassName("copy-btn");
for (let copyBtn of copyBtns) {
  copyBtn.addEventListener("click", function () {
    // console.log("object");
    // const copyCount = getElement("copy-count").innerText;
    const hotlineNumber =
      copyBtn.parentNode.parentNode.parentNode.children[3].innerText;

    navigator.clipboard.writeText(hotlineNumber).then(() => {
      // ✅ Show alert
      alert(`Copied: ${hotlineNumber}`);

      // ✅ Update copy count
      const copyCountEl = getElement("copy-count");
      let currentCount = parseInt(copyCountEl.innerText);
      copyCountEl.innerText = currentCount + 1;
    });
  });
}
