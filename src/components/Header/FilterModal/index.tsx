import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {Button} from 'react-native-paper';
import {HeaderContext} from '../../../contexts/HeaderContext';

const FilterModal = () => {
  const {modalVisible, setModalVisible} = useContext(HeaderContext);

  return (
    <Modal
      isVisible={modalVisible}
      animationIn="slideInRight"
      animationOut="slideOutRight"
      coverScreen={true}
      hasBackdrop={false}
      style={styles.container}>
      <Button onPress={() => setModalVisible(false)}>Fechar</Button>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '80%',
    padding: 0,
    margin: 0,
    marginLeft: '20%',

    backgroundColor: '#fff',

    shadowColor: 'rgb(0, 0, 0)',

    elevation: 20,
  },
});

export default FilterModal;
