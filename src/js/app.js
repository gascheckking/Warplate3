let currentGas = 0;

async function fetchGas() {
  try {
    const res = await fetch('https://api.owlracle.info/v4/base/gas?apikey=demo');
    const data = await res.json();
    currentGas = data.speeds[1].estimatedFee;
    updateGasUI();
  } catch (error) {
    console.error("Gas Error:", error);
  }
}

function updateGasUI() {
  const needle = document.getElementById('gasNeedle');
  const valueDisplay = document.getElementById('gasValue');
  const maxGas = 100;

  const position = (currentGas / maxGas) * 100;
  needle.style.left = `${position}%`;
  valueDisplay.textContent = `${currentGas.toFixed(1)} Gwei`;
}

setInterval(fetchGas, 30000);
fetchGas();
