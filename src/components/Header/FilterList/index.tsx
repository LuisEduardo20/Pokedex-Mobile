import React, {useContext} from 'react';
import {IconButton} from 'react-native-paper';
import {HeaderContext} from '../../../contexts/HeaderContext';
import {SortContainer, SortButton, SortButtonText} from './styles';

const FilterList = () => {
  const {filterList, setFilterList} = useContext(HeaderContext);

  const removeFilter = (tagName: string) => {
    if (filterList.length > 1) {
      setFilterList(() =>
        filterList.filter((name: string) => {
          return name !== tagName;
        }),
      );
    }
  };

  return (
    <SortContainer horizontal={true}>
      {filterList.map((tagName: string, index: number) => {
        return (
          <SortButton key={index}>
            <SortButtonText>{tagName}</SortButtonText>
            <IconButton
              icon="close-circle"
              size={17}
              color={'#5E5D5D'}
              style={{padding: 0, marginLeft: 5}}
              onPress={() => removeFilter(tagName)}
            />
          </SortButton>
        );
      })}
    </SortContainer>
  );
};

export default FilterList;
