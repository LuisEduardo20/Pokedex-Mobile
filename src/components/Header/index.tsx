import React, {useState} from 'react';
import {IconButton} from 'react-native-paper';
import {HeaderContext} from '../../contexts/HeaderContext';
import FilterList from './FilterList';
import FilterModal from './FilterModal';
import {Container, Logo, ContainerSearch, SearchInput} from './styles';

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [filterList, setFilterList] = useState(['Todos']);

  return (
    <HeaderContext.Provider
      value={{modalVisible, setModalVisible, filterList, setFilterList}}>
      <Container>
        <Logo source={require('../../../assets/login_title.png')} />

        <ContainerSearch>
          <SearchInput placeholder="Buscar Pokémon" />
          <IconButton
            icon="filter-variant"
            color={'#5E5D5D'}
            size={20}
            onPress={() => setModalVisible(!modalVisible)}
          />
        </ContainerSearch>

        <FilterList />

        <FilterModal />
      </Container>
    </HeaderContext.Provider>
  );
};

export default Header;
