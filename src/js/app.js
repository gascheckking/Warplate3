async function getGasPrice() {
  try {
    const response = await fetch('https://api.owlracle.info/v4/base/gas?apikey=demo');
    const data = await response.json();
    const gwei = data.speeds[1].estimatedFee;
    updateGasUI(gwei);
  } catch (error) {
    console.error("Error fetching gas:", error);
  }
}

function updateGasUI(gwei) {
  const needle = document.getElementById('gasNeedle');
  const display = document.getElementById('gasValue');
  
  // Uppdatera position (0-100%)
  const position = Math.min(gwei / 100 * 100, 100);
  needle.style.left = `${position}%`;
  display.textContent = `${gwei.toFixed(1)} Gwei`;
}

// Uppdatera var 30:e sekund
setInterval(getGasPrice, 30000);
getGasPrice(); // Kör direkt
