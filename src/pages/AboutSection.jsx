import React from 'react';
import DesaMap from '../components/DesaMap';
import DataDesa from './DataDesa';

const AboutSection = () => {
  return (
    <section id="about">
      <div>
        <div>
          <DesaMap />
        </div>
        <DataDesa />
      </div>
    </section>
  );
};

export default AboutSection;
