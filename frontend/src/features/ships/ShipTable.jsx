import { useShips } from "./useShips";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import ShipRow from "./ShipRow";
import Row from "../../ui/Row";
import ShipTableOperations from "./ShipTableOperations";
import AddShip from "./AddShip";

function ShipTable() {
  const { isLoading, ships } = useShips();
  const [serachParams] = useSearchParams();

  if (isLoading) return <Spinner data-testid="spinner" />;
  if (!ships.length) return <Empty resourceName="ships" />;

  let filteredShipsByImo;
  filteredShipsByImo = ships.filter(
    (ship) => ship.IMO.slice(3) === serachParams.get("IMO")
  );

  let filteredShipsByDate = filteredShipsByImo.filter(
    (ship) =>
      ship.BaseDateTime >= serachParams.get("startDate") &&
      ship.BaseDateTime <= serachParams.get("endDate")
  );

  return (
    <>
      <Row>
        <ShipTableOperations />
      </Row>
      <Row>
        <Table columns="1fr 1fr 1fr 1fr">
          <Table.Header>
            <span>Imo</span>
            <span>Latitude</span>
            <span>Longtude</span>
            <span>Timestamp</span>
          </Table.Header>
          <Table.Body
            data={filteredShipsByDate}
            render={(ship) => <ShipRow ship={ship} key={ship?.id} />}
          />
        </Table>
        <AddShip />
      </Row>
    </>
  );
}

export default ShipTable;
