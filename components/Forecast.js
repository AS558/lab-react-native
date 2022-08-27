import React from "react";
import { Text, View, StyleSheet } from 'react-native';

export default function Forecast(props) {
    return (
        <View>
            <View style= {{
                flexDirection: "row",
                justifyContent: 'center'
            }}
            >
                <Text style={style.tempNum}>{props.temp}</Text>
                <Text style={style.normalText}> °C</Text>
            </View>
            <Text style={style.normalText}>{props.main}</Text>
            <View style= {{
                flexDirection: "row",
                justifyContent: 'space-between',
            }}>
                <View>
                    <Text style={style.normalText}>Humidity {props.humidity} %  </Text>
                    <Text style={style.normalText}>Feel Like {props.feels_like} °C    </Text>
                </View>

                <View>
                    <Text style={{textAlign: 'right', fontSize: 20,fontWeight: "bold",color: 'white'}}>description</Text>
                    <Text style={style.normalText}>{props.description}</Text>
                </View>

            </View>
        </View>
    );
}

const style = StyleSheet.create(
    {
        normalText: {
            textAlign: 'left',
            fontSize: 25,
            fontWeight: "bold",
            color: 'rgba(255,255,255,0.7)'
        },

        tempNum: {
            fontSize: 80, 
            fontWeight: "bold", 
            color: 'rgba(255,255,255,0.7)', 
            textAlign: 'center',
            lineHeight: 90
        }
    }
) 
