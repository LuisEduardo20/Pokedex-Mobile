import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {HeaderContext} from '../../../../../contexts/HeaderContext';

interface ButtonProps {
  text: string;
}

const Button = ({text}: ButtonProps) => {
  const {filterList, setFilterList} = useContext(HeaderContext);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    const nameSelected = filterList.includes(text);
    if (nameSelected) {
      setIsSelected(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterList]);

  const handleClick = () => {
    if (!isSelected) {
      const nameSelected = filterList.includes(text);
      if (!nameSelected) {
        setFilterList((oldValue: string[]) => [...oldValue, text]);
      }
    } else {
      const nameSelected = filterList.includes(text);
      if (nameSelected) {
        setFilterList(() =>
          filterList.filter((name: string) => {
            return name !== text;
          }),
        );
      }
    }
  };

  const getButtonStyle = (): Object => {
    return isSelected ? styles.clicked : styles.notClicked;
  };

  const getTextStyle = (): Object => {
    return isSelected ? styles.textClicked : styles.textNotClicked;
  };

  return (
    <TouchableOpacity
      style={[styles.container, getButtonStyle()]}
      onPress={() => {
        setIsSelected(!isSelected);
        handleClick();
      }}>
      <Text style={[styles.text, getTextStyle()]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: '45%',
    height: 40,
    borderRadius: 5,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  notClicked: {
    backgroundColor: '#d8d8d8',
  },

  clicked: {
    backgroundColor: '#2e6eb5',
  },

  text: {
    fontSize: 16,
    fontWeight: 'normal',
  },

  textNotClicked: {
    color: '#6b6060',
  },

  textClicked: {
    color: '#fff',
  },
});
