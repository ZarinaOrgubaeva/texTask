import { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

export const Form = () => {
  const [formData, setFormData] = useState({
    tower: "",
    floor: "",
    conference: "",
    date: "",
    hours: "",
    minutes: "",
    comment: "",
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.tower === "") {
      alert("Выберите башню");
    }
    if (formData.floor === "") {
      alert("Выберите этаж");
    }
    if (formData.conference === "") {
      alert("Выберите переговоры");
    }
    if (formData.date === "") {
      alert("Выберите дату");
    }
    if (formData.hours === "") {
      alert("Выберите время");
    }
    if (formData.minutes === "") {
      alert("Выберите время");
    }
    console.log(JSON.stringify(formData));
  };
  const handleClearBtn = () => {
    setFormData({
      tower: "",
      floor: "",
      conference: "",
      date: "",
      hours: "",
      minutes: "",
      comment: "",
    });
  };
  return (
    <FormStyled onSubmit={handleSubmit}>
      <label htmlFor="Tower">Башня</label>
      <select
        id="tower"
        name="tower"
        value={formData.tower}
        onChange={handleChange}
      >
        <option value="A">A</option>
        <option value="B">B</option>
      </select>
      <br />
      <label htmlFor="floor">Этаж</label>
      <select
        id="floor"
        name="floor"
        value={formData.floor}
        onChange={handleChange}
      >
        <option value="floor3">3</option>
        <option value="floor4">4</option>
        <option value="floor5">5</option>
        <option value="floor6">6</option>
        <option value="floor7">7</option>
        <option value="floor8">8</option>
        <option value="floor9">9</option>
        <option value="floor10">10</option>
        <option value="floor11">11</option>
        <option value="floor12">12</option>
        <option value="floor13">13</option>
        <option value="floor14">14</option>
        <option value="floor15">15</option>
        <option value="floor16">16</option>
        <option value="floor17">17</option>
        <option value="floor18">18</option>
        <option value="floor19">19</option>
        <option value="floor20">20</option>
        <option value="floor21">21</option>
        <option value="floor22">22</option>
        <option value="floor23">23</option>
        <option value="floor24">24</option>
        <option value="floor25">25</option>
        <option value="floor26">26</option>
        <option value="floor27">27</option>
      </select>
      <br />
      <label htmlFor="conference">Переговорки</label>
      <select
        id="conference"
        name="conference"
        value={formData.conference}
        onChange={handleChange}
      >
        <option value="conference1">1</option>
        <option value="conference2">2</option>
        <option value="conference3">3</option>
        <option value="conference4">4</option>
        <option value="conference5">5</option>
        <option value="conference6">6</option>
        <option value="conference7">7</option>
        <option value="conference8">8</option>
        <option value="conference9">9</option>
        <option value="conference10">10</option>
      </select>
      <br />
      <label htmlFor="date">Date</label>
      <input
        type="date"
        id="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      <br />
      <TimeContainer>
        <label htmlFor="time">Время</label>
        <select value={formData.hours} onChange={handleChange} name="hours">
          {Array.from({ length: 24 }).map((_, index) => (
            <option key={index} value={index}>
              {index.toString().padStart(2, "0")}
            </option>
          ))}
        </select>
        <select value={formData.minutes} onChange={handleChange} name="minutes">
          {Array.from({ length: 60 }).map((_, index) => (
            <option key={index} value={index}>
              {index.toString().padStart(2, "0")}
            </option>
          ))}
        </select>
      </TimeContainer>
      <br />
      <label htmlFor="comment">Комментария</label>
      <textarea
        id="comment"
        name="comment"
        value={formData.comment}
        onChange={handleChange}
      ></textarea>
      <Btn>
        <Button variant="outlined" onClick={handleClearBtn}>
          Очистить
        </Button>
        <Button variant="contained" type="submit">
          Отправить
        </Button>
      </Btn>
    </FormStyled>
  );
};
const FormStyled = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  margin-left: 25rem;
  margin-top: 3rem;
  background-color: aliceblue;
  padding: 1rem;
  select,
  input {
    padding: 0.5rem;
    width: 300px;
    margin-left: 9rem;
    margin-top: -1.5rem;
  }
  label {
    font-weight: bold;
    color: #198585;
    margin-left: 2rem;
    margin-top: 1rem;
  }
  textarea {
    width: 300px;
    margin-left: 9rem;
    margin-top: -1.5rem;
  }
`;
const Btn = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
  Button {
    margin-left: 1rem;
  }
`;
const TimeContainer = styled.div`
  display: flex;
  select {
    margin-left: 6rem;
    width: 60px;
    margin-top: 1rem;
  }
`;
