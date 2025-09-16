import { Image, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'


//navigation import
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import Separator from '../components/Separator'

type  DetailProps = NativeStackScreenProps<RootStackParamList, 'Details'>

export default function DetailsPhone({route}: DetailProps) {
  const {product} = route.params
  return (
    <View style={{flex : 1,backgroundColor:'white'}}>
    <ScrollView style={styles.mainView}>
      <View style={styles.imageView}>
        <Image
        style={styles.image}
        source={{
          uri : product.imageUrl
        }}></Image>
      </View>
      <Separator></Separator>
      <View style={styles.detailContainer}>
        <View style={styles.name}>
          <Text style={styles.nameTxt}> {product.name}</Text>
        </View>
       
       <View style= {styles.priceContainer}>
          <View >
            <Text style={styles.discountedPriceTxt}>{product.discountPrice}💲</Text>
          </View>
          <View >
            <Text style={styles.OriginalPriceTxt}>Original Price: {product.originalPrice}</Text>
          </View>
          
        </View>
        <View >
            <Text ><Text style = {{fontWeight : '600'}}>Offer Percentage : </Text>{product.offerPercentage}</Text>
          </View>
        

        <View style = {styles.ratingbox}>
        <View style={styles.rating}>
          <Text style={styles.ratingTxt}> {product.rating} ⭐</Text>
        </View>
        <View >
          <Text><Text style={{fontWeight:'700'}}>Reviewd By : </Text> {product.ratingCount} trusted Buyers</Text>
        </View>
        </View>

        <View style={styles.tagView}>
          {
          product.tags.map((item, index)=>(
            <View style={styles.tag} key={index}>
              <Text>{item}</Text>
            </View>
          ))
        }
        </View>
        
        

         
      </View>
      
    </ScrollView>
    <View style={styles.btn}>
          <TouchableOpacity >
            <View style={styles.mainBtn}>
            <Text style={styles.btnText}>Add to Cart</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.mainBtn}>
            <Text style={styles.btnText}>Buy Now</Text>
            </View>
          </TouchableOpacity>
        </View>
        </View>
  )
}

const styles = StyleSheet.create({
  mainView:{
    paddingHorizontal : 10,
    backgroundColor : 'white',
    flex : 1,
  },
  imageView:{
    alignItems : 'center'
  },
  image:{
    height: 400,
    width : 400,
    resizeMode : 'contain'
  },
  detailContainer:{
    marginTop : 15
  },
  name:{

  },
  nameTxt:{
    fontSize : 24,
    fontWeight :'bold'
  },
  tagView:{
    flexDirection : 'row',
    flexWrap : 'wrap',
    marginTop : 15,
    padding : 0
  },
  tag:{
    // padding : 2,
    borderWidth : 1,
    borderColor : 'green',
    marginLeft : 10,
    marginTop : 5,
    paddingHorizontal : 5,
    borderRadius: 4,
    paddingVertical : 2
  },
  ratingbox:{
    marginTop : 20,
    flexDirection : 'row',
    justifyContent : 'space-between'
  },
  rating:{
    backgroundColor :'green',
    width:55,
    alignItems : 'center',
    borderRadius: 15
  },
  ratingTxt:{
    color: 'white',
    fontWeight : 'bold'
  },
  priceContainer:{
    flexDirection : 'row',
    marginTop : 20,
    justifyContent : "space-between",
    alignItems : 'baseline'
  },
  discountedPriceTxt:{
    fontSize : 35
  },
  OriginalPriceTxt:{
    fontSize : 14
  },
  btn:{
    flexDirection :'row',
    justifyContent : 'space-evenly',
    width : 400,
  },
  mainBtn:{
    backgroundColor : 'green',
    paddingVertical : 20,
    paddingHorizontal : 50,
    margin : 10,
    marginRight : 0,
    borderRadius : 10
  },
  btnText:{
    color : 'white',
    fontWeight : 'bold',
    fontSize : 20
  }
})