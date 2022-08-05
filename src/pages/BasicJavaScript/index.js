import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Primitive
const name = 'Arief Aryudi Syidik'; // String
const age = 21; // Number
const isLife = true; // Boolean

// Complex
const animal = {
  name: 'Miaw',
  type: 'Cat',
  age: 2,
  isLocal: true,
  color: 'Black',
  parent: {
    father: 'King',
    mother: 'Queen',
  },
}; // Object

const greeting = (name, age) => console.log(`Hello ${name} your age is ${age}`); // Function

greeting('Arief', 21);

const peopleName = [
  'Arief',
  'Fazri',
  'Adi',
  'Aryudi',
  'Syidik',
  'Chairul',
  'Hafidz',
]; // Object = Array
typeof peopleName; // Object

// jika hujan turun, maka kalau kerja bawa payung
// jika perut lapar, maka harus makan

// if (animal.name === 'Miaw') {
//   console.log('Hallo Miaw');
// } else {
//   console.log('Whose animal is this');
// }

const helloAnimal = (animalObject) =>
//   let resultHello = '';
//   if (animalObject.name === 'Miaw') {
//     resultHello = 'Hallo Miaw';
//   } else {
//     resultHello = 'Whose animal is this';
//   }
//   return resultHello;

  (animalObject.name === 'Miaw'
    ? 'Halo Miaw apa kabar?'
    : 'Ini hewan Siapa?');
function BasicJavaScript() {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>
        Materi Basic JavaScript di React Native
      </Text>
      <Text>
        Name:
        {' '}
        {name}
        {'\n'}
        Age:
        {age}
      </Text>
      <Text>{helloAnimal(animal)}</Text>
      <Text>{peopleName[0]}</Text>
      <Text>{peopleName[1]}</Text>
      <Text>{peopleName[2]}</Text>
      <Text>=====</Text>
      {peopleName.map((people) => (
        <Text key={people}>{people}</Text>
      ))}
    </View>
  );
}

export default BasicJavaScript;

const styles = StyleSheet.create({
  container: { padding: 16 },
  textTitle: { textAlign: 'center' },
});
