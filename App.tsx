import React from 'react';
import { StyleSheet, View, WebView, Linking } from 'react-native';

const uri = 'http://hackerman-consulting.com';

export default function App() {
  return (
    <View style={styles.container}>
      <WebView
          ref={ref => { this.webview = ref; }}
          source={{ uri }}
          style={{ marginTop: 20 }}
          onNavigationStateChange={(event) => {
            if (event.url.indexOf(uri) < 0) {
              this.webview.stopLoading();
              Linking.openURL(event.url);
              return false
            }
          }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
