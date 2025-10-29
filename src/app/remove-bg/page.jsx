"use client"
import React, { useState, useRef, useEffect } from 'react';
import './remove.scss';

const Remove = () => {
  const [inputImage, setInputImage] = useState(null);
  const [outputImage, setOutputImage] = useState(null);
  const fileInputRef = useRef(null);

  // Sahifa ochilganda avtomatik fayl tanlash oynasini ochish
  useEffect(() => {
    if (typeof window !== 'undefined' && fileInputRef.current) {
      fileInputRef.current.click();
    }
  }, []);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setInputImage(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append('image_file', file);
    formData.append('size', 'auto');

    try {
      const response = await fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
          'X-Api-Key': '4tB9RQJc3okWTir6RiayWhpF',
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to remove background');
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setOutputImage(url);
    } catch (err) {
      console.error(err);
      alert('Background removal failed!');
    }
  };

  const handleChangeImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  return (
    <div className="remove-page">
      {/* Faqat bitta yashirin input */}
      <div className='file-input-container'>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        style={{ display: 'none' }}
        className='birinchi'
        />

      {/* Input va h1 faqat rasm tanlanmaganida ko‘rsatiladi */}
      {!inputImage && (
        <div className="input-remove">
          <h1>Upload an image to <br /> remove the background</h1>
          <button onClick={handleChangeImage}>
            Upload Image
          </button>
        </div>
      )}
      </div>

      {/* Natija va rasm */}
      {(inputImage || outputImage) && (
        <div className="imgs">
          {inputImage && (
            <div className="preview">
              <h2>Original Image</h2>
              <img src={inputImage} alt="Original" />
              <button className="change-btn" onClick={handleChangeImage}>
                Change Image
              </button>
            </div>
          )}

          {outputImage && (
            <div className="result">
              <h2>Background Removed</h2>
              <img src={outputImage} alt="Removed Background" />
              <a href={outputImage} download="no-background.png">
                <button>Download</button>
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Remove;
