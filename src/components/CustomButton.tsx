import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
  title: string,
  onPress?: () => void
}

const CustomButton = ({ title, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#00a443',
    padding: 15,
    alignItems: 'center',
    color: '#FFF5EC',
    fontWeight: 'semibold',
    fontSize: 20,
    width: 250,
    paddingVertical: 16,
    borderRadius: 100,
    textAlign: 'center',
    alignContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;
