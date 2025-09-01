import React, { useEffect, useState } from 'react';

// Import all the SVG files
import angleBrace from '../assets/backgroundGlyphs/angle brace.svg';
import apis from '../assets/backgroundGlyphs/apis.svg';
import bootstrap from '../assets/backgroundGlyphs/bootstrap.svg';
import clock from '../assets/backgroundGlyphs/clock.svg';
import food from '../assets/backgroundGlyphs/food.svg';
import html from '../assets/backgroundGlyphs/html.svg';
import keyboard from '../assets/backgroundGlyphs/keyboard.svg';
import lightbulb from '../assets/backgroundGlyphs/lightbulb.svg';
import macbook from '../assets/backgroundGlyphs/macbook.svg';
import music from '../assets/backgroundGlyphs/music.svg';
import python from '../assets/backgroundGlyphs/python.svg';
import react from '../assets/backgroundGlyphs/react.svg';

interface Glyph {
  id: string;
  src: string;
  name: string;
  x: number;
  y: number;
  size: number;
  rotation: number;
  opacity: number;
}

const BackgroundGlyphs: React.FC = () => {
  const [glyphs, setGlyphs] = useState<Glyph[]>([]);

  const svgAssets = [
    { src: angleBrace, name: 'angle-brace' },
    { src: apis, name: 'apis' },
    { src: bootstrap, name: 'bootstrap' },
    { src: clock, name: 'clock' },
    { src: food, name: 'food' },
    { src: html, name: 'html' },
    { src: keyboard, name: 'keyboard' },
    { src: lightbulb, name: 'lightbulb' },
    { src: macbook, name: 'macbook' },
    { src: music, name: 'music' },
    { src: python, name: 'python' },
    { src: react, name: 'react' },
  ];

  const generateGlyphs = () => {
    const newGlyphs: Glyph[] = [];
    const glyphCount = 40; // Increased number of glyphs for better distribution

    for (let i = 0; i < glyphCount; i++) {
      const randomAsset = svgAssets[Math.floor(Math.random() * svgAssets.length)];
      
      newGlyphs.push({
        id: `glyph-${i}`,
        src: randomAsset.src,
        name: randomAsset.name,
        x: Math.random() * 100, // Random horizontal position (0-100%)
        y: Math.random() * 200, // Extended vertical range (0-200%) to cover full page height
        size: Math.random() * 40 + 20, // Random size between 20-60px
        rotation: Math.random() * 360, // Random rotation (0-360 degrees)
        opacity: 0.6, // Fixed opacity at 60%
      });
    }

    setGlyphs(newGlyphs);
  };

  useEffect(() => {
    generateGlyphs();
  }, []);

  return (
    <div className="background-glyphs-container">
      {glyphs.map((glyph) => (
        <div
          key={glyph.id}
          className="background-glyph"
          style={{
            position: 'absolute',
            left: `${glyph.x}%`,
            top: `${glyph.y}%`,
            width: `${glyph.size}px`,
            height: `${glyph.size}px`,
            opacity: glyph.opacity,
            transform: `rotate(${glyph.rotation}deg)`,

            pointerEvents: 'none',
            zIndex: 1,
          }}
        >
          <img
            src={glyph.src}
            alt={glyph.name}
            className="w-full h-full object-contain"
            style={{
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default BackgroundGlyphs;
