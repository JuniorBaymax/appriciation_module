import React, { useEffect } from 'react';

interface Props {
  dataTarget: string;
}

const ResetPassword: React.FC<any> = () => {
  return (
    <div
      className="modal fade"
      id="resetPass"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="resetPassLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content" style={{ margin: '0 auto' }}>
          <div className="modal-header">
            <button
              type="button"
              className="close close-modal-btn"
              data-dismiss="modal"
              aria-label="Close"
              style={{ all: 'unset' }}
            >
              <i
                className="close close-modal-btn las la-times"
                data-dismiss="modal"
                aria-label="Close"
              ></i>
            </button>
            <p className="text-center reset-heading">Reset Password</p>
          </div>
          <div className="modal-body">
            <form className="reset-form">
              <div className="form-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Old Password"
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="New Password"
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm New Password"
                />
              </div>

              <div className="d-flex justify-content-center align-items-center">
                <button type="submit" className="btn btn-primary reset-sbmt-btn">
                  RESET PASSWORD
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
