import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

//navigation import
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

//data
import Separator from '../components/Separator'
import ProductItem from '../components/ProductItem'
import { PRODUCTS_LIST } from '../data/constant'

type  HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

export default function HomeShop({navigation} : HomeProps) {
  return (
    <View>
      <FlatList 
        data={PRODUCTS_LIST}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Separator}
        renderItem={({item}) => (
          <Pressable          
            onPress={()=>{
              navigation.navigate('Details',{
                product: item
              }
              )
            }}
          ><ProductItem product={item}/></Pressable>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({})