export default function (state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: messageList.length + 1,
          message: message,
          completed: false,
        },
      ];
    default:
      return state;
  }
}
