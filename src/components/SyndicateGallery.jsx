import React, { useEffect, useState } from 'react';
import { getGalleryImages } from './fileService';

const SyndicateGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGalleryImages().then(data => setImages(data));
  }, []);

  return (
    <div style={{ padding: '20px', background: '#000', color: '#fff' }}>
      <h2 style={{ borderLeft: '5px solid #0066b2', paddingLeft: '15px' }}>
        ALPINO FAMILY <span style={{ color: '#ff0000' }}>GALLERY</span>
      </h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
        gap: '15px' 
      }}>
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
            <img 
              src={img.url} 
              alt={img.name} 
              style={{ width: '100%', borderRadius: '8px', border: '1px solid #333' }} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SyndicateGallery;
