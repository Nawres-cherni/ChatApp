import React,{useState} from 'react'
import { View, Text ,Image,StyleSheet,KeyboardAvoidingView,TouchableOpacity,ActivityIndicator} from 'react-native'
import { TextInput,Button } from 'react-native-paper';
import {launchImageLibrary} from 'react-native-image-picker';
import 'firebase/storage';
//import * as ImagePicker from 'expo-image-picker';
import  firebase from 'firebase';


export default function Signup({navigation}) {
    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const [image,setImage] = useState(null)
    const [showNext,setShowNext] = useState(false)
    const [loading,setLoading] = useState(false)
    if(loading){
        return  <ActivityIndicator size="large" color="#00ff00" />
    }
    const userSignup = async ()=>{
        setLoading(true)
        if(!email || !password || !name){
               alert("please add all the field")
               return 
        }
        try{
          const result =  await firebase.auth().createUserWithEmailAndPassword(email,password)
            firebase.firestore().collection('users').doc(result.user.uid).set({
                name:name,
                email:result.user.email,
                uid:result.user.uid,           
                status:"online"
            })  
            setLoading(false)
        }catch(err){
            alert("something went wrong")
            console.error(err);
        }
       

    }
   
    return (
        <KeyboardAvoidingView behavior="position">
            <View style={styles.box1}>
                <Text style={styles.text}>Welcome to Whatsapp 5.0</Text>
  
            </View>
            <View style={styles.box2}>
                {!showNext && 
                <>
                 <TextInput
                 label="Email"
                 value={email}
                 onChangeText={(text)=>setEmail(text)}
                 style={{marginTop:50}}
                 mode="outlined"
                />
                <TextInput
                 label="password"
                 mode="outlined"
                 value={password}
                 onChangeText={(text)=>setPassword(text)}
                 style={{marginTop:50}}
                 secureTextEntry
                />
                </>
                }
               
               {showNext ?
                <>
                 <TextInput
                 label="Name"
                 value={name}
                 onChangeText={(text)=>setName(text)}
                 style={{marginTop:50}}
                 mode="outlined"
                />
               
                <Button
                mode="contained"
               // disabled={image?false:true}
                onPress={()=>userSignup()}
                >Signup</Button>
                </>
                :
                 <Button
                mode="contained"
                onPress={()=>setShowNext(true)}
                style={{marginTop:50}}
                >Next</Button>
                }

            </View>
            <TouchableOpacity onPress={() => navigation.navigate("login")}><Text style={{textAlign:"center",marginTop:150}}>Already have an account ?</Text></TouchableOpacity>

        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    text:{
        fontSize:22,
        color:"green",
        margin:10
    },
    img:{
        width:200,
        height:200
    },
    box1:{
        alignItems:"center"
    },
    box2:{
        paddingHorizontal:40,
        justifyContent:"space-evenly",
        height:"50%"
    }
 });