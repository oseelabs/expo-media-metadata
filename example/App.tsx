import { useEvent } from 'expo';
import ExpoMediaMetadata from 'expo-media-metadata';
import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>
        {JSON.stringify(ExpoMediaMetadata.getMetadata("file:///storage/emulated/0/Music/Loyal Flames - Keep Focus [Official Video 2023].mp3"))}
      </Text>
    </SafeAreaView>
  );
}

function Group(props: { name: string; children: React.ReactNode }) {
  return (
    <View style={styles.group}>
      <Text style={styles.groupHeader}>{props.name}</Text>
      {props.children}
    </View>
  );
}

const styles = {
  header: {
    fontSize: 30,
    margin: 20,
  },
  groupHeader: {
    fontSize: 20,
    marginBottom: 20,
  },
  group: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  view: {
    flex: 1,
    height: 200,
  },
};
