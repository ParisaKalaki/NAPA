import pool from "../db.js";

export async function getShips() {
  try {
    let data = await pool.query("SELECT * FROM ships");
    return data.rows;
  } catch (error) {
    console.log(error);

    throw new Error("ships data could not be loaded!");
  }
}

export async function getShip(id) {
  try {
    let data = await pool.query(`SELECT * FROM ships WHERE id = ${id}`);
    return data.rows;
  } catch (error) {
    console.log(error);

    throw new Error("ship data could not be loaded!");
  }
}
export async function createShip(ship) {
  try {
    await pool.query(
      `INSERT INTO ships("BaseDateTime", "LAT", "LON", "IMO") VALUES ('${ship.BaseDateTime}',${ship.LAT}, ${ship.LON}, 'IMO${ship.IMO}')`
    );
    return "Ok";
  } catch (error) {
    console.log(error);
    throw new Error("ship data could not be inserted!");
  }
}
export async function deleteShip(id) {
  try {
    await pool.query(`DELETE FROM ships WHERE id = ${id}`);
    return "Ok";
  } catch (error) {
    console.log(error);
    throw new Error("ship data could not be deleted!");
  }
}
