"use client";

import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f9fa",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "40px",
          borderRadius: "12px",
          backgroundColor: "#fff",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          maxWidth: "400px",
        }}
      >
        <h1 style={{ fontSize: "32px", color: "#333", marginBottom: "10px" ,backgroundColor:"transparent"}}>
          404 - Page Not Found
        </h1>
        <p style={{ color: "#666", fontSize: "15px", marginBottom: "25px",backgroundColor:"transparent" }}>
          Sorry, the page you’re looking for doesn’t exist.
        </p>
        <Link
          href="/"
          style={{
            display: "inline-block",
            padding: "10px 25px",
            backgroundColor: "#0070f3",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "500",
            transition: "0.3s",
          }}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = "#0059c1")
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = "#0070f3")
          }
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
