import React, {useContext} from 'react';
import {Alert, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {IconButton} from 'react-native-paper';

import {HeaderContext} from '../../../contexts/HeaderContext';
import FilterButtons from './FilterButtons';

import {
  Header,
  HeaderTitle,
  ClearFiltersButton,
  FiltersContainer,
  ApplyButton,
  ApplyButtonText,
} from './styles';

const FilterModal = () => {
  const {modalVisible, setModalVisible, filterList, setFilterList} =
    useContext(HeaderContext);

  const handleFilter = () => {
    if (filterList.length > 0) {
      setModalVisible(false);
    } else if (filterList.length < 1) {
      Alert.alert('Error!', 'Seleciona ao menos 1 filtro!');
    }
  };

  return (
    <Modal
      isVisible={modalVisible}
      animationIn="slideInRight"
      animationOut="slideOutRight"
      coverScreen={true}
      hasBackdrop={false}
      style={styles.container}>
      <Header>
        <HeaderTitle>Filtro</HeaderTitle>
        <IconButton
          icon="close"
          size={20}
          color={'#5E5D5D'}
          onPress={() => setModalVisible(false)}
        />
      </Header>

      <FiltersContainer>
        <FilterButtons />
      </FiltersContainer>

      <ApplyButton onPress={handleFilter}>
        <ApplyButtonText>Aplicar</ApplyButtonText>
      </ApplyButton>
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

    alignItems: 'center',
    justifyContent: 'space-evenly',

    backgroundColor: '#fff',

    shadowColor: 'rgb(0, 0, 0)',

    elevation: 20,
  },
});

export default FilterModal;
