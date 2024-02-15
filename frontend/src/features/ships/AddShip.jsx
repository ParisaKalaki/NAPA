import CreateShipForm from "./CreateShipForm";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
function AddShip() {
  return (
    <Modal>
      <Modal.Open opens="ship-form">
        <Button>Add new Ship</Button>
      </Modal.Open>
      <Modal.Window name="ship-form">
        <CreateShipForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddShip;
