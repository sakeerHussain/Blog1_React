import "./HeroSection.css";
export default function HeroSection() {
  return (
    <section className="hero-section">
        <div className="hero-background">
          <div className="container">
            <img className="heroBanner" src="/assets/HeroSectionImg.png" alt="" />
            <div className="card p-4 position-absolute bottom-left">
              <div className="badge-custom mb-2">Technology</div>
              <div className="card-body">
                <h5 className="card-title">The Impact of Technology on the Workplace: How Technology is Changing</h5>
              </div>
             
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
      </section>
  );
}
