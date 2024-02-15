import { fireEvent, render, screen, act } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";
import ShipTable from "../features/ships/ShipTable";
import ShipTableOperations from "../features/ships/ShipTableOperations";
import "@testing-library/jest-dom";

describe(ShipTable, () => {
  it("submit the form ", async () => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={new QueryClient()}>
          <ShipTableOperations />
        </QueryClientProvider>
      </MemoryRouter>
    );

    const handleOnSubmitMock = jest.fn();
    const form = await screen.findByTestId("form");
    form.onsubmit = handleOnSubmitMock;

    await act(async () => {
      fireEvent.input(await screen.findByTestId("imo"), {
        target: { value: 8982577 },
      });
      fireEvent.input(await screen.findByLabelText("From"), {
        target: { value: "2022-12-13" },
      });
      fireEvent.input(await screen.findByLabelText("To"), {
        target: { value: "2023-12-13" },
      });
      fireEvent.submit(form);
    });

    expect(handleOnSubmitMock).toHaveBeenCalled();
  });
});
