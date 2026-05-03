import React, { useState } from 'react';
import { districtRegions } from '../data/districtMapData';
import type { RegionData } from '../data/districtMapTypes';


interface DistrictMapProps {
  onRegionClick?: (regionId: string) => void;
}

const DistrictMap: React.FC<DistrictMapProps> = ({ onRegionClick }) => {
  const [hoveredRegion, setHoveredRegion] = useState<RegionData | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e: React.MouseEvent, region: RegionData) => {
    if (region.name) {
      setHoveredRegion(region);
      setTooltipPos({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setTooltipPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setHoveredRegion(null);
  };

  const handleClick = (region: RegionData) => {
    if (region.status === 'certified' && onRegionClick) {
      onRegionClick(region.id);
    }
  };

  return (
    <div className="map-wrapper position-relative" style={{ minHeight: '400px' }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1074 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="district-svg"
        style={{ cursor: 'pointer' }}
      >
        {districtRegions.map((region) => (
          <path
            key={region.id}
            id={region.id}
            data-id={region.dataId}
            d={region.d}
            fill={region.fill}
            stroke="#ffffff"
            strokeWidth="0.5"
            onMouseEnter={(e) => handleMouseEnter(e, region)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(region)}
            style={{
              transition: 'fill 0.2s ease',
              opacity: region.status === 'outside' ? 0.3 : 1,
              cursor: region.status === 'certified' ? 'pointer' : 'default',
            }}
            className={region.status === 'certified' ? 'certified-path' : ''}
          />
        ))}
      </svg>

      {hoveredRegion && hoveredRegion.name && (
        <div
          className="map-tooltip"
          style={{
            position: 'fixed',
            left: tooltipPos.x + 10,
            top: tooltipPos.y + 10,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            padding: '8px 12px',
            borderRadius: '4px',
            fontSize: '14px',
            zIndex: 1000,
            pointerEvents: 'none',
          }}
        >
          {hoveredRegion.name}
        </div>
      )}
    </div>
  );
};

export default DistrictMap;
