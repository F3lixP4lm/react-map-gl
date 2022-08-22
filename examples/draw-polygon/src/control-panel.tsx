import * as React from 'react';
import area from '@turf/area';
import GeoJSON from 'geojson';

interface ControlPanelProps{
  polygons: GeoJSON.Feature[]
}

function ControlPanel(props:ControlPanelProps) {
  let polygonArea = 0;
  for (const polygon of props.polygons) {
    polygonArea += area(polygon);
  }

  const showPolygonJSONArray = () => {
    let polygonJSONArray ="[" + props.polygons.map(shape => {
      return `{"id": "${shape.id}", "geometry":${JSON.stringify(shape.geometry)}}`
    })+ "]";
    alert(polygonJSONArray);
  };

  return (
    <div className="control-panel">
      <h3>Draw Polygon</h3>
      {polygonArea > 0 && (
        <p>
          {Math.round(polygonArea * 100) / 100} <br />
          square meters
        </p>
      )}
      <div>
        <button type="button" onClick={showPolygonJSONArray}>Show coordinates</button>
      </div>
      <div className="source-link">
        <a
          href="https://github.com/visgl/react-map-gl/tree/7.0-release/examples/draw-polygon"
          target="_new"
        >
          View Code ↗
        </a>
      </div>
    </div>
  );
}

export default React.memo(ControlPanel);
