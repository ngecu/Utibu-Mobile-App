
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button,Card } from 'react-native-paper';

export default function TabTwoScreen() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleSignUp = () => {
    // Handle signup logic here
    const userData = {
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Phone: phone,
      Address: address,
      Username: username,
      Password: password
    };
    console.log(userData);
    // You can send this data to your backend for processing or perform any other necessary action
  };

  return (
    <View style={styles.container}>
            <Card>
    <Card.Content>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        label="First Name"
        value={firstName}
        onChangeText={setFirstName}
        style={styles.input}
      />
      <TextInput
        label="Last Name"
        value={lastName}
        onChangeText={setLastName}
        style={styles.input}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        label="Phone"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
      />
      <TextInput
        label="Address"
        value={address}
        onChangeText={setAddress}
        style={styles.input}
      />
      <TextInput
        label="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button mode="contained" onPress={handleSignUp} style={styles.button}>
        Sign Up
      </Button>
      </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color:'white'
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
  },
});