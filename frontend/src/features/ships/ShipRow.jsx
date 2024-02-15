import Table from "../../ui/Table";

function ShipRow({ ship }) {
  const { BaseDateTime, IMO, LAT, LON } = ship;

  return (
    <Table.Row data-testid="row">
      <div>{IMO.slice(3)}</div>
      <div>{LAT.toFixed(2)}</div>
      <div>{LON.toFixed(2)}</div>
      <div>{BaseDateTime.replace(/.\d+Z$/g, "Z")}</div>
    </Table.Row>
  );
}
export default ShipRow;
