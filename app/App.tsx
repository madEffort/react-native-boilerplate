import React from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native'
import Input from './src/components/Input'

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 24 }}>React Native Web App Example</Text>
        <Input />
      </View>
    </SafeAreaView>
  )
}

export default App
