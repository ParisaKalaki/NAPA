import { useForm, Controller } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { useShips } from "./useShips";
import { useState } from "react";
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
  const [inputValue, setInputValue] = useState("");
  // let IMOoptions = ships?.map((ship) => ({
  //   id: ship.id,
  //   IMO: ship.IMO.slice(3),
  // }));
  // let uniqueIMOoptions = IMOoptions.filter(
  //   (ship, index, self) => index === self.findIndex((s) => s.IMO === ship.IMO)
  // );
  let IMOoptions = ships?.map((ship) => ship.IMO.slice(3));
  let uniqueIMOoptions = [...new Set(IMOoptions)];

  return (
    <TableOperations>
      <Form onSubmit={handleSubmit} type={"regular"} data-testid="form">
        <FormRowVertical label="IMO" error={errors?.imo?.message}>
          <Controller
            control={control}
            name="imo"
            render={({ field: { onChange, value } }) => (
              <Autocomplete
                id="combo-box-demo"
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                options={uniqueIMOoptions}
                getOptionLabel={(option) => (option ? option : "")}
                isOptionEqualToValue={(option, value) => option === value}
                renderInput={(params) => (
                  <Div ref={params.InputProps.ref}>
                    <Input
                      data-testid="imo"
                      {...params.inputProps}
                      placeholder="Choose IMO number"
                    />
                  </Div>
                )}
                onChange={(event, value) => {
                  onChange(value);
                  serachParams.set("IMO", value);
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
