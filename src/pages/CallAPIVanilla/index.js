import React, { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

const CallAPIVanilla = () => {
  const [dataUser, setDataUser] = useState({
    avatar: '',
    email: '',
    first_name: '',
    last_name: '',
  });

  const [dataJob, setDataJob] = useState({
    name: '',
    job: '',
  });

  useEffect(() => {
    // Call API dengan Method GET
    // fetch('https://reqres.in/api/users/2')
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
    // Call API dengan Method POST
    // const dataForAPI = {
    //   name: 'morpheus',
    //   job: 'leader',
    // };
    // console.log('data object: ', dataForAPI);
    // console.log('data stringify: ', JSON.stringify(dataForAPI));
    // fetch('https://reqres.in/api/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(dataForAPI),
    // })
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log('post-response: ', json);
    //   });
  }, []);

  const getData = () => {
    // fetch('https://reqres.in/api/users/2').then((response) => {
    //   console.log(response);
    // });
    // console.log('test');
    fetch('https://reqres.in/api/users/2')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setDataUser(json.data);
      });
  };

  const postData = () => {
    const dataForAPI = {
      name: 'morpheus',
      job: 'leader',
    };

    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForAPI),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log('post-response: ', json);
        setDataJob(json);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Call API dengan VanillaJS</Text>

      <Button title="GET DATA" onPress={getData} />
      <Text>Response GET DATA</Text>
      <Image
        source={{
          // uri: 'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
          // uri: '',
          uri:
            dataUser.avatar === ''
              ? 'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png'
              : dataUser.avatar,
        }}
        style={styles.avatar}
      />
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>

      <View style={styles.line} />

      <Button title="POST DATA" onPress={postData} />
      <Text>Response POST DATA</Text>
      <Text>{dataJob.name}</Text>
      <Text>{dataJob.job}</Text>
    </View>
  );
};

export default CallAPIVanilla;

const styles = StyleSheet.create({
  container: { padding: 16 },
  textTitle: { textAlign: 'center' },
  line: { height: 2, backgroundColor: 'black', marginVertical: 20 },
  avatar: { width: 100, height: 100, borderRadius: 100 },
});
