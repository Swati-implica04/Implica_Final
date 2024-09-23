import React, { useEffect, useRef, useState } from 'react';
import Globe, { GlobeMethods } from 'react-globe.gl';
import * as THREE from 'three';
import cloud from "../assets/images/clouds.png";
import earthImage from "../assets/images/earth-blue-marble.jpg";
import bumpImage from "../assets/images/earth-topology.png";
 
const World: React.FC = () => {
  const globeEl = useRef<GlobeMethods | undefined>(undefined);
  const [globeSize, setGlobeSize] = useState({ width: 600, height: 440 });
 
  useEffect(() => {
    const globe = globeEl.current;
    if (!globe) return;
 
    const controls = globe.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.35;
    controls.enableZoom = false;
 
    new THREE.TextureLoader().load(cloud, (cloudsTexture) => {
      const clouds = new THREE.Mesh(
        new THREE.SphereGeometry(globe.getGlobeRadius() * 1.004, 75, 75),
        new THREE.MeshPhongMaterial({ map: cloudsTexture, transparent: true })
      );
      globe.scene().add(clouds);
 
      (function rotateClouds() {
        clouds.rotation.y += (-0.006 * Math.PI) / 180;
        requestAnimationFrame(rotateClouds);
      })();
    });
 
    // Adjust globe size based on screen width
    const handleResize = () => {
      let width = window.innerWidth < 768 ? window.innerWidth * 0.9 : 600;
      let height = window.innerWidth < 768 ? window.innerWidth * 0.5 : 440;
 
      // Limit size on wider screens
      if (window.innerWidth >= 1440) {
        width = 600;
        height = 600;
      } else if (window.innerWidth >= 1024 && window.innerWidth < 1440) {
        width = 550;
        height = 420;
      }
 
      setGlobeSize({ width, height });
    };
 
    window.addEventListener('resize', handleResize);
    handleResize(); // Call on initial load
 
    return () => window.removeEventListener('resize', handleResize);
  }, []);
 
  return (
    <Globe
      ref={globeEl as React.MutableRefObject<GlobeMethods | undefined>}
      width={globeSize.width}
      height={globeSize.height}
      animateIn={false}
      globeImageUrl={earthImage}
      bumpImageUrl={bumpImage}
      backgroundColor="rgba(0, 0, 0, 0)"
    />
  );
};
 
export default World;