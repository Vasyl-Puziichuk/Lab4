import React, { useState, useEffect, useReducer } from "react";
import Button from "react-bootstrap/Button";
import reducer from "./reducer";

export default function Del() {
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("messageList"))
  );
  // let [message, setMessage] = useState("");
  // const [messageList, setMessageList] = useState(
  //  JSON.parse(localStorage.getItem("messageList")) || []
  //  );
  useEffect(() => {
    localStorage.setItem("messageList", JSON.stringify(state));
  }, [state]);
  function handleRemoveItem(id) {
    setMessageList(messageList.filter((obj) => obj.id !== id));
    //}

    const addTodo = (event) => {
      if (event.key === "Enter") {
        dispatch({
          type: "add",
          payload: todoTitle,
        });
        setTodoTitle("");
      }
    };

    return (
      <div className={"firstl"}>
        <h3>Лабораторна робота 4</h3>
        <input
          type="text"
          value={message}
          placeholder="Заповніть місце"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <Button
          value="Add"
          onClick={(e) => {
            if (message == "") {
              dispatch({
                type: "add",
                payload: todoTitle,
              });
              message = "Пустий рядок";
            } else {
              setMessageList([
                ...state,
                {
                  id: messageList.length + 1,
                  message: message,
                  completed: false,
                },
              ]);
            }
            setMessage("");
          }}
        >
          Зберегти
        </Button>
        <div>
          {state.map((m) => (
            <p className={"paragraph"} key={m.id}>
              {m.message}{" "}
              <Button onClick={(event) => handleRemoveItem(m.id)}>
                Видалити
              </Button>
            </p>
          ))}
        </div>
      </div>
    );
  }
}
