import React, {useContext} from 'react';
import {IconButton} from 'react-native-paper';
import {HeaderContext} from '../../../contexts/HeaderContext';
import {SortContainer, SortButton, SortButtonText} from './styles';

const FilterContainer = () => {
  const {filterList} = useContext(HeaderContext);

  return (
    <SortContainer horizontal={true}>
      {filterList.map((tagName: string, index: number) => {
        return (
          <SortButton>
            <SortButtonText>{tagName}</SortButtonText>
            <IconButton
              key={index}
              icon="close-circle"
              size={17}
              color={'#5E5D5D'}
              style={{padding: 0, marginLeft: 5}}
              onPress={() => console.warn('Close Sort tag')}
            />
          </SortButton>
        );
      })}
    </SortContainer>
  );
};

export default FilterContainer;
