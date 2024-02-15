import { fireEvent, render, screen, act } from "@testing-library/react";
import CreateShipForm from "../features/ships/CreateShipForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@testing-library/jest-dom";

describe(CreateShipForm, () => {
  it("submit the form when the create button is clicked", async () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <CreateShipForm />
      </QueryClientProvider>
    );
    const handleOnSubmitMock = jest.fn();

    const form = await screen.findByTestId("form");
    form.onsubmit = handleOnSubmitMock;

    await act(async () => {
      fireEvent.change(await screen.findByLabelText("Date"), {
        target: { value: "2023-01-01 00:00:00" },
      });
      fireEvent.change(await screen.findByLabelText("IMO"), {
        target: { value: "2222" },
      });
      fireEvent.change(await screen.findByLabelText("LAT"), {
        target: { value: "2222" },
      });
      fireEvent.change(await screen.findByLabelText("LON"), {
        target: { value: "2222" },
      });
    });

    // Submit the form
    await act(async () => {
      fireEvent.click(await screen.findByRole("button", { name: "Create" }));
    });
    // Expectations for form submission
    expect(handleOnSubmitMock).toHaveBeenCalled();
  });
});
