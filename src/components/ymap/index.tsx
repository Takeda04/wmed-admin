/* eslint-disable */
//todo Import packages
import { useRef, useEffect } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

interface CustomProps {
  value: Array<number>;
  onChange: (e: Array<number>) => void;
}

//! ----------------------------------------------------------------------

export const YMap = ({ value, onChange }: CustomProps) => {
  const mapRef: any = useRef();
  const placemarkRef: any = useRef();
  const ymaps: any = useRef(null);

  useEffect(() => {
    if (ymaps.current) {
      const bounds = ymaps.current.util.bounds.fromPoints([
        [48.024402067130715, 39.85466330972504],
        [46.780699672601415, 39.807971415195674],
      ]);
      mapRef.current.setBounds(bounds, { checkZoomRange: true });
    }
  }, [ymaps]);

  const getPlacemarkAddress = (coords: any, callback: any) => {
    ymaps.current.geocode(coords).then((res: any) => {
      const firstGeoObject = res.geoObjects.get(0);
      const newAddress = [
        firstGeoObject.getLocalities().length
          ? firstGeoObject.getLocalities()
          : firstGeoObject.getAdministrativeAreas(),
        firstGeoObject.getThoroughfare() || firstGeoObject.getPremise(),
        firstGeoObject.getPremiseNumber(),
      ]
        .filter(Boolean)
        .join(", ");
      callback(newAddress);
    });
  };

  const handleMapClick = (event: any) => {
    const coords = event.get("coords");

    onChange(coords?.map((c: number) => +c.toFixed(9)));

    getPlacemarkAddress(coords, (newAddress: Array<number>) => {
      placemarkRef.current.getMap().hint.open(coords, newAddress);
    });
  };

  const handlePlacemarkDragEnd = () => {
    const coords = placemarkRef.current.geometry._coordinates;

    onChange(coords?.map((c: number) => +c.toFixed(9)));

    getPlacemarkAddress(coords, (newAddress: Array<number>) => {
      placemarkRef.current.getMap().hint.open(coords, newAddress);
    });
  };

  return (
    <YMaps
      query={{
        lang: "en_RU",
        load: "package.full",
        apikey: "qwertyuiopasdfghjklzxcvbnm",
      }}
    >
      <Map
        instanceRef={mapRef}
        state={{
          center: value,
          zoom: 10,
        }}
        onLoad={(e) => {
          ymaps.current = e;
        }}
        width="100%"
        height="100%"
        modules={["control.ZoomControl"]}
        onClick={handleMapClick}
      >
        <Placemark
          instanceRef={placemarkRef}
          onDragEnd={handlePlacemarkDragEnd}
          geometry={value}
          options={{
            draggable: true,
            preset: "islands#blueIcon",
            openEmptyHint: true,
          }}
          properties={{ iconContent: "+" }}
        />
      </Map>
    </YMaps>
  );
};
