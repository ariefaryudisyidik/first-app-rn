import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

const Item = () => {
  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: 'https://i.pravatar.cc/300' }} style={styles.avatar} />
      <View style={styles.desc}>
        <Text style={styles.descName}>Nama</Text>
        <Text style={styles.descEmail}>Email</Text>
        <Text style={styles.descBidang}>Bidang</Text>
      </View>
      <Text style={styles.delete}>X</Text>
    </View>
  );
};

const LocalAPI = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Local API (JSON Server)</Text>
      <Text style={styles.textSubtitle}>Masukkan Anggota</Text>
      <TextInput placeholder="Nama" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Bidang" style={styles.input} />
      <View style={styles.button}>
        <Button title="Simpan" />
      </View>
      <View style={styles.line} />
      <Item />
      <Item />
      <Item />
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
  avatar: { width: 100, height: 100, borderRadius: 100 },
  itemContainer: { flexDirection: 'row', marginBottom: 16 },
  desc: { marginLeft: 16, flex: 1 },
  descName: { fontSize: 20, fontWeight: 'bold' },
  descEmail: { fontSize: 16 },
  descBidang: { fontSize: 12, marginTop: 8 },
  delete: { fontSize: 20, fontWeight: 'bold', color: 'red' },
});
