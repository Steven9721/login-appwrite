import { View, Text, ScrollView, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, useRouter } from 'expo-router'; 

import { images } from '../../constants'; 
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { createUser } from '../../lib/appwrite';

const SignUp = () => {
  const [form, setForm] = useState({ 
    username: '',
    email: '',
    password: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false); 
  const router = useRouter(); 

  const submit = async () => {
    if (!form.username || !form.email || !form.password) { 
      Alert.alert('Error', 'Please fill in all the fields');
     
    }

    setIsSubmitting(true); 

    try {
      const result = await createUser(form.email, form.password, form.username);

      // Aquí puedes setear el estado global si es necesario

      router.replace('/home');
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="w-full justify-center min-h-[83vh] px-4 my-6">
          <Image
            source={images.EpaLog}
            resizeMode="contain"
            className="w-[65px] h-[64px]"
          />

          <Text className="text-2xl font-semibold text-black mt-10 font-psemibold">
            ¡Registrate ahora!
          </Text>

          <FormField
            title="Usuario"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })} 
            otherStyles="mt-10"
          />
          <FormField
            title="Correo"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })} 
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Contraseña"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })} 
            otherStyles="mt-7"
          />

          <CustomButton
            title="Registrarse"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting} 
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-black-100 font-pregular">
              ¿Ya tienes cuenta?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary"
            >
              ¡Ingresa!
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
