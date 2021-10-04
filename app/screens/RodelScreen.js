import React, {useEffect, useState} from 'react';
import {SearchBar} from 'react-native-elements';
import { View, FlatList, SafeAreaView } from 'react-native';
import colors from "../config/colors";

import usersApi from "../api/users"
import useApi from "../hooks/useApi";

import RodelItem from "../components/RodelItem";

function RodelFilter({ navigation }) {

    const [searchValue, setSearchValue] = useState("");
    const getUserApi = useApi(usersApi.getUsers);
    const [cacheData, setCacheData] = useState({data: getUserApi.data});

    useEffect(() => {
        getUserApi.request()
        }, []);



    const renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: '100%',
                    backgroundColor: colors.danger,
                    marginLeft: '0%',
                }}
            />
        );
    };

    const searchFilterFunction = text => {
        setSearchValue(text);

        if(text == ""){
            setCacheData({data: getUserApi.data});
        }else{
            const newData = getUserApi.data.filter(item => {
                const itemData = `${item.first_name.toUpperCase()} ${item.last_name.toUpperCase()} ${item.roles.toUpperCase()}`;
                const textData = text.toUpperCase();

                return itemData.indexOf(textData) > -1;
            });
            setCacheData({data: newData});
        }

    };

    return (
        <View style={{ flex: 1 }}>
            <SearchBar
                placeholder="Type Here..."
                lightTheme
                round
                onChangeText={text => searchFilterFunction(text)}
                autoCorrect={false}
                value={searchValue}
            />
            <FlatList
                data={cacheData.data}
                keyExtractor={user => user._id}
                renderItem={({ item }) => (
                    <RodelItem
                        name={`${item.first_name} ${item.last_name}`}
                        roles={item.roles}
                        image={item.picture}
                        onPress={() => console.log("Open Details with: " + item)}
                    />
                )}
                ItemSeparatorComponent={renderSeparator}
            />
        </View>
    );
}


function RodelScreen({ navigation }) {
    return(
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.riesbach }}>
        <RodelFilter/>
    </SafeAreaView>
    )
}

export default RodelScreen;