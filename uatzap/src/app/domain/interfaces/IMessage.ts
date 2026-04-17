export interface IMessage {
  Id: string
  Sender: {
    Id: string,
    Username: string
  },
  Receiver: {
    Id: string,
    Username: string
  }
  MessageContent: string,
}
