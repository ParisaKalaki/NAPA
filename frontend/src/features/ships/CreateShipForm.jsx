import { useForm } from "react-hook-form";
import { useCreateShip } from "./useCreateShip";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

function CreateShipForm({ onCloseModal }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { isCreating, createShip } = useCreateShip();

  function onSubmit(data) {
    createShip(
      { ...data },
      {
        onSuccess: (data) => {
          reset();
          onCloseModal?.();
        },
      }
    );
  }

  function onError(errors) {
    console.log(errors);
  }
  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={"modal"}
      data-testid="form"
    >
      <FormRow label="Date" error={errors?.BaseDateTime?.message}>
        <Input
          type="datetime-local"
          id="BaseDateTime"
          {...register("BaseDateTime")}
          required
        />
      </FormRow>
      <FormRow label="IMO" error={errors?.IMO?.message}>
        <Input type="number" id="IMO" {...register("IMO")} required min={0} />
      </FormRow>
      <FormRow label="LAT" error={errors?.LAT?.message}>
        <Input
          type="number"
          step="any"
          id="LAT"
          {...register("LAT")}
          required
        />
      </FormRow>
      <FormRow label="LON" error={errors?.LON?.message}>
        <Input
          type="number"
          step="any"
          id="LON"
          {...register("LON")}
          required
        />
      </FormRow>
      <FormRow>
        <Button disabled={isCreating}>Create</Button>
      </FormRow>
    </Form>
  );
}

export default CreateShipForm;
