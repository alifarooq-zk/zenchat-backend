export enum WS_SEVER_EVENTS {
  JOIN_ROOMS = 'JOIN_ROOMS',
  CREATE_ROOM = 'CREATE_ROOM',
  NEW_MESSAGE = 'NEW_MESSAGE',
  EXCEPTION = 'EXCEPTION',
}

export enum WS_CLIENT_EVENTS {
  RECEIVED_MESSAGE = 'RECEIVED_MESSAGE',
  JOINED_ALL_ROOMS = 'JOINED_ALL_ROOMS',
}
