import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../contexts/UserContextProvider'
import { useRoute } from '@react-navigation/native';

const Details = () => {
  const {users} = useContext(userContext);
  const {params} = useRoute();
  const [user ,setUser] = useState();
  useEffect(()=>{
     users.map((u)=>u.id==params?setUser(u):u)
  },[])
  if (!user) return <Text >Wait for Loading</Text>
  return (
    <View style={styles.container}>

      <Text style={styles.text}>User Name : {user.username}</Text>
      <Text style={styles.text}>Name : {user.name}</Text>
      <Text style={styles.text}>Website : <a href={user.website}>{user.website}</a></Text>
      <Text style={styles.text}>Phone Number : {user.phone}</Text>
      <Text style={styles.text}>Email : {user.email}</Text>

    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    backgroundColor : 'lightgray',
    padding : 10 ,
    margin : 10,
    borderRadius: 20
  },
  text :{
    fontSize: 20 ,
    fontWeight: "bold",
    color: "blue",
    margin: 2,

  }
})