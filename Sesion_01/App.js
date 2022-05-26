import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [person, setPerson] = useState({
    name: "",
    age: "",
  });

  const [persons, setPersons] = useState([]);

  const resetInputs = () => {
    setPerson({
      name: "",
      age: "",
    });
  };

  const addPerson = () => {
    const newPerson = {
      name: person.name,
      age: person.age,
    };
    setPersons([...persons, newPerson]);
    resetInputs();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Form Person</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(text) => setPerson({ ...person, name: text })}
        value={person.name}
      />

      <TextInput
        style={styles.input}
        placeholder="Age"
        onChangeText={(text) => setPerson({ ...person, age: text })}
        value={person.age}
      />

      <TouchableOpacity style={styles.button} onPress={addPerson}>
        <Text style={styles.buttonText}>Add Person</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Persons</Text>
      {persons.length > 0 ? (
        persons.map((person, index) => (
          <View key={index} style={styles.person}>
            <Text>Name: {person.name}</Text>
            <Text>Age: {person.age}</Text>
          </View>
        ))
      ) : (
        <Text>No persons added yet</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    width: "80%",
    marginBottom: 20,
    padding: 10,
  },
  button: {
    backgroundColor: "#ff21bb",
    padding: 10,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  person: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    borderRadius: 5,
  },
});
