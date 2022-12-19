import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

function Del() {
  let [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState(
    JSON.parse(localStorage.getItem("messageList")) || []
  );
  useEffect(() => {
    localStorage.setItem("messageList", JSON.stringify(messageList));
  }, [messageList]);
  function handleRemoveItem(id) {
    setMessageList(messageList.filter((obj) => obj.id !== id));
  }
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
            message = "Пустий рядок";
          } else {
            setMessageList([
              ...messageList,
              {
                id: messageList.length + 1,
                message: message,
              },
            ]);
          }
          setMessage("");
        }}
      >
        Зберегти
      </Button>
      <div>
        {messageList.map((m) => (
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

export default Del;
