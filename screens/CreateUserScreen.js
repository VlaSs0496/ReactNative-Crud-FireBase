import React, {useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";



export const CreateUserScreen = () => {
    
    const [state, setState] = useState({
        name: '',
        lastName: '',
        phone: '',
        email: ''
    });

    const handleChangeText = (name, value) =>{
        setState({ ...state, [name]: value })
    }

    return (
    <View>
      <ScrollView style = {styles.container}>
        <View style={styles.inputGrup}>
          <TextInput style={styles.textGrup} placeholder="NameUser" onChangeText={ (value) => handleChangeText('name', value) } />
        </View>
        <View style={styles.inputGrup}>
          <TextInput style={styles.textGrup} placeholder="LastName" onChangeText={ (value) => handleChangeText('lastName', value) } />
        </View>
        <View style={styles.inputGrup}>
          <TextInput style={styles.textGrup} placeholder="Phone" onChangeText={ (value) => handleChangeText('phone', value) } />
        </View>
        <View style={styles.inputGrup}>
          <TextInput style={styles.textGrup} placeholder="Email" onChangeText={ (value) => handleChangeText('email', value) }/>
        </View>
        <View>
          <TouchableOpacity onPress={ console.log(state) }>
            <Text>Save User</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default CreateUserScreen;

const styles = StyleSheet.create({
  container:{
    padding: 50
    
  },
    inputGrup: {
    flex: 1,
    padding: 0,
    marginBottom: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#ccccc",
  },
  textGrup: {
    fontSize: 25,
  },
});
