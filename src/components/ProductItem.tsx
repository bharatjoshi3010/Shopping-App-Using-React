import { Image, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'


type ProductProps = PropsWithChildren<{
    product: Product
}>

export default function ProductItem({product}: ProductProps) {
  return (
    <View style={styles.container}>
      <Image 
      style={styles.image}
      source = {{
        uri: product.imageUrl
      }}
      />
      <View style={styles.details}>
        <View style={styles.name}>
          <Text style={styles.nameTxt}>{product.name}</Text>
        </View>
        <View style={styles.rating}>
            <Text style={styles.ratingTxt}>{product.rating.toLocaleString()} ⭐</Text>
        </View>
        <View style={styles.price}>
         <View >
            <Text style={styles.discountPriceTxt} >{product.discountPrice} $    </Text>
        </View>
        <View>
            <Text>Origial Price : {product.originalPrice}</Text>
        </View> 
        </View>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor : 'white',
     flexDirection : 'row',
     paddingHorizontal : 8,
     marginHorizontal : 8,
     paddingVertical : 16,
     alignItems : "center"
    //  width : 400
  },
  image:{
    width : 100,
    height :100,
    resizeMode: 'contain',
  },
  details:{
   paddingLeft : 20
  },
  name: {
    paddingRight: 80,
    marginBottom : 15
  },
  nameTxt:{
    fontWeight: 'bold',
    fontSize : 20,
    // flexWrap :'wrap'
  },
  rating:{
    backgroundColor :'green',
    width:55,
    alignItems : 'center',
    borderRadius: 15
  },
  price:{
    flexDirection : 'row',
    alignItems : 'baseline'
  },
  ratingTxt:{
    color: 'white',
    fontWeight : 'bold'
  },
  discountPriceTxt:{
    fontSize : 22
  }

})