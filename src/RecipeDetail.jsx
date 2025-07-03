import React from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function RecipeDetail() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const { image, title, description, ingredients, video } = location.state || {};

  if (!image || !title || !description) {
    return <h3 className="text-center text-danger mt-5">Recipe not found</h3>;
  }

  return (
    <div className="container my-5 px-3">
      <button className="btn btn-outline-dark mb-4" onClick={() => navigate(-1)}>← Back</button>

      {/* Header Section */}
      <div className="row align-items-center">
        <div className="col-md-5 mb-4">
          <img 
            src={image} 
            alt={title} 
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: '300px', width: '100%', objectFit: 'cover' }}
          />
        </div>

        <div className="col-md-7">
          <h2 className="text-warning mb-3">{title}</h2>
          <p className="text-muted" style={{ textAlign: 'justify', lineHeight: '1.8' }}>
            {description}
          </p>
        </div>
      </div>

      <hr className="my-5" />

      {/* Ingredients + Video Side-by-side */}
      <div className="row g-4">
        {/* Ingredients Section */}
        <div className="col-lg-6">
          <h4 className="mb-3">🧂 Ingredients</h4>
          <div className="card shadow-sm p-3 bg-light rounded-3">
            <ul className="list-group list-group-flush">
              {ingredients?.map((item, index) => (
                <li key={index} className="list-group-item border-0 py-2" style={{ fontSize: '16px' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Video Section */}
        <div className="col-lg-6">
          <h4 className="mb-3">🎥 Watch the Cooking Video</h4>
          {video ? (
            <div className="ratio ratio-16x9 shadow rounded-3">
              <iframe
                src={video}
                title="Recipe Video"
                allowFullScreen
                frameBorder="0"
                style={{ borderRadius: '10px' }}
              ></iframe>
            </div>
          ) : (
            <div className="alert alert-secondary">
              Video not available for this recipe.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
