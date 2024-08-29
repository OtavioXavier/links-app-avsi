import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Importa o ícone

interface Props {
  visible: boolean;
  onClose: () => void;
  onSubmit: (valor: string) => void;
  name: string;
}

const AuthModal = ({ visible, onClose, onSubmit, name }: Props) => {
  const [valor, setValor] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const enviar = () => {
    onSubmit(valor);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>{name}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Ionicons name="close" size={24} color="#00402A" />
            </TouchableOpacity>
          </View>
          <SafeAreaView style={styles.formContainer}>
            <Text style={styles.label}>Senha de acesso</Text>
            <View style={styles.input}>
              <TextInput
                secureTextEntry={isVisible}
                onChangeText={setValor}
                placeholder="Digite a senha..."
                style={{ margin: 0, padding: 0, width: "80%", height: 40 }}
              />
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setIsVisible(!isVisible)}
              >
                {isVisible ? (
                  <Ionicons name="eye-off" size={24} color="#00402A" />
                ) : (
                  <Ionicons name="eye" size={24} color="#00402A" />
                )}
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={enviar}>
              <Text style={styles.textButton}>Acesar</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: 300,
    padding: 10,
    backgroundColor: "#FFF5EC",
    borderRadius: 16,
    alignItems: "center",
  },
  input: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderRadius: 12,
    borderColor: "#00a443",
    width: "100%",
    marginBottom: 8,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 55,
  },
  closeButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00a443",
  },
  formContainer: {
    width: 250,
  },
  button: {
    backgroundColor: "#FF9C1A",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    borderRadius: 12,
    marginBottom: 16,
  },
  textButton: {
    color: "#FFF5EC",
    fontWeight: "bold",
    fontSize: 18,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00402A",
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    marginBottom: 20,
  },
});

export default AuthModal;
