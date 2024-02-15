import { useForm, Controller } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { useShips } from "./useShips";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import styled from "styled-components";
import FormRowVertical from "../../ui/FormRowVertical";
import Autocomplete from "@mui/material/Autocomplete";

const TableOperations = styled.div`
  align-items: center;
  gap: 1.6rem;
`;

const Div = styled.div`
  display: flex;
`;

function ShipTableOperations() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    control,
  } = useForm();

  const [serachParams, setSearchParams] = useSearchParams();
  const { ships } = useShips();

  let IMOoptions = ships?.map((ship) => ship.IMO.slice(3));
  let uniqIMOoptions = [...new Set(IMOoptions)];

  return (
    <TableOperations>
      <Form onSubmit={handleSubmit} type={"regular"} data-testid="form">
        <FormRowVertical label="IMO" error={errors?.imo?.message}>
          <Controller
            control={control}
            name="imo"
            render={({ field: { onChange, value } }) => (
              <Autocomplete
                id="imo"
                options={uniqIMOoptions}
                renderInput={(params) => (
                  <Div ref={params.InputProps.ref}>
                    <Input
                      data-testid="imo"
                      {...params.inputProps}
                      placeholder="Enter IMO number"
                      onChange={onChange}
                    />
                  </Div>
                )}
                onChange={(event, data) => {
                  onChange(data);
                  serachParams.set("IMO", data);
                  setSearchParams(serachParams);
                }}
                value={value || null}
              />
            )}
          />
        </FormRowVertical>

        <FormRowVertical label="From" error={errors?.startDate?.message}>
          <Input
            type="date"
            id="startDate"
            defaultValue={serachParams.get("startDate")}
            {...register("startDate", {
              onChange: () => {
                serachParams.set("startDate", getValues().startDate),
                  setSearchParams(serachParams);
              },
            })}
          />
        </FormRowVertical>

        <FormRowVertical label="To" error={errors?.endDate?.message}>
          <Input
            type="date"
            id="endDate"
            defaultValue={serachParams.get("endDate")}
            {...register("endDate", {
              onChange: () => {
                serachParams.set("endDate", getValues().endDate),
                  setSearchParams(serachParams);
              },
            })}
          />
        </FormRowVertical>
      </Form>
    </TableOperations>
  );
}

export default ShipTableOperations;
