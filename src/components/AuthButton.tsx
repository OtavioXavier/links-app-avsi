import { useState } from "react";
import { router } from "expo-router";
import {
  View,
  Button,
} from "react-native";
import AuthModal from './AuthModel';
import CustomButton from './CustomButton';

interface AuthProps {
  title: string;
  senha: string;
  rota: string;
}

export default function AuthButton({ title, rota, senha }: AuthProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleLogin = (value: string) => {
    if (value === senha) {
      setIsModalVisible(false);
      router.replace(rota);
    } else {
      alert("Por favor digite a senha correta para entrar");
    }
  };

  return (
    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <CustomButton title={title} onPress={() => setIsModalVisible(true)} />
    <AuthModal
      visible={isModalVisible}
      onClose={() => setIsModalVisible(false)}
      onSubmit={handleLogin}
      name={title}
    />
  </View>
  );
}