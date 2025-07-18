
const swbMengeTable = document.getElementById("swb-menge-table");
    const swbTextblocksTable = document.getElementById("swb-textblock-table");
    const swbTeilTable = document.getElementById("swb-teil-table");
    const swbOutput = document.getElementById("swb-output");

    let swbSelectedMenge = '';
    let swbSelectedTextblocks = [];
    let swbSelectedTeil = '';

    function swbUpdateOutput() {
      const result = `Menge: ${swbSelectedMenge || '-'} | Text: ${swbSelectedTextblocks.join(', ') || '-'} | Teil: ${swbSelectedTeil || '-'}`;
      swbOutput.value = result;
    }

    swbMengeTable.addEventListener("click", (e) => {
      if (e.target.classList.contains("swb-btn")) {
        swbMengeTable.querySelectorAll(".swb-btn").forEach(btn => btn.classList.remove("selected"));
        e.target.classList.add("selected");
        swbSelectedMenge = e.target.dataset.value;
        swbUpdateOutput();
      }
    });

    swbTextblocksTable.addEventListener("click", (e) => {
      if (e.target.classList.contains("swb-btn")) {
        const val = e.target.dataset.value;
        e.target.classList.toggle("selected");
        if (swbSelectedTextblocks.includes(val)) {
          swbSelectedTextblocks = swbSelectedTextblocks.filter(v => v !== val);
        } else {
          swbSelectedTextblocks.push(val);
        }
        swbUpdateOutput();
      }
    });

    swbTeilTable.addEventListener("click", (e) => {
      if (e.target.classList.contains("swb-btn")) {
        swbTeilTable.querySelectorAll(".swb-btn").forEach(btn => btn.classList.remove("selected"));
        e.target.classList.add("selected");
        swbSelectedTeil = e.target.dataset.value;
        swbUpdateOutput();
      }
    });