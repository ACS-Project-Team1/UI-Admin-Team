import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter, Route } from "react-router-dom";
import Signup from "../components/Signup.tsx";

const mockFetch = jest.fn();
(global as any).fetch = mockFetch;

describe("Signup Component", () => {
  beforeEach(() => {
    mockFetch.mockClear();
  });

  it("should render signup form with inputs and button", () => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );

    // Assert all input fields and button are rendered
    expect(screen.getByLabelText("Username:")).toBeInTheDocument();
    expect(screen.getByLabelText("Email:")).toBeInTheDocument();
    expect(screen.getByLabelText("Password:")).toBeInTheDocument();
    expect(screen.getByLabelText("Confirm Password:")).toBeInTheDocument();
    expect(screen.getByLabelText("First Name:")).toBeInTheDocument();
    expect(screen.getByLabelText("Last Name:")).toBeInTheDocument();
    expect(screen.getByLabelText("Date of Birth:")).toBeInTheDocument();
    expect(screen.getByLabelText("Gender:")).toBeInTheDocument();
    expect(screen.getByLabelText("Phone Number:")).toBeInTheDocument();
    expect(screen.getByLabelText("Role:")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Create Account" })).toBeInTheDocument();
  });

  it("should display error message if passwords do not match", async () => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );

    // Fill password fields with different values
    fireEvent.change(screen.getByLabelText("Password:"), {
      target: { value: "testpassword" },
    });
    fireEvent.change(screen.getByLabelText("Confirm Password:"), {
      target: { value: "differentpassword" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Create Account" }));

    // Assert error message is displayed
    await waitFor(() =>
      expect(screen.getByText("Passwords do not match.")).toBeInTheDocument()
    );
  });

  it("should display error message if validation fails", async () => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );

    // Submit form without filling required fields
    fireEvent.click(screen.getByRole("button", { name: "Create Account" }));

    // Assert error message is displayed
    await waitFor(() =>
      expect(screen.getByText("Validation failed. Please correct the fields.")).toBeInTheDocument()
    );
  });

//   it("should submit form successfully if all fields are valid", async () => {
//     mockFetch.mockResolvedValueOnce({
//       ok: true,
//       json: () => Promise.resolve({ message: "Account created successfully" }),
//     });
  
//     // Create a mock history object
//     const history = { push: jest.fn() };
  
//     render(
//       <MemoryRouter initialEntries={["/signup"]} initialIndex={0}>
//         <Route path="/signup">
//           <Signup />
//         </Route>
//         <Route
//           path="/"
//           render={({ history }) => (
//             <button onClick={() => history.push("/")}>Login</button>
//           )}
//         />
//       </MemoryRouter>
//     );
  
//     // Fill out form fields
//     fireEvent.change(screen.getByLabelText("Username:"), {
//       target: { value: "testuser" },
//     });
//     // Fill out other fields...
  
//     fireEvent.click(screen.getByRole("button", { name: "Create Account" }));
  
//     // Wait for form submission
//     await waitFor(() => {
//       // Assert that navigation has occurred to the dashboard page
//       expect(history.push).toHaveBeenCalledWith("/dashboard");
//     });
//   });
  
});
