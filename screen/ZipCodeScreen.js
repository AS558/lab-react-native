import React from "react";
import { FlatList, TouchableHighlight } from "react-native";
import { StatusBar, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";


const availableZipItems = [
    { place: 'Chumphon', code: '81000' },
    { place: 'Nakhon Si Thammarat', code: '80000' },
    { place: 'Narathiwat', code: '96000' },
    { place: 'Pattani', code: '94000' },
    { place: 'Phatthalung', code: '93000' },
    { place: 'Songkhla', code: '90000' },
    { place: 'Surat Thani', code: '84000' },
    { place: 'Yala', code: '95000' },
    { place: 'Krabi', code: '81000' },
    { place: 'Phang Nga', code: '82000' },
    { place: 'Phuket', code: '83000' },
    { place: 'Ranong', code: '85000' },
    { place: 'Satun', code: '91000' },
    { place: 'Trang', code: '92000' }
]

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate("Weather", {zipCode: place}) // change zipcode to province
    }}>
        <View style = {style.zipItem}>
            <Text>{place}</Text>
            <Text>{code}</Text>
        </View>
    </TouchableHighlight>
)

const _keyExtractor = item => item.code

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        <View>
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({item}) => <ZipItem {...item} navigation={navigation}/>}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const style = StyleSheet.create(
    {
      zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      zipPlace: {
        flex: 1,
      },
      zipCode: {
        flex: 1,
      }
    }
  ) 
