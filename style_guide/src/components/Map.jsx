import React from "react";
import { ComposableMap, Geographies, Geography, Sphere, Graticule } from "react-simple-maps";
import geography from "../../public/features.json";
import styles from "../styles/Map.module.css";
import ToggleBtn from "./ToggleBtn";
import lockIcon from "../assets/lock_white.svg";
import shareIcon from "../assets/share_grey.svg";
import SearchBar from "./SearchBar";

// TODO: Condition lock icon on premium membership
// TODO: Condition country color on visited countries data
// TODO: Search bar: Add onChange function

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
    return (
        <div className={styles.mapContainer}>
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
                            <Geography key={geo.rsmKey} geography={geo} fill={geographyFill} stroke={geogrphyStrokeColor} strokeWidth={geographyStrokeWidth}/>
                        ))
                    }
                </Geographies>

            </ComposableMap>
        </div>
    );
}