export async function getShips() {
  const res = await fetch("http://localhost:3001/api/ships");
  return res.json();
}

export async function createShip(newShipData) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newShipData),
  };
  const res = await fetch("http://localhost:3001/api/ships", requestOptions);

  return res.json();
}
