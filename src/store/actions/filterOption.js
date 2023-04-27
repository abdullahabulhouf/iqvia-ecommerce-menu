export const selectOption = option => ({
  type: 'SELECT_OPTION',
  option: option
})

export const unSelectOption = option => ({
  type: 'UN_SELECT_OPTION',
  option: option
})

export const resetSelectedOptions = (filterType) => ({
  type: 'UN_SELECT_ALL_OPTIONS',
  filterType: filterType
})