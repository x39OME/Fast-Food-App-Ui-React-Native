import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AdjustmentsHorizontalIcon, Bars3CenterLeftIcon, MagnifyingGlassIcon} from 'react-native-heroicons/solid'
import { categories, foodItems } from '../constants'
import * as Animatable from 'react-native-animatable';
import FoodCard from '../components/FoodCard'

export default function HomeScreen() {

  const [activeCategory, setActiveCategory] = useState('Burger');

  return (
    <View className='flex-1 relative'>
      {/* background Image */}
      <Image blurRadius={30} source={require('../assets/images/background.png')} className='absolute w-full h-full' />
      <SafeAreaView className='flex-1'>
        {/* Menu*/}
        <View className='flex-row justify-between items-center mx-4 mt-4'>
          <View className='bg-white shadow-md rounded-2xl p-3'>
            <Bars3CenterLeftIcon size="25" stroke={100} color="black" />
          </View>
          {/* Avatar */}
          <View className="rounded-2xl" style={{backgroundColor: 'rgba(255,255,255, 1)', padding: 3}}>
            <Image className="h-12 w-12 rounded-2xl" source={require('../assets/images/avatar.png')} style={{backgroundColor: 'rgba(255,255,255,0.7)'}} />
          </View>
        </View>
        {/* Title */}
        <View className="my-12 space-y-2">
          <Text className="mx-4 text-5xl font-medium text-gray-200">Fast and</Text>
          <Text className="mx-4 text-5xl font-medium text-gray-200">
            <Text className="font-extrabold">Deliciouse</Text> Food
          </Text>
        </View>

        {/* Search Bar */}
        <View className="mx-4 flex-row justify-between items-center space-x-3">
          <View className="flex-row flex-1 p-4 bg-white rounded-2xl">
            <MagnifyingGlassIcon stroke={40} color="gray" />
            <TextInput placeholder='Food' value="Search" className="ml-2 text-gray-800" />
          </View>
          <View className="bg-white rounded-2xl p-4">
            <AdjustmentsHorizontalIcon size="25" stroke={40} color="black" />
          </View>
        </View>

        {/* Categories Scroll Bar */}
        <ScrollView className="mt-4 pt-4 max-h-20" horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 20}}>
        {
            categories.map((category, index)=>{
              let isActive = category == activeCategory;
              let textClass = isActive? ' font-bold': '';
              return (
                <Animatable.View
                  delay={index*120} // delay for each item
                  animation="slideInDown" // animation type
                  key={index}>

                  <TouchableOpacity onPress={()=> setActiveCategory(category)} >
                    <Text className={"text-black ml-3 mr-3 text-base tracking-widest"+textClass}>
                      {category}
                    </Text>
                    {
                      isActive? (
                        <View className="flex-row justify-center">
                          <Image source={require('../assets/images/line.jpg')} className="h-2 w-6" />
                        </View>
                      ):null
                    }
                  </TouchableOpacity>
                </Animatable.View>
              )
            })
          }
        </ScrollView>
        {/* Food cards */}
        <ScrollView contentContainerStyle={{paddingHorizontal: 20}} horizontal showsHorizontalScrollIndicator={false}>
          {
            foodItems.map((item, index)=> <FoodCard item={item} index={index} key={index} />)
          }
        </ScrollView>

      </SafeAreaView>
    </View>
  )
}
