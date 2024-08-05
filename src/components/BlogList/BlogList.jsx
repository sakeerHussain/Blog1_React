import './BlogList.css';
import BlogPost from '../BlogPost/BlogPost';
export default function BlogList() {
  return (
    <section class="blog-posts py-5 bg-light">
      <div class="container">
        <div class="row">
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
        </div>
      </div>
    </section>
  );
}
