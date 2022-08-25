/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-wrapper">
      <div className="hero-banner-container">
        <div className="info-container">
          <img src="/logoMarvel.svg" alt="logo" />
          <h1>DANCING GROOT</h1>
          <h2>Marvel Guardian of the Galaxy</h2>
          <p>
            Groot is a fictional character appearing in American comic books
            published by Marvel Comics. Created by Stan Lee, Larry Lieber and
            Jack Kirby, the character first appeared in Tales to Astonish
          </p>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">See Details</button>
          </Link>
        </div>
        <div className="visual-container">
          <img src="/circle.svg" alt="circle" className="circle" />
          <img src="/leafs1.svg" className="leaf1" />
          <img src="/leafs2.svg" className="leaf2" />
          <img src="/leafBig.svg" className="leaf3" />
          <img src="/grootSvg.svg" alt="main-picture" />
        </div>
      </div>
      <div style={{ cursor: "pointer", height: "80px" }}>
        <Link href="#feed-content">
          <div class="arrow-container">
            <div class="chevron"></div>
            <div class="chevron"></div>
            <div class="chevron"></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeroBanner;
