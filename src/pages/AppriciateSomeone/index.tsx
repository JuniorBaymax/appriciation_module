import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React from 'react';

const AppriciateSomeone = () => {
  return (
    <div
      className="modal fade appreciation-form"
      id="appreciateSomeoneModal"
      tabIndex={'-1'}
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close close-modal-btn"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i
                className="close close-modal-btn las la-times"
                data-dismiss="modal"
                aria-label="Close"
              ></i>
            </button>
            <p className="welcome-phrase text-center">
              Welcome, <span>Prince Singh</span>
            </p>
            <p className="text-center recog-heading">Recognition/Appreciation Form</p>
          </div>
          <div className="modal-body">
            <div className="member-info d-flex justify-content-center align-items-center">
              <input type="text" placeholder="Member Name.." />
            </div>

            <div className="appreciation-category-area">
              <p className="cat-head">Appreciation Category</p>

              <div className="categories-shield">
                <div className="row shield-row">
                  <div className="col">
                    <div className="img-wrpp d-flex justify-content-center">
                      <img alt="img_assets" src="/src/assets/images/platinum.png" />
                    </div>
                    <p className="text-center name-of-shield">Platinum</p>
                  </div>
                  <div className="col">
                    <div className="img-wrpp d-flex justify-content-center">
                      <img alt="img_assets" src="/src/assets/images/diamond.png" />
                    </div>
                    <p className="text-center name-of-shield">Diamond</p>
                  </div>
                  <div className="col">
                    <div className="img-wrpp d-flex justify-content-center">
                      <img alt="img_assets" src="/src/assets/images/gold.png" />
                    </div>
                    <p className="text-center name-of-shield">Gold</p>
                  </div>
                  <div className="col">
                    <div className="img-wrpp d-flex justify-content-center">
                      <img alt="img_assets" src="/src/assets/images/silver.png" />
                    </div>
                    <p className="text-center name-of-shield">Silver</p>
                  </div>
                </div>
                {/* <p>
                  <span>
                    <img alt="img_assets" src="/src/assets/images/platinum.png" />
                    Platinum
                  </span>
                  <span>
                    <img alt="img_assets" src="/src/assets/images/diamond.png" />
                    <span>Diamond</span>
                  </span>
                  <span>
                    <img alt="img_assets" src="/src/assets/images/gold.png" />
                    <span>Gold</span>
                  </span>
                  <span>
                    <img alt="img_assets" src="/src/assets/images/silver.png" />
                    <span>Silver</span>
                  </span>
                </p> */}
              </div>
            </div>

            <div className="send-to-all">
              <input type="checkbox" checked data-toggle="toggle" />
              <div className="d-flex justify-content-center">
                <p className="text-center snd-to-all-txt m-0">
                  Send communication to all employees?
                </p>
              </div>
              <div className="d-flex justify-content-center">
                <div
                  className="form-check form-switch"
                  style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    style={{ height: '1.3rem', width: '2.8rem' }}
                  />
                </div>
              </div>
            </div>

            <div className="cc-area">
              <div className="d-flex justify-content-center my-2">
                <div className="col-md-10">
                  <FormControl fullWidth sx={{ m: 1, minWidth: 120 }} size="small">
                    {/* <InputLabel id="demo-select-small-label">Age</InputLabel> */}
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={10}
                      placeholder="CC List"
                      onChange={() => console.log('first')}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>

            <div className="appreciation-text-area p-4">
              <textarea
                className="form-control"
                id="giveAppreciation"
                rows={2}
                placeholder="Type few words of Appreciation here.."
              ></textarea>
            </div>

            <div className="submit-area">
              <div className="d-flex justify-content-center align-items-center">
                <div className="sbmt-btn" data-toggle="modal">
                  <p className="p-0 m-0">
                    <span>
                      <img alt="img_assets" src="/src/assets/images/high-quality.png" />
                    </span>
                    SUBMIT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppriciateSomeone;
