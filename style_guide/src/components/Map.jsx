import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, Sphere, Graticule } from "react-simple-maps";
import geography from "../../public/features.json";
import styles from "../styles/Map.module.css";

// TODO: Tooltip show visit date
// TODO: Add onClick function (show sidebar linking travel entries)

export default function Map(
    {
        sphereStrokeColor="#E4E5E6",
        sphereStrokeWidth=0.5,
        graticuleStrokeColor="#E4E5E6",
        graticuleStrokeWidth=0.5,
        geographyFill="#F3F3F3",
        geogrphyStrokeColor="#6b6b6b",
        geographyStrokeWidth=0.5
    }
) {
    const [tooltipContent, setTooltipContent] = useState("");
    const [tooltipPos, setTooltipPos] = useState({x: 0, y: 0}); 
    const [showTooltip, setShowTooltip] = useState(false); 

    return (
        <div 
            className={styles.mapContainer}
            onMouseMove={(e) => {
                setTooltipPos({x: e.clientX + 10, y: e.clientY + 10});
            }}
        >
            <ComposableMap className={styles.map}
                projectionConfig={{
                rotate: [-10, 0, 0],
                scale: 147
            }}
            >
                <Sphere stroke={sphereStrokeColor} strokeWidth={sphereStrokeWidth}/>
                <Graticule stroke={graticuleStrokeColor} strokeWidth={graticuleStrokeWidth}/>
                <Geographies geography={geography}>
                    {({geographies}) => 
                        geographies.map((geo) => (
                            <Geography 
                                key={geo.rsmKey}
                                geography={geo}
                                fill={geographyFill}
                                stroke={geogrphyStrokeColor}
                                strokeWidth={geographyStrokeWidth}
                                onMouseEnter={() => {
                                    const name = geo.properties.name;
                                    setTooltipContent(name);
                                    setShowTooltip(true);
                                }}
                                onMouseLeave={() => {
                                    setShowTooltip(false);
                                }}
                            />
                        ))
                    }
                </Geographies>
            </ComposableMap>

            {showTooltip && (
                <div className={styles.tooltip} style={{left: tooltipPos.x, top: tooltipPos.y}}>
                    {tooltipContent}
                </div>
            )}
        </div>
    );
}