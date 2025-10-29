"use client";
import React, { useState } from "react";
import "./imageConcerter.scss";

const ImageConverter = () => {
  const [inputImage, setInputImage] = useState(null);
  const [outputImage, setOutputImage] = useState(null);
  const [targetFormat, setTargetFormat] = useState("png");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setInputImage(file);
    }
  };

  const handleConvert = () => {
    if (!inputImage) return alert("Please select an image!");

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        const converted = canvas.toDataURL(`image/${targetFormat}`);
        setOutputImage(converted);
      };
    };

    reader.readAsDataURL(inputImage);
  };

  return (
    <div className="image-converter">
      <h1>Image Converter</h1>
      <div className="upload-box">
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <select onChange={(e) => setTargetFormat(e.target.value)} value={targetFormat}>
          <option value="png">Convert to PNG</option>
          <option value="jpg">Convert to JPG</option>
          <option value="jpeg">Convert to JPEG</option>
          <option value="webp">Convert to WEBP</option>
          <option value="gif">Convert to GIF</option>
        </select>
        <button onClick={handleConvert}>Convert</button>
      </div>

      {outputImage && (
        <div className="result-box">
          <h3>Result:</h3>
          <img src={outputImage} alt="converted" />
          <a href={outputImage} download={`converted.${targetFormat}`}>
            Download
          </a>
        </div>
      )}
    </div>
  );
};

export default ImageConverter;
