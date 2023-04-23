import React from "react";

export const CityModal = () => {
  return (
    <>
      <input type="checkbox" id="city-modal" className="modal-toggle" />
      <div className="modal modal-bottom  sm:modal-middle">
        <div className="modal-box">
          <div className="mb-9">
            <label
              htmlFor="city-modal"
              className="btn btn-sm btn-circle absolute right-2 top-6"
            >
              X
            </label>
          </div>

          <div className="overflow-x-auto">
            <table className="table table-compact w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>company</th>
                  <th>location</th>
                  <th>Last Login</th>
                  <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Littel, Schaden and Vandervort</td>
                  <td>Canada</td>
                  <td>12/16/2020</td>
                  <td>Blue</td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
