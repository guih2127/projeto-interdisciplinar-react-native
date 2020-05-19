import React, { useState } from 'react';
import { View, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-community/picker';

const Agenda = () => {
  const [date, setDate] = useState(new Date(1598051730000));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios' || 'android');
    setDate(currentDate);
  };

  constructor(props) {
    super(props)
    this.state = {
      atividade: [
        'Musicoterapia Idosos', 'Musicoterapia Infantil'
      ],
      profissional: [
        'Fulano', 'Ciclano', 'Beltrano'
      };
  }


  return (
    <View style={styles.container}>

      <View style={styles.containerAtividade}>
        <Text>
          Selecione a atividade:
          </Text>

        <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ atividade: itemValue })
          }>
          <Picker.Item label={this.props.atividade} />
        </Picker>
      </View>

      <View style={styles.containerProfissional}>
        <Text>
          Selecione o profissional:
          </Text>

        <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ profissional: itemValue })
          }>
          <Picker.Item label={this.props.profissional} />
        </Picker>
      </View>

      <View style={styles.containerAgendamento}>

        <Text>
          Selecione a data do agendamento:
      </Text>

        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />

        <Text>
          Selecione a hora do agendamento:
      </Text>

        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={'time'}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />

      </View>
    </View>
  );
};

export default Agenda;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})