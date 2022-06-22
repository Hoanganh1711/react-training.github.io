import { Button, Form, Input } from 'antd';
import 'antd/dist/antd.css';
// import { useEffect } from 'react';
import { useState } from 'react';

const AddSongForm = ({ addSong }: any) => {
  const [componentSize, setComponentSize] = useState('default');

  const [newSongInput, setNewSongInput] = useState('');
  const [singerInput, setSingerInput] = useState('');
  const [descInput, setDescInput] = useState('');
  const [dateInput, setDateInput] = useState('');

  const onFormLayoutChange = (size: any) => {
    setComponentSize(size);
  };

  // Xử lý Validate
  const validateInput = () => {
    const formElement: any = document.querySelector('.form');
    const inputElement: any = formElement.querySelectorAll('.form-input');
    for (let i = 0; i < inputElement.length; i++) {
      if (inputElement[i].value === '') {
        inputElement[i].parentElement.querySelector('.error-message').innerText = `Please enter your ${inputElement[i].id}`;
      } else {
        inputElement[i].parentElement.querySelector('.error-message').innerText = '';
      }
    }
  };

  // Lấy dữ liệu từ form nhập

  const handleSongNameChange = (e: any) => {
    setNewSongInput(e.target.value);
  };

  const handleSingerChange = (e: any) => {
    setSingerInput(e.target.value);
  };

  const handleDescChange = (e: any) => {
    setDescInput(e.target.value);
  };

  const handleDateChange = (e: any) => {
    setDateInput(e._d);
  };


  const handleSubmit = (e: any) => {
    //Check error-message
    const formElement: any = document.querySelector('.form');
    const errorElement: any = formElement.querySelectorAll('.error-mesage');
    const arrErrorElement = [];
    for (let i = 0; i < errorElement.length; i++) {
      arrErrorElement.push(errorElement[i].innerText);
    }

    const checkErrorElement = arrErrorElement.every((value) => value === '');
    if (!checkErrorElement) {
      e.preventDefault();
      addSong(newSongInput, singerInput, descInput, dateInput);
      setNewSongInput('');
      setSingerInput('');
      setDescInput('');
      setDateInput('');
    } else {
      validateInput();
    }
  };

  return (
    <Form
      className="form"
      // onSubmitCapture={handleSubmit}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
    >
      <Form.Item>
        <div>
          <sup style={{ color: 'red' }}>*</sup> {`Song's Name:`}
        </div>
        <Input
          className="form-input"
          id="Song Name"
          value={newSongInput}
          onChange={handleSongNameChange}
        />
        <span style={{ color: 'red' }} className="error-message" />
      </Form.Item>
      <Form.Item>
        <div>
          <sup style={{ color: 'red' }}>*</sup> Singer Name:
        </div>
        <Input
          className="form-input"
          id="Singer Name"
          value={singerInput}
          onChange={handleSingerChange}
        />
        <span style={{ color: 'red' }} className="error-message" />
      </Form.Item>
      {/* <Form.Item>
        Kind of Music:
        <Select>
          <Select.Option value="demo1">Nhạc Trẻ</Select.Option>
          <Select.Option value="demo2">Nhạc Thính Phòng</Select.Option>
          <Select.Option value="demo3">Nhạc Dân Ca</Select.Option>
          <Select.Option value="demo4">Nhạc Nước Ngoài</Select.Option>
        </Select>
      </Form.Item> */}
      <Form.Item>
        <div>
          <sup style={{ color: 'red' }}>*</sup> Description:
        </div>
        <Input
          className="form-input"
          id="Description"
          value={descInput}
          onChange={handleDescChange}
        />
        <span style={{ color: 'red' }} className="error-message" />
      </Form.Item>
      <Form.Item>
        <div>
          <sup style={{ color: 'red' }}>*</sup> Posting Date:
        </div>
        {/* {
          // @ts-ignore
          <DatePicker
            onChange={handleDateChange}
          />
        } */}
        <Input
          className="form-input"
          onChange={handleDateChange}
          id="Date"
          type="date"
          style={{ border: 'solid 1px #ccc', padding: '5px' }}
        />
        <span style={{ color: 'red' }} className="error-message" />
      </Form.Item>
      <Form.Item>
        <Button style={{ backgroundColor: '#007BFF', color: '#fff' }} onClick={handleSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddSongForm;
