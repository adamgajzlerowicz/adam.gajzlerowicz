import React from 'react';
import { StyleSheet, View, WebView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <WebView
          source={{ uri: 'https://adamgajzlerowicz.github.io/portfolio' }}
          style={{ marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
