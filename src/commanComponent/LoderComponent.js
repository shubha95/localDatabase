import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';

const LoaderComponent = ({ loading, title }) => {
  if (!loading) return null;

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={styles.loadingText}>{title} ...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 10
  },
  loadingText: {
    marginTop: 10,
    color: '#fff',
    fontSize: 18
  }
});

export default LoaderComponent;
