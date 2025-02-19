import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react'

const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
  const [showPassword, setshowPassword] = useState(false)

  
  return (
    <View className={`space-y-2 ${otherStyles}`}>

      <Text className="text-base text-black-100 font-pmedium">{title}</Text>

      <View className="border-2 border-white-200 w full h-16 px-4 bg-white-100 rounded-2xl
      focus:border-secondary items-center">
        <TextInput
          className="flex-1 text-black font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />

        

      </View>
    </View>
  )
}

export default FormField