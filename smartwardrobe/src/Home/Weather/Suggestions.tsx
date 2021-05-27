import React from "react";
import { useState , useEffect} from 'react';

import { Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import { Box, Header, Text, makeStyles, ScrollableContent } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";
import { Theme } from "../../components/Theme";
import { Alert, View, TouchableOpacity, SectionList, StatusBar } from 'react-native';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import Graph, { DataPoint } from "./Graph";
import Transaction from "./Transaction";
import { getCurrentWeatherData, getSixteenDayWeatherData, getClothData } from './utillity.js';

const startDate = new Date("09/01/2019").getTime();
const numberOfMonths = 6;

const options = {
  enableHighAccuracy: true,
  timeout: 20000, 
  maximumAge: 1000 
}




const footerHeight = Dimensions.get("window").width / 5.5;
const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  scrollView: {
    paddingBottom: footerHeight,
  },
}));

export const Suggestions = ({
  navigation,
}: HomeNavigationProps<"Weather">) => {
  const styles = useStyles();
  const [location, setLocation] = useState(null);
 
  useEffect(() => {
    console.log(getCurrentWeatherData())

  }, []);


const  findCoordinate = () => {
    navigator.geolocation.getCurrentPosition(
  position => {
            const location = JSON.stringify(position);
            console.log(position);
    setLocation(location)
  },
  error =>  {
            Alert.alert(error.message);
        },
        options
    )
}


  return (
    <ScrollableContent>
      <Container>
                <StatusBar backgroundColor="blue" barStyle="light-content" />
                <View>
                <Text style={{ alignSelf: 'center', fontSize: 23, fontWeight: '700' }}> T-shirt</Text>
                <Image style={{}} source={require('../../../assets/shirt.png')} />
                </View> 
                <View style={{backgroundColor: 'white', padding: 10, marginTop: 20, width: 300}}>
                  <Text style={{ alignSelf: 'center', fontSize: 16,fontWeight: '700'}}>Alternative Apperel</Text>
                </View>
                <View style={{backgroundColor: 'white', padding: 10, marginTop: 20, width:300}}>
                  <Text style={{ alignSelf: 'center', fontSize: 16,fontWeight: '700'}}>Loomstate</Text>
                </View>
                <View style={{backgroundColor: 'white', padding: 10, marginTop: 20, width:300}}>
                  <Text style={{ alignSelf: 'center', fontSize: 16,fontWeight: '700'}}>Toms</Text>
                </View>

                <View style={{backgroundColor: 'red', padding: 10, marginTop: 20, width:100, alignSelf: 'flex-end', marginRight: 45}}>
                  <Text style={{ alignSelf: 'center', fontSize: 16,fontWeight: '700'}}>0*C</Text>
                </View>

            </Container>
    </ScrollableContent>
  );
};


const styles = StyleSheet.create({
  DataList: {
      display: 'flex',
      flex: 1,
      marginHorizontal: 10,
      width: 350,
      }
  }); 

const Container = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`
const LocText = styled.Text`
  display: flex;
  color: white;
  font-size: 20px;
`
const TempContainer = styled.View`
  display: flex;
  align-items: center;
  flexDirection: row;
`
const TempText = styled.Text`
  display: flex;
  color: white;
  font-size: 80px;
`
const ConditionContainer = styled.View`
  display: flex;
  flex-direction: row;
`
const InfoContainer = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin-top: 10px;
  justify-content: space-evenly;
`
const InfoPanel = styled.View`
  display: flex;
  align-items: center;
`
const InfoText = styled.Text`
  color: white;
`
const WeatherButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 3px
`
const WeatherText = styled.Text`
  color: ${ props => props.color ? props.color : "white"};
  font-size: 22px;
  display: flex;
  margin-left: ${ props => props.marginLeft ? props.marginLeft: '0px'};
`

// export default Suggestions;
