function spliceMessages(messages) {
  let spliceMessages = [];
  if (messages.length) {
    while (messages.length > 0) {
      spliceMessages.push(messages.splice(0, 70));
    }
  }

  return spliceMessages;
}

module.exports = spliceMessages;
