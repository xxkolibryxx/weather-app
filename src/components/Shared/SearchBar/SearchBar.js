import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

const SearchBar = () => {
  const asd = ''
  return (
    <InputGroup className="my-3">
      <Form.Control
        aria-label="Example text with button addon"
        aria-describedby="basic-addon1"
        placeholder={asd}
      />
      <Button variant="success" id="button-addon1">
        Find
      </Button>
    </InputGroup>
  )
}

export default SearchBar
