import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectOrigin } from "../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAP_APIKEY } from "@env";
const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(destination);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!origin || !destination) return;

    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination]);
  return (
    // <MapView
    //   ref={mapRef}
    //   style={tw`flex-1`}
    //   initialRegion={{
    //     latitude: origin.location.lat,
    //     longitude: origin.location.lng,
    //     latitudeDelta: 0.005,
    //     longitudeDelta: 0.005,
    //   }}
    // >
    //   {origin && destination && (
    //     <MapViewDirections
    //       origin={origin.description}
    //       destination={destination.description}
    //       apikey={GOOGLE_MAP_APIKEY}
    //       strokeWidth={3}
    //       strokeColor="black"
    //     />
    //   )}
    //   {origin?.location && (
    //     <Marker
    //       coordinate={{
    //         latitude: origin.location.lat,
    //         longitude: origin.location.lng,
    //       }}
    //       title="Origin"
    //       description={origin.description}
    //       identifier="origin"
    //     />
    //   )}
    //   {destination?.location && (
    //     <Marker
    //       coordinate={{
    //         latitude: destination.location.lat,
    //         longitude: destination.location.lng,
    //       }}
    //       title="destination"
    //       description={destination.description}
    //       identifier="destination"
    //     />
    //   )}
    // </MapView>
    <MapView
      style={tw`flex-1`}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};

export default Map;

const styles = StyleSheet.create({});
