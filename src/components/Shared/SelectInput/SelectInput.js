import React, { useMemo, useState } from 'react'
import Select from 'react-select'
import cities from 'cities.json'

const options = cities.map(({ name, lat, lng }) => ({ label: name, value: { lat, lng } }))

const SelectInput = ({ value, setValue }) => {
  const [inputValue, setInputValue] = useState('')
  const filteredOptions = useMemo(() => {
    if (!inputValue.length) return []

    return options
      .filter(({ label }) => label.toLowerCase().startsWith(inputValue.toLowerCase()))
      .slice(0, 100)
  }, [inputValue])

  return (
    <Select
      noOptionsMessage={({ inputValue: v }) => v || 'Start typing for search'}
      placeholder="Search by city name"
      options={filteredOptions}
      value={value}
      inputValue={inputValue}
      onChange={setValue}
      onInputChange={setInputValue}
      className="my-3"
    />
  )
}

export default SelectInput
