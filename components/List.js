import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
  Image
} from "react-native";
import PreviewPressableTile from "./PreviewPressableTile";
import { useNavigation } from '@react-navigation/native';
// definition of the Item, which will be rendered in the FlatList
const Item = ({ item, navigation }) => (
  <View>
      <PreviewPressableTile
        dormName={item.name}
        dormImage={<Image source= {{ uri: item.images[0] }} alt="image" />}
        dormRating={item.avg_rating}
        onPress={() => navigation.navigate('DetailScreen', {
          ...item
        })} 
      />
  </View>
);

const List = (props) => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => {
    // when no input, show all
    if (props.searchPhrase === "") {
      return <Item item={item} navigation={navigation} />;
    }
    // filter of the name
    if (item.name.toUpperCase().includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
        return <Item name={item.name} details={item.avg_rating} dormImage ={item.dormImage} navigation ={navigation} avg_rating={item.avg_rating} />;
    }
    // filter of the descriptionAAAAAAAAAAAAAAAAAAAAAAAA to use for filters later
    //if (item.details.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      //return <Item name={item.name} details={item.details} />;
    //}
  }
  return (
    <SafeAreaView style={styles.list__container}>
        <View>
            <FlatList
                data={props.data}
                renderItem={renderItem}
                keyExtractor={(item) => item.name}
            />
      </View>
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: "88%",
    width: "100%",
  },
  item: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
  },
});