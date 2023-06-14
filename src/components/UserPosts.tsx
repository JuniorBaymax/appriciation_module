const UserPosts = () => {
  return (
    <div className="appreciation-post">
      <div className="row">
        <div className="col-md-9">
          <div className="appreciator-info">
            <p className="p-0 m-0">
              <span className="mr-1">
                <img alt="profile_img" src="/src/assets/images/prof-img-appr.png" />
              </span>
              <span>
                <i className="las la-long-arrow-alt-right"></i>
              </span>
              <span className="ml-1">
                <img alt="profile_img" src="/src/assets/images/prof-img-appr.png" />
              </span>
            </p>

            <p className="m-0">
              <span className="appreciation-date">June 5, 2023 - 11:23</span>
            </p>

            <p className="appreciation-cat-name m-0">Diamond Appreciation</p>
            <p className="appreciation-text m-0">
              <span>@ankit.singh</span> <span>received appreciation from </span>
              <span> @prince </span> <span>:</span>
              <span>Excellent Work !!</span>
            </p>
            <span className="appreciation-count">10+</span>
          </div>
        </div>

        <div className="col-md-3">
          <div className="appreciation-extras">
            <div className="shield">
              <img alt="dimond_trophy" src="/src/assets/images/diamond-trophy.png" />
            </div>
            <div className="likes-comments">
              <p className="d-flex align-items-end m-0">
                <span className="mx-2">2 comments</span>{' '}
                <span className="mx-2">12 likes</span>
                <span>
                  <img alt="like" src="/src/assets/images/like.png" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ width: '100%' }}>
        <div className="comment-area">
          <span>
            {' '}
            <img alt="profile_img" src="/src/assets/images/prof-img-appr.png" />
          </span>
          <span className="add-cmnt">Add Comment</span>
        </div>
      </div>
    </div>
  );
};

export default UserPosts;
