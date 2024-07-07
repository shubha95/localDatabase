import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const IncrementHigherOrder = (WrappedComponent) => {
  const HigherOrderComponentInner = () => {
    const [num, setNum] = useState(0);
    const handleInput = () => {
      setNum((prev) => prev + 1);
    };
    return <WrappedComponent num={num} handleButton={handleInput} />;
  };

  return HigherOrderComponentInner;
};

export default IncrementHigherOrder;

const styles = StyleSheet.create({});