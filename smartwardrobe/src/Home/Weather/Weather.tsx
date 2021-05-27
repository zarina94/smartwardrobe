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


const graphData: DataPoint[] = [
  {
    id: 245674,
    date: new Date("10/01/2019").getTime(),
    value: 139.42,
    color: "primary",
  },
  {
    id: 245675,
    date: new Date("12/01/2019").getTime(),
    value: 281.23,
    color: "graph1",
  },
  {
    id: 245677,
    date: new Date("02/01/2020").getTime(),
    value: 198.54,
    color: "graph2",
  },
];

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

const Weather = ({
  navigation
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
              <TouchableOpacity style={{ borderColor: 'white', borderWidth: 1, 
                  marginBottom: 35, padding: 10}} onPress={() => navigation.navigate("Suggestions")}>
                  <Text style={{ color: 'white', fontSize: 25, fontWeight: '700' }}> See Suggestions</Text>
                </TouchableOpacity>
                <StatusBar backgroundColor="blue" barStyle="light-content" />
               
                <LocText>Almaty, KZ</LocText>
                <TempContainer>
                    <TempText>-11</TempText>
                    <Text style={{fontSize: 30, color: 'white', marginTop: 35}}>°C</Text>
                </TempContainer>
                <ConditionContainer>
                    <Ionicons name="ios-snow" style={{marginTop: 5}} size={32} color='white' />
                    <Text style={{fontSize: 36, color: 'white', marginLeft: 10}}>Snowy</Text>
                </ConditionContainer>
                <InfoContainer>
                    <InfoPanel>
                        <Ionicons name="ios-water" size={32} color='white' />
                        <InfoText>80%</InfoText>
                    </InfoPanel>
                    <InfoPanel>
                        <Ionicons name="ios-thermometer" size={32} color='white' />
                        <InfoText>0°C</InfoText>
                    </InfoPanel>
                    <InfoPanel>
                        <Ionicons name="ios-cloud-outline" size={32} color='white' />
                        <InfoText>12km/h</InfoText>
                    </InfoPanel>
                </InfoContainer>
                <View style={{height: 200, alignItems: 'center', marginTop: 10, alignSelf: 'stretch'}}>
                    <SectionList contentContainerStyle={styles.DataList} sections={tempData}
                        keyExtractor={(item, index) => index.toString()} scrollEnabled={false}
                        renderItem={({item}) => (
                            <WeatherButton color={'white'} onPress={()=>{}}>
                                {/* Icon */}
                                <View style={{}}>
                                    <WeatherText>{item.day}</WeatherText>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <WeatherText>{item.high}</WeatherText>
                                    <WeatherText marginLeft={'20px'} color="grey">{item.low}</WeatherText>
                                </View>
                            </WeatherButton>
                        )}>
                    </SectionList>
                </View>
                {/* <SwipeUpDown style={{ backgroundColor: 'green' }}>
                </SwipeUpDown> */}
            </Container>
    </ScrollableContent>
  );
};


const tempData = [
  {
      key: '1',
      title: 'Sunday',
      data: [
          {day: 'Sunday  ', high: '5°C', low: '-13°C'}
      ]
  },
  {
      key: '2',
      title: 'Monday',
      data: [
          {day: 'Monday  ', high: '7°C', low: '-11°C'}
      ]
  },
  {
      key: '3',
      title: 'Tuesday',
      data: [
          {day: 'Tuesday  ', high: '9°C', low: '-10°C'}
      ]
  },
  {
      key: '4',
      title: 'Wednesday ',
      data: [
          {day: 'Wednesday  ', high: '2°C', low: '-8°C'}
      ]
  },
  {
      key: '5',
      title: 'Thursday',
      data: [
          {day: 'Thursday', high: '1°C', low: '-7°C'}
      ]
  },
  {
      key: '6',
      title: 'Friday',
      data: [
          {day: 'Friday', high: '3°C', low: '-8°C'}
      ]
  },
  {
      key: '7',
      title: 'Saturday',
      data: [
          {day: 'Saturday', high: '6°C', low: '-5°C'}
      ]
  },
]

const styles = StyleSheet.create({
  DataList: {
      display: 'flex',
      flex: 1,
      marginHorizontal: 10,
      width: 350,
      }
  }); 

const Container = styled.View`
  background-color: #0066ff;
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

export default Weather;
