import React from "react";
import { StyleSheet, Text, SafeAreaView, View, Image } from "react-native";
// import { StatusBar } from "expo-status-bar";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAP_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <GooglePlacesAutocomplete
          query={{
            key: "AIzaSyDLpO3cy-yCtmXJavekiGnbPuXZ2TZmPxI",
            language: "es",
          }}
          onPress={(data, details = null) => {
            console.log("====================================");
            console.log(data);
            console.log("====================================");
            console.log(details);
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          placeholder="Where From?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          styles={{
            textInputContainer: {
              backgroundColor: "gray",
            },
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
