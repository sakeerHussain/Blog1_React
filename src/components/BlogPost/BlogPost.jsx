
import "./BlogPost.css";
export default function BlogPost() {
  return (

            <div className="col-md-4 mb-4">
              <div className=" latestPost card  ">
                <img src="/assets/PostImg1.png" className="card-img-top" alt="Post 1 Image"/>
                <div className="card-body">
                  <span className="badge badge-custom">Technology</span>
                  <h5 className="card-title">The Impact of Technology on the Workplace: How Technology is Changing</h5>
                  <div className="author-info d-flex align-items-center mt-2">
                    <img src="/assets/author1.png" alt="Author" className="author-img"/>
                    <div className="author-details d-flex align-items-center ms-3">
                      <p className="author-name">Author Name</p>
                      <p className="post-date">Date of Post</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  );
}
