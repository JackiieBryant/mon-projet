import React from "react";
import { View, Text , StyleSheet} from "react-native";

function App () {
  return (
    <View style = {{ marginTop: 50, flexDirection: "column"}}>
      <View style={{ backgroundColor: 'green'}}>
        <Text style={{ fontFamily: 'cochin'}}> Text One </Text>
        <Text style={{ fontFamily: 'cochin'}}> Text Two </Text>
      </View>

      <View style={{ backgroundColor: 'red'}}>
        <Text style={{ fontFamily: 'cochin', fontSize: '20', fontWeight:'bold'}}> Text Three </Text>
      </View>
      
    </View>
  );
}
// const styles = StyleSheet



export default App;







