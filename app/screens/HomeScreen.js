import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from "../config/colors";

function HomeScreen({ navigation } ) {
    return (
       <View style={styles.container}>

           <View style={styles.topContainer}>
               <View style={{ flex: 2}}>
                   <Avatar
                       size="large"
                       rounded
                       source={require("../assets/blank_profile.png")}
                       onPress={() => navigation.navigate("Settings")}
                       activeOpacity={1}
                       containerStyle={{flex: 1, marginLeft: 50, marginTop: 52, marginBottom: 52}}
                   />
               </View>

               <View style={{ flex: 1, marginRight: -30}}>
                   <Icon
                       name="gear"
                       size={80}
                       color="#FFFFFF"
                       onPress={() => navigation.navigate("Settings")}
                   />
               </View>

           </View>

           <View style={styles.midContainer}>
               <Image
                   source={require("../assets/Wappen_ohneHintergrund_mitSchrift_mitSchatten.png")}
                   style={{
                       width: 300,
                       height: 400,
                       position: 'absolute',
                       bottom: 10,
                       top: 10
                   }}
               />
           </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.riesbach
    },
    topContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        flexDirection: "row"
    },
    midContainer: {
        flex: 3,
        width: '100%',
        paddingTop: 10,
        alignItems: 'center'
    },
    botContainer: {
        flex: 1,
        width: '80%',
        //alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10
    },
    nameContainer: {
        flex: 1,
        alignItems: 'center'
    }
})

export default HomeScreen;