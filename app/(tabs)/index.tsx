import { SafeAreaView } from 'react-native-safe-area-context';
import {ThemedView} from "@/components/ThemedView";
import {Text, View} from 'react-native';

export default function HomeScreen() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text>A</Text>
            <View>
                <View>
                    <View><Text>A</Text></View>
                </View>
            </View>
        </SafeAreaView>
    );
}
