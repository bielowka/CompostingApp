import React, {useState} from 'react';
import {
    Text,
    View,
    Image,
    Button,
    ScrollView,
    StyleSheet,
    TouchableHighlight,
    ProgressViewIOS,
    Alert
} from 'react-native';


const imageStyle = StyleSheet.create({
  container:{
    padding: 11,
    alignSelf: "center",
    width: 100,
    height: 100
  }
});



const test = () => {
    Alert.alert("Remember that Coffee Pulp will acidize your soil")
}

const Bin = (props) => {
    return(
        <ProgressViewIOS
            style={{width: 360, height: 360,}}
            progress={props.level}>

        </ProgressViewIOS>
    );
};

const Food = (props) => {
  return (
      <TouchableHighlight
          onPress={() => {
              props.changeLevel(props.level + props.type)
              if (props.name === "coffee pulp") {
                  test()
              }
          }}>
        <View>
          <Image
              source={props.source}
              style={imageStyle.container}
          />
          <Text style={{alignSelf: "center"}}> Add {props.name} </Text>
        </View>
      </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#bac447',
  },
  binProgress: {
      flex: 4,
      minHeight: "80%",
      paddingTop: 44,
      padding: 22,
      backgroundColor: '#e1cf6a'
  },
  buttonsChoicePanel: {
      flex: 1,
      padding: 20,
      fontSize: 18,
      backgroundColor: '#606911',
  },
  buttons: {
      flexDirection: "row",
      // alignSelf: "center",
      justifyContent: 'space-between'
  },
});

const Screen = () => {
    const [count,setCount] = useState(0);
  return (
      <ScrollView style={styles.container}>
          <View style={styles.binProgress}>
              <Text>Welcome!</Text>
              <Bin level={count}/>
          </View>
          <View style={styles.buttonsChoicePanel}>
              <View style={styles.buttons}>
                  <Food name="peelings"
                        source={require("C:/Users/sbiel/AppData/Roaming/nvm/CompostingApp/images/onion.jpg")}
                        level={count}
                        changeLevel={setCount}
                        type={0.001}
                  />
                  <Food name="coffee pulp"
                        source={require("C:/Users/sbiel/AppData/Roaming/nvm/CompostingApp/images/coffee.jpg")}
                        level={count}
                        changeLevel={setCount}
                        type={0.002}
                  />
                  <Food name="leftovers"
                        source={require("C:/Users/sbiel/AppData/Roaming/nvm/CompostingApp/images/leftovers.png")}
                        level={count}
                        changeLevel={setCount}
                        type={0.01}
                  />
              </View>
          </View>
      </ScrollView>
  );
}

export default Screen;