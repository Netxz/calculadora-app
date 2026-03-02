import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.displayContainer}>
        <Text style={styles.displayText} numberOfLines={1}>
           67 
        </Text>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.functionButton}>
          <Text style={styles.functionText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.functionButton}>
          <Text style={styles.functionText}>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.functionButton}>
          <Text style={styles.functionText}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton}>
          <Text style={styles.operatorText}>÷</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonNumber}>
          <Text style={styles.buttonNumber}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNumber}>
          <Text style={styles.buttonNumber}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNumber}>
          <Text style={styles.buttonNumber}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton}>
          <Text style={styles.operatorText}>x</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonNumber}>
          <Text style={styles.buttonNumber}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNumber}>
          <Text style={styles.buttonNumber}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNumber}>
          <Text style={styles.buttonNumber}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton}>
          <Text style={styles.operatorText}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonNumber}>
          <Text style={styles.buttonNumber}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNumber}>
          <Text style={styles.buttonNumber}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNumber}>
          <Text style={styles.buttonNumber}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton}>
          <Text style={styles.operatorText}>=</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={[styles.buttonNumber, styles.doubleWidthButton]}>
          <Text style={styles.buttonNumber}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNumber}>
          <Text style={styles.buttonNumber}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNumber}>
          <Text style={styles.buttonNumber}>=</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  displayContainer: {
    flex: 2.5,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  displayText: {
    color: '#FFFFFF',
    fontSize: 72,
    fontWeight: '300',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  functionButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 50,
    height: '75%',
    backgroundColor: '#A5A5A5',
  },
  functionText: {
    color: '#000000',
    fontSize: 28,
  },
  operatorButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 50,
    height: '75%',
    backgroundColor: '#FF9500',
  },
  operatorText: {
    color: '#FFFFFF',
    fontSize: 28,
  },
  buttonNumber: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 50,
    height: '75%',
    backgroundColor: '#333333',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 32,
  },
  doubleWidthButton: {
    flex: 2,
    alignItems: 'flex-start',
    paddingLeft: 32,
  }
});
