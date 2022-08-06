import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

const Item = ({ name, email, bidang }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: `https://ui-avatars.com/api/?name=${email}` }} style={styles.avatar} />
      <View style={styles.desc}>
        <Text style={styles.descName}>{name}</Text>
        <Text style={styles.descEmail}>{email}</Text>
        <Text style={styles.descBidang}>{bidang}</Text>
      </View>
      <Text style={styles.delete}>X</Text>
    </View>
  );
};

const LocalAPI = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bidang, setBidang] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const submit = () => {
    const data = {
      name,
      email,
      bidang,
    };

    axios.post('http://10.0.2.2:3004/users', data).then((res) => console.log('res: ', res));
    setName('');
    setEmail('');
    setBidang('');
    getData();
  };

  const getData = () => {
    axios.get('http://10.0.2.2:3004/users').then((res) => {
      console.log('res getData(): ', res);
      setUsers(res.data);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Local API (JSON Server)</Text>
      <Text style={styles.textSubtitle}>Masukkan Anggota</Text>
      <TextInput
        placeholder="Nama"
        style={styles.input}
        value={name}
        onChangeText={(value) => setName(value)}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        placeholder="Bidang"
        style={styles.input}
        value={bidang}
        onChangeText={(value) => setBidang(value)}
      />
      <View style={styles.button}>
        <Button title="Simpan" onPress={submit} />
      </View>
      <View style={styles.line} />
      {users.map((user) => {
        return <Item key={user.id} name={user.name} email={user.email} bidang={user.bidang} />;
      })}
    </View>
  );
};

export default LocalAPI;

const styles = StyleSheet.create({
  container: { padding: 16 },
  textTitle: { textAlign: 'center' },
  textSubtitle: { marginTop: 16 },
  line: { height: 2, backgroundColor: 'black', marginVertical: 20 },
  input: { borderWidth: 1, marginTop: 8, borderRadius: 8, paddingHorizontal: 16 },
  button: { marginTop: 8 },
  avatar: { width: 80, height: 80, borderRadius: 100 },
  itemContainer: { flexDirection: 'row', marginBottom: 16 },
  desc: { marginLeft: 16, flex: 1 },
  descName: { fontSize: 20, fontWeight: 'bold' },
  descEmail: { fontSize: 16 },
  descBidang: { fontSize: 12, marginTop: 8 },
  delete: { fontSize: 20, fontWeight: 'bold', color: 'red' },
});
